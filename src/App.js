import './App.css';
import Header from "../src/Components/Header"
import Navbars from './Components/Navbars';
import Home from '../src/Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Footer from './Components/Footer';
import Brands from './Pages/Brands/Brands';
import BestSellers from './Pages/BestSeller/BestSellers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Categories2 from './Pages/Categories/Categories2';
import AboutUs from './Pages/AboutUs/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/categoriespage2" element={<Categories2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);