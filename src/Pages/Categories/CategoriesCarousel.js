import allBook11 from "../../Images/all-book-11.png";
import allBook9 from "../../Images/all-book-9.png";
import allBook7 from "../../Images/all-book-7.png";
import allBook6 from "../../Images/all-book-6.png";
import allBook17 from "../../Images/all-book-17.png";
import allBook18 from "../../Images/all-book-18.png";
import allBook19 from "../../Images/all-book-19.png";
import allBook1 from "../../Images/all-book-1.png";
import allBook8 from "../../Images/all-book-8.png";
import allBook5 from "../../Images/all-book-5.png";
import allBook13 from "../../Images/all-book-13.png";
import allBook20 from "../../Images/all-book-20.png";
import allBook14 from "../../Images/all-book-14.png";
import allBook16 from "../../Images/all-book-16.png";
import allBook15 from "../../Images/all-book-15.png";
import allBook12 from "../../Images/all-book-12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CategoriesCarousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="7"
                        aria-label="Slide 8"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="8"
                        aria-label="Slide 9"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="9"
                        aria-label="Slide 10"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="10"
                        aria-label="Slide 11"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="11"
                        aria-label="Slide 12"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="12"
                        aria-label="Slide 13"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="13"
                        aria-label="Slide 14"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="14"
                        aria-label="Slide 15"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="15"
                        aria-label="Slide 16"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            <img
                                src={allBook11}
                                className="card-img-top"
                                alt="all-book-11"
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
                                    Adventurous Eating
                                </h4>
                                <p className="card-text">
                                    $5.49{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $8.23
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
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook9}
                                className="card-img-top"
                                alt="all-book-9"
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
                                    Beauty of Structures
                                </h4>
                                <p className="card-text">
                                    $7.16{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $10.53
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
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook7}
                                className="card-img-top"
                                alt="all-book-7"
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
                                    Books For a Cause
                                </h4>
                                <p className="card-text">
                                    $12.53{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $15.36
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
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook6}
                                className="card-img-top"
                                alt="all-book-6"
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
                                <h4 className="card-title">Donate a Book</h4>
                                <p className="card-text">
                                    $13.85{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $16.69
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
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook17}
                                className="card-img-top"
                                alt="all-book-17"
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
                                <h4 className="card-title">Endless Summer</h4>
                                <p className="card-text">
                                    $11.09{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $14.53
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
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook18}
                                className="card-img-top"
                                alt="all-book-18"
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
                                <h4 className="card-title">Fight or Flight</h4>
                                <p className="card-text">
                                    $7.35{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $10.25
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
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook19}
                                className="card-img-top"
                                alt="all-book-19"
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
                                <p className="card-text">ROBIN TRIPLE</p>
                                <h4 className="card-title">
                                    Fresh Healthy Eats
                                </h4>
                                <p className="card-text">
                                    $5.49{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $8.96
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
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook1}
                                className="card-img-top"
                                alt="all-book-1"
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
                                    Girls at the Golden City
                                </h4>
                                <p className="card-text">
                                    $9.53{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $12.68
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
                    <div className="carousel-item">
                        <div class="card">
                            <img
                                src={allBook8}
                                class="card-img-top"
                                width="50%"
                                alt="all-book-8"
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
                            <div class="card-body">
                                <p class="card-text">SAGE ISAIAS</p>
                                <h4 class="card-title">Home Made Meals</h4>
                                <p class="card-text">
                                    $13.32
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $16.56
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook5}
                                className="card-img-top"
                                alt="all-book-5"
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
                                    The Last Time We Broke Up
                                </h4>
                                <p className="card-text">
                                    $9.92{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $12.23
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
                    <div className="carousel-item">
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
                                <p className="card-text">JAYDEN JUDAH</p>
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
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook20}
                                className="card-img-top"
                                alt="all-book-20"
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
                                <p className="card-text">ROBIN TRIPLE</p>
                                <h4 className="card-title">Seafood Gourment</h4>
                                <p className="card-text">
                                    $6.58{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $9.44
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
                    <div className="carousel-item">
                        <div className="card">
                            <img
                                src={allBook14}
                                className="card-img-top"
                                alt="all-book-14"
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
                                <h4 className="card-title">Silent Women</h4>
                                <p className="card-text">
                                    $10.25{" "}
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#b8b8b8",
                                        }}
                                    >
                                        $13.68
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
                    <div className="carousel-item">
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
                                <p className="card-text">ERIK MARTIN</p>
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
                    <div className="carousel-item">
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
                                <p className="card-text">JAYDEN JUDAH</p>
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
                    </div>
                    <div className="carousel-item">
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
                                <p className="card-text">SAGE ISAIAS</p>
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
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                style={{ display: "none" }}
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                style={{ display: "none" }}
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CategoriesCarousel;
