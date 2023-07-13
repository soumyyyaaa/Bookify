import allBook1 from "../Images/all-book-1.png";
import allBook2 from "../Images/all-book-2.png";
import allBook3 from "../Images/all-book-3.png";
import allBook4 from "../Images/all-book-4.png";
import allBook5 from "../Images/all-book-5.png";
import allBook6 from "../Images/all-book-6.png";
import allBook7 from "../Images/all-book-7.png";
import allBook8 from "../Images/all-book-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Container4CarouselHome() {
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img
                src={allBook1}
                class="card-img-top" width="50%"
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
              <div class="card-body">
                <p class="card-text">SAGE ISAIAS</p>
                <h4 class="card-title">Girls at the Golden City</h4>
                <p class="card-text">
                  $9.53{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $12.68
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook2} class="card-img-top" width="50%" alt="all-book-2" />
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
                <p class="card-text">JAMES DYLAN</p>
                <h4 class="card-title">Visit in the North</h4>
                <p class="card-text">
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
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook3} class="card-img-top" width="50%" alt="all-book-3" />
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
                <p class="card-text">ERIK MARTIN</p>
                <h4 class="card-title">The Stadium by Night</h4>
                <p class="card-text">
                  $14.65{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $17.53
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook4} class="card-img-top" width="50%" alt="all-book-4" />
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
                <h4 class="card-title">When The Stars Align</h4>
                <p class="card-text">
                  $9.91{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $12.49
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook5} class="card-img-top" width="50%" alt="all-book-5" />
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
                <p class="card-text">JAYDEN JUDAH</p>
                <h4 class="card-title">Last Time We Broke Up</h4>
                <p class="card-text">
                  $9.92{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $12.23
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook6} class="card-img-top" width="50%" alt="all-book-6" />
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
                <p class="card-text">JAMES DYLAN</p>
                <h4 class="card-title">Donate a Book</h4>
                <p class="card-text">
                  $13.85{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.69
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook7} class="card-img-top" width="50%" alt="all-book-7" />
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
                <p class="card-text">JAYDEN JUDAH</p>
                <h4 class="card-title">Books For a Cause</h4>
                <p class="card-text">
                  $12.53{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $15.36
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="card">
              <img src={allBook8} class="card-img-top" width="50%" alt="all-book-8" />
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
                    style={{ textDecoration: "line-through", color: "#b8b8b8" }}
                  >
                    $16.56
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{display: 'none'}}
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
          style={{display: 'none'}}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Container4CarouselHome;
