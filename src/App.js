
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Menu from './componant/Menu';
import Feature from './Feature';
import Premium from './Premium';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Footer from './componant/Footer';

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
        <Route exact path='/contact' element={<Contact name="Contact" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
