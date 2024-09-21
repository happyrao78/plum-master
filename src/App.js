import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TapTapGame from './components/Tap';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <TapTapGame />
    </BrowserRouter>
  );
}

export default App;
