import "../Components/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-grid">
                <div>
                    <h3 className="heading-footer">BOOK SHOP</h3>
                    <p>1203 Town Center</p>
                    <p>Drive FL 33458 USA</p>
                    <p>+0000 123 456 789</p>
                    <p><a href="mailto:soumya.agarwal1103@gmail.com" className="footer-email" >info@example.com</a></p>
                </div>
                <div>
                    <h5 className="footer-sub-heading">Help</h5>
                    <ul className="footer-search-panel">
                        <li>Search</li>
                        <li>Help</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Information</li>
                    </ul>
                </div>
                <div>
                    <h5 className="footer-sub-heading">Support</h5>
                    <ul className="footer-search-panel">
                        <li>Search Terms</li>
                        <li>Advanced Search</li>
                        <li>Help & Faqs</li>
                        <li>Store Location</li>
                        <li>Order & Returns</li>
                    </ul>
                </div>
                <div>
                    <h5 className="footer-sub-heading">Information</h5>
                    <ul className="footer-search-panel">
                        <li>Contact</li>
                        <li>About</li>
                        <li>Carrers</li>
                        <li>Refund & Returns</li>
                        <li>Deliveries</li>
                    </ul>
                </div>
            </div>
            <div className="footer-icon-div">
                <FontAwesomeIcon icon={faTwitter} className="footer-icons" size="xl" />
                <FontAwesomeIcon icon={faFacebookF} className="footer-icons" size="xl" />
                <FontAwesomeIcon icon={faPinterest} className="footer-icons" size="xl" />
                <FontAwesomeIcon icon={faInstagram} className="footer-icons" size="xl" />
            </div>
            <hr />
            <p style={{textAlign: 'center', marginBottom: '0', marginTop: '2%', paddingBottom: '0'}}>All Rights Reserved <FontAwesomeIcon icon={faCopyright} /> 2023, Soumya Agrawal</p>
        </div>

    );
}

export default Footer;