import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import "../Pages/Home.css";
import Container4Home from "../Components/Container4Home";

function Home() {
  return (
    <div>
      <div className="container1-home">
        <div className="text-container-home">
          <h3 style={{ color: "black", fontWeight: 600, fontSize: "2rem" }}>
            Year end sale
          </h3>
          <h1 className="heading-home">Get 70% Off For All Design Books</h1>
          <p>
            From type to logo design, the best graphic design books will take
            you on a journey to mastering your craft. best graphic design books.
          </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
      <div className="container2-home">
        <span>
          <FontAwesomeIcon icon={faTruckFast} size="2xl" />
          <span style={{ float: "right", textAlign: "left" }}>
            <h6>FREE SHIPPING</h6>
            <p style={{ color: "#707070" }}>Order over $100</p>
          </span>
        </span>
        <span>
          <FontAwesomeIcon
            icon={faLock}
            size="2xl"
            style={{ alignItems: "center" }}
          />
          <span style={{ float: "right", textAlign: "left" }}>
            <h6>SECURE PAYMENT</h6>
            <p style={{ color: "#707070" }}>100% Secure Payment</p>
          </span>
        </span>
        <span>
          <FontAwesomeIcon icon={faTag} flip="horizontal" size="2xl" />
          <span style={{ float: "right", textAlign: "left" }}>
            <h6>BEST PRICE</h6>
            <p style={{ color: "#707070" }}>Guaranteed Price</p>
          </span>
        </span>
      </div>
      <div className="container3-home">
        <h2 className="heading-new-arrivals">NEW ARRIVALS</h2>
        <hr className="line-home" />
        <button className="new-arrivals">All</button>
        <button className="new-arrivals">Cook Book</button>
        <button className="new-arrivals">History</button>
        <button className="new-arrivals">Fantasy</button>
        <button className="new-arrivals">Romance</button>
      </div>
      <Container4Home />
      <div className="container5-home">
        <h3 style={{color: '#000'}}>Shop wide range of collections</h3>
        <h1 className="heading-home">BOOK FESTIVAL</h1>
        <h5 style={{color: '#000'}}>ALL BOOKS ARE FLAT <strong>50% OFF</strong></h5>
        <button className="shop-now" style={{marginTop: '3%', padding: '1% 3%'}}>Shop Now</button>
      </div>
      <div className="container6-home">
        <h2 className="heading-new-arrivals">BEST AUTHOR OF THE WEEK</h2>
        <hr className="line-home" />
      </div>
    </div>
  );
}

export default Home;
