import "../Categories/Categories.css";
import FilterOnMobile from "../../Components/Filter/FilterOnMobile";
import Filter from "../../Components/Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
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
import { Link } from "react-router-dom";
import CategoriesCarousel from "./CategoriesCarousel";

function Categories() {
  return (
    <>
    <div className="categories-1">
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
            style={{ padding: "0", textAlign: "center", margin: "5% 0" }}
          >
            Products
          </h1>
          <div className="container4-categories">
            <div className="card">
              <img src={allBook11} className="card-img-top" alt="all-book-11" />
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
                <h4 className="card-title">Adventurous Eating</h4>
                <p className="card-text">
                  $5.49{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $8.23
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook9} className="card-img-top" alt="all-book-9" />
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
                <h4 className="card-title">Beauty of Structures</h4>
                <p className="card-text">
                  $7.16{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $10.53
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook7} className="card-img-top" alt="all-book-7" />
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
                <h4 className="card-title">Books For a Cause</h4>
                <p className="card-text">
                  $12.53{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $15.36
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook6} className="card-img-top" alt="all-book-6" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.69
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook17} className="card-img-top" alt="all-book-17" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $14.53
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook18} className="card-img-top" alt="all-book-18" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $10.25
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook19} className="card-img-top" alt="all-book-19" />
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
                <h4 className="card-title">Fresh Healthy Eats</h4>
                <p className="card-text">
                  $5.49{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $8.96
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook1} className="card-img-top" alt="all-book-1" />
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
                <h4 className="card-title">Girls at the Golden City</h4>
                <p className="card-text">
                  $9.53{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $12.68
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook8} className="card-img-top" alt="all-book-8" />
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
                <h4 className="card-title">Home Made Meals</h4>
                <p className="card-text">
                  $13.32{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.56
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook5} className="card-img-top" alt="all-book-5" />
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
                <h4 className="card-title">The Last Time We Broke Up</h4>
                <p className="card-text">
                  $9.92{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $12.23
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook13} className="card-img-top" alt="all-book-13" />
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
                <h4 className="card-title">Lightspeed Robots</h4>
                <p className="card-text">
                  $12.25{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $15.63
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook20} className="card-img-top" alt="all-book-20" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $9.44
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook14} className="card-img-top" alt="all-book-14" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $13.68
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook16} className="card-img-top" alt="all-book-16" />
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
                <h4 className="card-title">Skin Like Daffodils</h4>
                <p className="card-text">
                  $13.00{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.12
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
            <div className="card">
              <img src={allBook15} className="card-img-top" alt="all-book-15" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $14.22
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="card">
              <img src={allBook12} className="card-img-top" alt="all-book-12" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.56
                  </span>
                </p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#000" }} />
              </div>
            </div>
          </div>
          <div className="container5-categories">
            <CategoriesCarousel />
          </div>
          <div className="buttons-categories">
            <Link to="/categories">
              <button className="next-categories">1</button>
            </Link>
            <Link to="/categoriespage2">
              <button className="next-categories">2</button>
            </Link>
            <Link to="/categoriespage2">
              <button className="next-categories">
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Categories;
