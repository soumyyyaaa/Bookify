import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import "../Pages/Home.css";

function Home() {
  return (
    <div>
      <div className="container1-home">
        <div className="text-container-home">
          <h3 style={{color: 'black', fontWeight: 600, fontSize: '2rem'}}>Year end sale</h3>
          <h1 className="heading-home">Get 70% Off For All Design Books</h1>
          <p>From type to logo design, the best graphic design books will take you on a journey to mastering your craft. best graphic design books.</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
      <div className="container2-home">
        <span>
          <FontAwesomeIcon icon={faTruckFast} size="2xl" />
          <span style={{float: 'right', textAlign: 'left'}}>
            <h5>FREE SHIPPING</h5>
            <p style={{color: '#707070'}}>Order over $100</p>
          </span>
        </span>
        <span>
          <FontAwesomeIcon icon={faLock} size="2xl" style={{alignItems: 'center'}} />
          <span style={{float: 'right', textAlign: 'left'}}>
            <h5>SECURE PAYMENT</h5>
            <p style={{color: '#707070'}}>100% Secure Payment</p>
          </span>
        </span>
        <span>
          <FontAwesomeIcon icon={faTag} flip="horizontal" size="2xl" />
          <span style={{float: 'right', textAlign: 'left'}}>
            <h5>BEST PRICE</h5>
            <p style={{color: '#707070'}}>Guaranteed Price</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Home;
