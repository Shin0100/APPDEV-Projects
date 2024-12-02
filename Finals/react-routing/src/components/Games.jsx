import { Link } from "react-router-dom"


const games = [
    {
      id: 1,
      name: 'Valorant',
      description: 'Valorant is a tactical first-person shooter (FPS) game developed and published by Riot Games. It features a variety of playable characters called "agents," each with unique abilities. The game emphasizes precise gunplay, strategy, and team coordination, where players engage in 5v5 matches to plant or defuse bombs or eliminate the enemy team.'
    },
    {
      id: 2,
      name: 'Counter-Strike: Global Offensive (CS:GO)',
      description: 'Counter-Strike: Global Offensive is a highly popular tactical FPS game developed by Valve and Hidden Path Entertainment. Players are divided into two teams: terrorists and counter-terrorists. The game revolves around planting and defusing bombs or rescuing hostages, with a heavy focus on strategic gameplay, map control, and gun mechanics. It is renowned for its competitive esports scene.'
    },
    {
      id: 3,
      name: 'League of Legends',
      description: 'League of Legends (LoL) is a multiplayer online battle arena (MOBA) game developed and published by Riot Games. Players control a "champion" with unique abilities and work with a team of other players to destroy the enemy team\'s Nexus, located in their base. The game involves strategic play, team coordination, and mastering different champions and roles in a highly competitive environment.'
    },
    {
      id: 4,
      name: 'LMAO',
      description: 'LMAO (Laughing My Ass Off) is a hilarious and casual multiplayer game that emphasizes humor, jokes, and fun interactions. Players compete in a variety of mini-games that encourage laughter and social interaction. Whether playing quirky challenges or sharing funny moments, LMAO is designed to provide light-hearted entertainment for players of all ages.'
    }
  ];
  
export default function Games(){
    return(
        <>
        <h1>Games List:</h1>
        <ul>
            {games.map((game)=>(
                <li key={game.id}>
                    <Link to={`/games/${game.id}`} state={{game}}>
                    <strong>
                    {game.name}- <br />
                    </strong></Link>
                    {game.description}
                </li>
            ))}
        </ul>
        </>
    )
}