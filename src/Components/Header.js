import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container-header">
            <span>
                <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    style={{ marginRight: 15 }}
                    className="icons-header"
                />
                <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    className="icons-header"
                />
            </span>
            <h1 style={{ color: "#343434", textAlign: "center" }}>
                BOOK <span style={{ color: "#d14031" }}>SHOP</span>
            </h1>
            <Link to="/login" style={{color: "#000"}}><FontAwesomeIcon icon={faUser} size="lg" className="icons-header" /></Link>
        </div>
    );
}

export default Header;
