import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import "../Pages/Home.css";
import allBook1 from "../Images/all-book-1.png";
import allBook2 from "../Images/all-book-2.png";
import allBook3 from "../Images/all-book-3.png";
import allBook4 from "../Images/all-book-4.png";
import allBook5 from "../Images/all-book-5.png";
import allBook6 from "../Images/all-book-6.png";
import allBook7 from "../Images/all-book-7.png";
import allBook8 from "../Images/all-book-8.png";

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
      <div className="container4-home">
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook1} class="card-img-top" alt="all-book-1" />
          <div class="card-body">
            <p class="card-text">SAGE ISAIAS</p>
            <h4 class="card-title">Girls at the Golden City</h4>
            <p class="card-text">$9.53 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$12.68</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook2} class="card-img-top" alt="all-book-" />
          <div class="card-body">
            <p class="card-text">JAMES DYLAN</p>
            <h4 class="card-title">Visit in the North</h4>
            <p class="card-text">$13.56 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$16.35</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook3} class="card-img-top" alt="all-book-3" />
          <div class="card-body">
            <p class="card-text">ERIK MARTIN</p>
            <h4 class="card-title">The Stadium by Night</h4>
            <p class="card-text">$14.65 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$17.53</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook4} class="card-img-top" alt="all-book-4" />
          <div class="card-body">
            <p class="card-text">SAGE ISAIAS</p>
            <h4 class="card-title">When The Stars Align</h4>
            <p class="card-text">$9.91 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$12.49</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook5} class="card-img-top" alt="all-book-5" />
          <div class="card-body">
            <p class="card-text">JAYDEN JUDAH</p>
            <h4 class="card-title">Last Time We Broke Up</h4>
            <p class="card-text">$9.92 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$12.23</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook6} class="card-img-top" alt="all-book-6" />
          <div class="card-body">
            <p class="card-text">JAMES DYLAN</p>
            <h4 class="card-title">Donate a Book</h4>
            <p class="card-text">$13.85 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$16.69</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook7} class="card-img-top" alt="all-book-7" />
          <div class="card-body">
            <p class="card-text">JAYDEN JUDAH</p>
            <h4 class="card-title">Books For a Cause</h4>
            <p class="card-text">$12.53 <span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$15.36</span></p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={allBook8} class="card-img-top" alt="all-book-8" />
          <div class="card-body">
            <p class="card-text">SAGE ISAIAS</p>
            <h4 class="card-title">Home Made Meals</h4>
            <p class="card-text">$13.32<span style={{textDecoration: 'line-through', color: '#b8b8b8'}}>$16.56</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
