import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './list'


function App() {
  const fruits = [
    {id:1, name: 'apple', color: 'red'},
    {id:2, name: 'banana', color: 'yellow'},
    {id:3, name: 'grape', color: 'purple'},
    {id:4, name: 'kiwi', color: 'green'},
    {id:5, name: 'orange', color: 'green'},
  ]
  const desserts = [
    {id:1 ,name: "cake", color: "red"},
    {id:2,name: "ice cream", color: "blue"},
    {id:3,name: "pie ", color: "green"},
  ]

  return (
    <>
      <Header/>
      {fruits.length > 0 ? (
      <ListOfFruits items= {fruits} category = "My Favorite Fruits"/>) : (<p>I do not like Fruits</p>)}
      {desserts.length > 0 ? (
      <ListOfFruits items= {desserts} category = "My Favorite Dessert"/>) : (<p>I do not like Fruits</p>)}
      {/* {fruits.length > 0 && <list items = {fruits} category = "My Fav Fruits"/>} */}
      <Footer/>
    </>
  )
}

export default App
