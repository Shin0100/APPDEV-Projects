import React, { useState } from 'react';

export const Reviews = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState([
    { name: "Alice", review: "Amazing company with top-notch products. Highly recommend shopping here.", date: "2024-06-01" },
    { name: "Bob", review: "Fast shipping and excellent customer service. Will definitely purchase again.", date: "2024-06-02" },
    { name: "Charlie", review: "The quality of their products is outstanding. My keyboard feels premium.", date: "2024-06-03" },
    { name: "David", review: "Had a small issue with my order, but the support team was super helpful and fixed it quickly.", date: "2024-06-04" },
    { name: "Emma", review: "The website was easy to navigate and the checkout process was smooth.", date: "2024-06-05" },
    { name: "Frank", review: "Great company! The keyboard I bought was exactly as described, and I love the customization options.", date: "2024-06-06" },
    { name: "Grace", review: "Customer service was a bit slow, but they eventually resolved my issue.", date: "2024-06-07" },
    { name: "Hannah", review: "They really care about their customers. I had a question about the product, and they replied almost immediately.", date: "2024-06-08" },
    { name: "Ivy", review: "I’ve been using their keyboards for months now, and they’ve never let me down.", date: "2024-06-09" },
    { name: "Jack", review: "Overall, good experience, but I wish they had more variety in colors and styles.", date: "2024-06-10" }
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && name.trim()) {
      const newReview = {
        name,
        review,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview]);
      setReview('');
      setName('');
    }
  };

  return (
    <div>
      <h1>Company Reviews</h1>
      <div className='comment'>
        {reviews.map((rev, index) => (
          <div key={index} style={{ marginTop: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <p><strong>{rev.name}</strong> ({rev.date})</p>
            <p>{rev.review}</p>
          </div>
        ))}
      </div>
      
      <h2>Leave a Comment!</h2>
      <hr />
      
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <br />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          required
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};
