import './App.css';
import Header from './Components/Header';
import Navbars from './Components/Navbars';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Footer from './Components/Footer';
import Brands from './Pages/Brands';
import BestSellers from './Pages/BestSellers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/bestsellers" element={<BestSellers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);