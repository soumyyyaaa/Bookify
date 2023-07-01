import './App.css';
import Header from './Components/Header';
import Navbars from './Components/Navbars';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Brands from './Pages/Brands';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbars />
      {/* <Home /> */}
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
