import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Games from './components/Games';
import Game from './components/Game';
import './App.css';
import Footer from './Footer';
export default function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/games">Games</Link></li>
        </ul>
      </nav>
      <hr />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer/>
    </>
  );
}
