import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingsCategory = () => {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:");
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div>Loading products...</div>;
  if (products.length === 0) return <div>No products found in this category!</div>;

  return (
    <div className="category-page">
      <h2>Products in {category}</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="w-full h-[200px] object-cover" />
            <h3 className="text-sm font-semibold">{product.title}</h3>
            <p className="text-sm">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsCategory;
