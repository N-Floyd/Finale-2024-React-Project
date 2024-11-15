import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Network response was not ok", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="product-listing">
      <h2>Products in {category}</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} className="w-full h-[200px] object-cover" />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-sm">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ListingCategory;
