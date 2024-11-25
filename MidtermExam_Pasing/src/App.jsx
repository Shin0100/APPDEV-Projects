import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Identification from './Identification';
import FavoriteFood from './FavoriteFood';
import Counter from './Counter';
import Function from './Function';
import Paragraph from './Paragraph';
import MyCart from './MyCart';

function App() {
  const favoriteFruits = [
    {  name: 'Strawberry', color: 'Red', rating: 9, id: 1 },
    { name: 'Banana', color: 'Yellow', rating: 8, id: 2 },
    { name: 'Mango', color: 'Green', rating: 10, id: 3},
    { name: 'Pineapple', color: 'Yellow', rating: 10, id: 4 },
    { name: 'Guava', color: 'Green', rating: 8 , id: 5}];

const porkDishes = [];

    return (
        <div>
            <Header />
            <Identification />
            <h2>Favorite Fruits</h2>
            <FavoriteFood foods={favoriteFruits} />
            <h2>Favorite Pork Dishes</h2>
            <FavoriteFood foods={porkDishes} />
            <Counter />
            <Function />
            <Paragraph />
            <MyCart />
            <Footer />
        </div>
    );
}

export default App;
