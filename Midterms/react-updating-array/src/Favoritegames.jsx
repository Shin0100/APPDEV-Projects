import React, {useState} from 'react';
export default function FavGames(){
    const [ games, setgames]=useState(["GTA", "Hades", "L4D"])
    function handleAddGame(){
        const newGame = document.getElementById("Gameinput").value;
        setgames(g => [...g, newGame])
        document.getElementById("Gameinput").value="";
    }

    function handledeletegame(index){
        const newGame = games.filter((game, i) => i !== index);
        setgames(newGame)
    }
    return(
        <>
        <div>
            <h2> These are my Favorite Games in 2024</h2>
            <ul>

            </ul>
            {
                games.map((game,index)=> <li key={index} onClick={()=>handledeletegame(index)}>{game}</li>)
            }
            <input type="text" name='GameInput' id='Gameinput'/>
            <button type='button' onClick={handleAddGame}>Add Game</button>
        </div>
        </>
    )
}