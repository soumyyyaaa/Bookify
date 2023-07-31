import "../Components/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div>
          <h3 className="heading-footer">BOOK SHOP</h3>
          <p>1203 Town Center</p>
          <p>Drive FL 33458 USA</p>
          <p>+0000 123 456 789</p>
          <p>
            <a
              href="mailto:soumya.agarwal1103@gmail.com"
              className="footer-email"
            >
              info@example.com
            </a>
          </p>
        </div>
        <div>
          <h5 className="footer-sub-heading">Help</h5>
          <ul className="footer-search-panel">
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Search</li>
            </Link>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Help</li>
            </Link>
            <Link
              to="/information"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Shipping Information</li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="footer-sub-heading">Support</h5>
          <ul className="footer-search-panel">
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Search Terms</li>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none", color: "#fff" }}>
              <li>Help & Faqs</li>
            </Link>
            <Link
              to="/information"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Order & Returns</li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="footer-sub-heading">Information</h5>
          <ul className="footer-search-panel">
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Contact</li>
            </Link>
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>About</li>
            </Link>
            <Link
              to="/information"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Refund & Returns</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-icon-div">
        <FontAwesomeIcon icon={faTwitter} className="footer-icons" size="xl" />
        <FontAwesomeIcon
          icon={faFacebookF}
          className="footer-icons"
          size="xl"
        />
        <FontAwesomeIcon
          icon={faPinterest}
          className="footer-icons"
          size="xl"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="footer-icons"
          size="xl"
        />
      </div>
      <hr />
      <p
        style={{
          textAlign: "center",
          marginBottom: "0",
          marginTop: "2%",
          paddingBottom: "0",
        }}
      >
        All Rights Reserved <FontAwesomeIcon icon={faCopyright} /> 2023, Soumya
        Agrawal
      </p>
    </div>
  );
}

export default Footer;
