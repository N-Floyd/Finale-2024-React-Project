import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingCategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Network response was not ok');
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Products in {categoryName} category</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 cursor-pointer transition hover:scale-110 duration-500">
              <img className='w-[248px] h-[312px] px-5 py-5' src={product.image} alt={product.title} />
              <h2 className="font-medium text-sm mt-3 w-[248px] h-[40px]">{product.title}</h2>
              <p className='mt-7 h-[110px]'>{product.description}</p>
              <p className='font-semibold'>${product.price}</p>
            </div>
          ))
        ) : (
          <div>No products available in this category.</div>
        )}
      </div>
    </div>
  );
};

export default ListingCategoryProducts;
