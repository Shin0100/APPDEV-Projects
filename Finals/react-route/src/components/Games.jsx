import { Link } from "react-router-dom";

const games = [
  { id: 1, name: 'Valorant', description: 'Valorant is a tactical first-person shooter.', image: 'https://th.bing.com/th/id/OIP.STsqB9VCbaPiuULtnbM_YAAAAA?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'Counter-Strike', description: 'Counter-Strike: Global Offensive is a tactical FPS.', image: 'https://preview.redd.it/counter-strike-2-wallpaper-based-off-of-the-logo-but-v0-emj6kvnpn1mc1.png?auto=webp&s=d3ab796f328c33bc836a038cbd8ccfb528250c0f' },
  { id: 3, name: 'League of Legends', description: 'League of Legends is a multiplayer online battle arena.', image: 'https://th.bing.com/th/id/OIP.C2caZoLKJAE25LqPXtKJrwHaHx?rs=1&pid=ImgDetMain' },
  { id: 4, name: 'Among US', description: 'Among US is a hilarious multiplayer game.' , image:'https://th.bing.com/th/id/OIP.g6gCYxo6kG8PW87ZqR27BAHaHa?rs=1&pid=ImgDetMain' },
  { id: 5, name: 'Mobile Legends', description: 'Mobile Legends is a fast-paced, 5v5 multiplayer online battle arena (MOBA) game.' , image:'https://i.pinimg.com/originals/03/0b/b5/030bb5255b40ac0a65834b7ef28442aa.jpg' },
];

export default function Games() {
  return (
      <div className="games-container">
          <h1>Games List</h1>
          <div className="games-grid">
              {games.map((game) => (
                  <div key={game.id} className="game-card">
                      <img src={game.image} alt={game.name} className="game-image" />
                      <h3>{game.name}</h3>
                      <p>{game.description}</p>
                      <Link to={`/games/${game.id}`} state={{ game }} className="s">
                          View Details
                      </Link>
                  </div>
              ))}
          </div>
      </div>
  );
}