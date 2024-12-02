import React, { useState } from "react";
import './index.css';
export default function Reviews() {

  const [reviews, setReviews] = useState([]);


  function addReview() {
    const gameName = document.getElementById("game-name").value;
    const reviewTitle = document.getElementById("title").value; 
    const reviewContent = document.getElementById("content").value;
    let reviewDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();

    const review = {
      gameName,      
      title: reviewTitle,
      content: reviewContent,
      date: reviewDate,
    };

    setReviews((prevReviews) => [...prevReviews, review]);
    document.getElementById("game-name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }

  return (
    <>
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
        <div>
          <h1>Game Reviews:</h1>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h2>{review.gameName}</h2>
              <h5><strong>{review.title}</strong> </h5>
              <p>{review.content}</p
              ><p>({review.date})</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews submitted yet.</p>
      )}
    </>
  );
}
