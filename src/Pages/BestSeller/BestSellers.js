import allBook13 from "../../Images/all-book-13.png";
import allBook15 from "../../Images/all-book-15.png";
import allBook12 from "../../Images/all-book-12.png";
import allBook16 from "../../Images/all-book-16.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../BestSeller/BestSellers.css";
import Filter from "../../Components/Filter/Filter";
import FilterOnMobile from "../../Components/Filter/FilterOnMobile";

function BestSellers() {
    return (
        <div>
            <div className="container1-bestsellers">
                <div className="opacity-container-bestsellers"></div>
                <h2 className="heading-bestsellers">Collection</h2>
            </div>
            <div className="container2-bestsellers">
                <div className="filter-desktop">
                    <Filter />
                </div>
                <div className="on-mobile-display">
                    <FilterOnMobile />
                </div>
                <div className="container3-bestsellers">
                    <h1
                        className="heading-bestsellers"
                        style={{
                            padding: "0",
                            textAlign: "center",
                            margin: "5% 0",
                        }}
                    >
                        Humor
                    </h1>
                    <div className="container4-bestsellers">
                        <div className="card">
                            <img
                                src={allBook13}
                                className="card-img-top"
                                alt="all-book-13"
                            />
                            <ul className="image-hover-icons">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text">Jayden Judah</p>
                                <h4 className="card-title">
                                    Lightspeed Robots
                                </h4>
                                <p className="card-text">
                                    $12.25{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $15.63
                                    </span>
                                </p>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={allBook15}
                                className="card-img-top"
                                alt="all-book-15"
                            />
                            <ul className="image-hover-icons">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text">Jayden Judah</p>
                                <h4 className="card-title">The Gift of Love</h4>
                                <p className="card-text">
                                    $11.98{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $14.22
                                    </span>
                                </p>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={allBook12}
                                className="card-img-top"
                                alt="all-book-12"
                            />
                            <ul className="image-hover-icons">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text">Sage Isaias</p>
                                <h4 className="card-title">The Happy Lemon</h4>
                                <p className="card-text">
                                    $13.38{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $16.56
                                    </span>
                                </p>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={allBook16}
                                className="card-img-top"
                                alt="all-book-16"
                            />
                            <ul className="image-hover-icons">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="xl"
                                        className="hover-icons"
                                    />
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text">Erik Martin</p>
                                <h4 className="card-title">
                                    Skin Like Daffodils
                                </h4>
                                <p className="card-text">
                                    $13.00{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $16.12
                                    </span>
                                </p>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#000" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSellers;
