import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import "../Pages/Home.css";
import dwayne from "../Images/dwayne.png";
import award1 from "../Images/award-1.png";
import award2 from "../Images/award-2.png";
import award3 from "../Images/award-3.png";
import award4 from "../Images/award-4.png";
import award5 from "../Images/award-5.png";
import Container4Home from "../Components/Container4Home";
import Container8Home from "../Components/Container8Home";
import Container10Home from "../Components/Container10Home";
import Container11Home from "../Components/Container11Home";

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
        <h3 style={{ color: "#000" }}>Shop wide range of collections</h3>
        <h1 className="heading-home">BOOK FESTIVAL</h1>
        <h5 style={{ color: "#000" }}>
          ALL BOOKS ARE FLAT <strong>50% OFF</strong>
        </h5>
        <button
          className="shop-now"
          style={{ marginTop: "3%", padding: "1% 3%" }}
        >
          Shop Now
        </button>
      </div>
      <div className="container6-home">
        <h2 className="heading-new-arrivals">BEST AUTHOR OF THE WEEK</h2>
        <hr className="line-home" />
        <div className="best-author">
          <img src={dwayne} alt="dawyne" style={{ float: "left" }} />
          <div style={{ textAlign: "left", width: "40%" }}>
            <h3 className="card-title" style={{ marginBottom: "3%" }}>
              Dwayne Johnson
            </h3>
            <p style={{ marginBottom: "5%" }}>
              "Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia an, tincidunt risus ac, consequat velit."
            </p>
            <h4 className="card-title" style={{ marginBottom: "3%" }}>
              My Awards
            </h4>
            <div style={{ marginBottom: "3%" }}>
              <img src={award1} alt="award-1" style={{ marginRight: "4%" }} />
              <img src={award2} alt="award-2" style={{ marginRight: "4%" }} />
              <img src={award3} alt="award-3" />
            </div>
            <div>
              <img src={award4} alt="award-4" style={{ marginRight: "4%" }} />
              <img src={award5} alt="award-5" style={{ marginRight: "4%" }} />
              <img src={award5} alt="award-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="container7-home">
        <div style={{ width: "50%", textAlign: "left", marginLeft: "40%" }}>
          <h3 style={{ color: "#676767", fontWeight: 600, fontSize: "2rem" }}>
            Special Offers
          </h3>
          <h1 className="heading-home">30% Discount On Books Learn Language</h1>
          <p style={{ color: "#676767" }}>
            Online shopping for Language Learning & Teaching from a great
            selection at Books ... Language, Linguistics & Writing ... vashista
            360 spoken english book.
          </p>
          <button className="container7-shop-now">Shop Now</button>
        </div>
      </div>
      <h2 className="heading-new-arrivals" style={{ marginTop: "5%" }}>
        DAILY DEALS
      </h2>
      <hr className="line-home" />
      <Container8Home />
      <div className="container9-home">
        <h1 className="heading-home" style={{ color: "#134683" }}>
          Wonderful Gifts
        </h1>
        <h5 style={{ color: "#676767" }}>
          Give your family and friends a book
        </h5>
        <button
          className="shop-now"
          style={{ marginTop: "3%", padding: "1% 3%" }}
        >
          Shop Now
        </button>
      </div>
      <Container10Home />
      <Container11Home />
    </div>
  );
}

export default Home;
