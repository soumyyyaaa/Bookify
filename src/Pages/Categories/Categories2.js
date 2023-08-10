import "../Categories/Categories.css";
import FilterOnMobile from "../../Components/Filter/FilterOnMobile";
import Filter from "../../Components/Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import allBook10 from "../../Images/all-book-10.png";
import allBook3 from "../../Images/all-book-3.png";
import allBook21 from "../../Images/all-book-21.png";
import allBook2 from "../../Images/all-book-2.png";
import allBook22 from "../../Images/all-book-22.png";
import allBook4 from "../../Images/all-book-4.png";
import Categories2Carousel from "./Categories2Carousel";

function Categories2() {
    return (
        <div>
            <div className="container1-categories">
                <div className="opacity-container-categories"></div>
                <h2 className="heading-categories">Collection</h2>
            </div>
            <div className="container2-categories">
                <div className="filter-desktop">
                    <Filter />
                </div>
                <div className="on-mobile-display">
                    <FilterOnMobile />
                </div>
                <div className="container3-categories">
                    <h1
                        className="heading-bestsellers"
                        style={{
                            padding: "0",
                            textAlign: "center",
                            margin: "5% 0",
                        }}
                    >
                        Products
                    </h1>
                    <div className="container4-categories">
                        <div className="card">
                            <img
                                src={allBook10}
                                className="card-img-top"
                                alt="all-book-10"
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
                                <p className="card-text">SAGE ISAIAS</p>
                                <h4 className="card-title">The Red Desert</h4>
                                <p className="card-text">
                                    $7.52{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $10.76
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
                                src={allBook3}
                                className="card-img-top"
                                alt="all-book-3"
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
                                <p className="card-text">ERIK MARTIN</p>
                                <h4 className="card-title">
                                    The Stadium By Night
                                </h4>
                                <p className="card-text">
                                    $14.65{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $17.53
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
                                src={allBook21}
                                className="card-img-top"
                                alt="all-book-21"
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
                                <p className="card-text">JAYDEN JUDAH</p>
                                <h4 className="card-title">
                                    The Stage By Gabin
                                </h4>
                                <p className="card-text">
                                    $11.21{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $14.35
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
                                src={allBook2}
                                className="card-img-top"
                                alt="all-book-2"
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
                                <p className="card-text">JAMES DYLAN</p>
                                <h4 className="card-title">
                                    Visit in the North
                                </h4>
                                <p className="card-text">
                                    $13.56{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $16.35
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
                                src={allBook22}
                                className="card-img-top"
                                alt="all-book-22"
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
                                <p className="card-text">ERIK MARTIN</p>
                                <h4 className="card-title">Wake Me Up</h4>
                                <p className="card-text">
                                    $6.99{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $9.82
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
                                src={allBook4}
                                className="card-img-top"
                                alt="all-book-4"
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
                                <p className="card-text">SAGE ISAIAS</p>
                                <h4 className="card-title">
                                    When The Stars Align
                                </h4>
                                <p className="card-text">
                                    $9.91{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $12.49
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
                    <div className="container5-categories">
                        <Categories2Carousel />
                    </div>
                    <div className="buttons-categories">
                        <Link to="/categories">
                            <button className="next-categories">
                                <FontAwesomeIcon icon={faBackwardStep} />
                            </button>
                        </Link>
                        <Link to="/categories">
                            <button className="next-categories">1</button>
                        </Link>
                        <Link to="/categoriespage2">
                            <button className="next-categories">2</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories2;
