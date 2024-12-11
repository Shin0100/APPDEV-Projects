import React from 'react';
import { Link } from 'react-router-dom';

export const ProductListing = ({ products }) => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className='product-list'>
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className='product-card'>
            <img src={product.imageUrl} alt="Keyboard" />
            <h2>{product.name}</h2>
            
            <p><strong> <h4> Price: {product.price}</h4></strong></p>
            <p>Learn More...</p>
          </div>
        </Link>
      ))}
      </div>
      
    </div>
  );
};