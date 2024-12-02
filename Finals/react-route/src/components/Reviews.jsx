import React, { useState } from "react";


export default function Reviews() {
  const [reviews, setReviews] = useState([]);


  return (
    <div className="reviews-container">
      <h4>Submit Your Game Review</h4>

      <div className="form-container">
        <input
          type="text"
          id="game-name"
          placeholder="Enter the game name"
          required
        />
        <input
          type="text"
          id="title"
          placeholder="Enter review title"
          required
        />
        <textarea
          id="content"
          placeholder="Enter review content"
          required
        ></textarea>
        <button onClick={addReview}>Submit Review</button>
      </div>

      {reviews.length > 0 ? (
        <div className="reviews-list">
          <h1>Game Reviews:</h1>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h2>{review.gameName}</h2>
              <h5><strong>{review.title}</strong></h5>
              <p>{review.content}</p>
              <p><i>({review.date})</i></p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews submitted yet.</p>
      )}
    </div>
  );
}
