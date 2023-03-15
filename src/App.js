
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componant/Menu';
import Feature from './Feature';
import Premium from './Premium';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home name="home" />} />
        <Route exact path='/features' element={<Feature name="Features" />} />
        <Route exact path='/premium' element={<Premium name="Premium" />} />
        <Route exact path='/pricing' element={<Pricing name="Pricing" />} />
        <Route exact path='/about' element={<About name="About" />} />
      </Routes>
    </>
  );
}

export default App;
