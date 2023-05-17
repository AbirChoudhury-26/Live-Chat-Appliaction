import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import About from './components/About';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />

        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;

