import React from 'react';

function FavoriteFood(props) {
    const {foods} = props
    if (foods.length === 0) {
        return <p>I have no favorite foods</p>;
    }

    return (
        <ul>
            {foods.map(food => (
                <li key={food.id}>{food.name} - {food.color} - Rating: {food.rating}</li>
            ))}
        </ul>
    );
}

export default FavoriteFood;

