import { useState } from "react";
import { useLocation } from "react-router-dom";



export default function Game() {
  const location = useLocation();
  const game = location.state.game;


  const [reviews, setReviews] = useState([
    { gameId: 1, date: '2024-10-10', title: 'Amazing!', content: 'I love the strategic depth in Valorant.' , author: 'John Doe'},
    { gameId: 1, date: '2024-10-12', title: 'Solid Gameplay', content: 'Great game overall, but needs more maps.' , author: 'Jane Smith'},
    { gameId: 1, date: '2024-10-14', title: 'Good Teamplay', content: 'Team communication is key to success in this game.', author: 'Mike Johnson' },
    { gameId: 1, date: '2024-10-16', title: 'Thrilling Experience', content: 'The ranked games are intense and rewarding.' , author: 'Emily Davis' },
    { gameId: 1, date: '2024-10-18', title: 'Competitive!', content: 'The competition keeps me coming back every day.' , author: 'David Lee'},
  
    { gameId: 2, date: '2024-10-15', title: 'CS:GO is Life', content: 'Still the best FPS out there.', author: 'Jun Pasing' },
    { gameId: 2, date: '2024-10-16', title: 'Classic Shooter', content: 'This game has stood the test of time for a reason.', author: 'Jane Smith' },
    { gameId: 2, date: '2024-10-17', title: 'Best Maps', content: 'The map design is unmatched in the FPS genre.', author: 'Jun Pasing' },
    { gameId: 2, date: '2024-10-18', title: 'Intense Battles', content: 'Every round feels like a life-or-death situation.', author: 'Jun Pasing' },
    { gameId: 2, date: '2024-10-19', title: 'Skill-Based', content: 'Rewards skillful play and sharp reflexes.', author: 'Jun Pasing' },
  
    { gameId: 3, date: '2024-10-20', title: 'Addictive!', content: 'Can’t stop playing League of Legends!', author: 'Jun Pasing' },
    { gameId: 3, date: '2024-10-21', title: 'Teamwork Matters', content: 'Victory relies heavily on good teamwork.', author: 'Jun Pasing' },
    { gameId: 3, date: '2024-10-22', title: 'Strategic Depth', content: 'Every game feels different thanks to diverse strategies.' , author: 'Jun Pasing'},
    { gameId: 3, date: '2024-10-23', title: 'Challenging but Fun', content: 'Even losses teach you how to improve.', author: 'Jun Pasing' },
    { gameId: 3, date: '2024-10-24', title: 'Great Champions', content: 'The wide variety of champions keeps things fresh.' , author: 'Jun Pasing'},
  
    { gameId: 4, date: '2024-10-25', title: 'Hilarious Gameplay', content: 'The chaos among players is so funny.' , author: 'Jun Pasing'},
    { gameId: 4, date: '2024-10-26', title: 'Party Favorite', content: 'Among Us is always a hit at gatherings.', author: 'Jun Pasing' },
    { gameId: 4, date: '2024-10-27', title: 'Suspenseful Fun', content: 'Trying to find the imposter is a thrill!', author: 'Jun Pasing'},
    { gameId: 4, date: '2024-10-28', title: 'Mind Games', content: 'You never know who to trust.', author: 'Jun Pasing' },
    { gameId: 4, date: '2024-10-29', title: 'Simple but Entertaining', content: 'Easy to learn and a blast to play.', author: 'Jun Pasing' },
  
    { gameId: 5, date: '2024-10-30', title: 'Mobile Magic', content: 'Mobile Legends is the best MOBA for mobile devices.' , author: 'Jun Pasing'},
    { gameId: 5, date: '2024-10-31', title: 'Fast-Paced Action', content: 'Matches are quick and packed with excitement.', author: 'Jun Pasing' },
    { gameId: 5, date: '2024-11-01', title: 'Great Heroes', content: 'The roster of heroes is diverse and well-designed.', author: 'Jun Pasing' },
    { gameId: 5, date: '2024-11-02', title: 'Smooth Gameplay', content: 'Controls are intuitive, and the game runs smoothly.' , author: 'Jun Pasing'},
    { gameId: 5, date: '2024-11-03', title: 'Strategic Fun', content: 'Each match is an engaging test of skill and strategy.' , author: 'Jun Pasing'},
  ]);
  


  const reviewsForGame = reviews.filter((review) => review.gameId === game.id);

  return (
    <div className="game-detail">
      <img src={game.image} alt="" className="game-image" style={{ maxWidth: "35%", margin: "20px auto", display: "block" }} />
      <h1>{game.name}</h1>
      <p>{game.description}</p>

      <h3>Reviews:</h3>
      <ul>
        {reviewsForGame.length > 0 ? (
          reviewsForGame.map((review, index) => (
            <li key={index} className="reviews-container">
              <strong>{review.title}</strong> ({review.date}) <br />
              <em>by {review.author}</em> 
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet. Be the first to add one!</p>
        )}
      </ul>
    </div>
  );
}
