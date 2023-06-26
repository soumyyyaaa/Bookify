import './App.css';
import Header from './Components/Header';
import Navbars from './Components/Navbars';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbars />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
