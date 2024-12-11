import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProductManual = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    "Great product! Highly recommend it.",
    "The service was amazing, will buy again.",
    "Not bad, but it could be improved in some areas.",
    "Absolutely love this keyboard! It's perfect for gaming and typing.",
    "Good value for the price. Works great and feels solid.",
    "I had some issues with the key switches, but customer support helped me resolve them.",
    "A bit noisy for my taste, but the typing experience is smooth.",
    "Excellent build quality and fantastic customer service.",
    "Very satisfied with my purchase! The RGB lighting is a nice touch.",
    "The keys feel responsive, but the layout took some time to get used to."
  ]);
  

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-manual'>
      <h1>{product.name} Manual</h1>
      <img src={product.imageUrl} alt="keyboard" />
      
      <div className='product-details'>
        <h2>Product Details</h2>
        <p>Description: {product.description}</p>
        <p>Switch Type: {product.switchType}</p>
        <p>Materials: {product.materials}</p>
        <p>Connection Type: {product.connectionType}</p>
        <p>Weight: {product.weight}</p>
        <p>Backlight: {product.backlight}</p>
        <p>Price: {product.price}</p>
        </div>

        <div> <hr />
        <h2>User Comments</h2> <hr /><div className='comment'>
        {comments.map((comm, index) => (
          <div key={index}> <br />{comm}</div>
        ))}
      </div></div>
      <form onSubmit={handleCommentSubmit}>
          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment"
          />
          <button type="submit">Submit Comment</button>
        </form>
        <Link to="/products">
            <button>Back to Products</button>
        </Link>
    </div>
  );
};