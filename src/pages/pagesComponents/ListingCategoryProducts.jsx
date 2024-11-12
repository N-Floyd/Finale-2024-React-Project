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
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
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
