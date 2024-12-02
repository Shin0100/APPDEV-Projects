import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Footer'
import Header from './Header'
import FavGames from './Favoritegames'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FavGames/>
      <Footer/>

    </>
  )
}

export default App
