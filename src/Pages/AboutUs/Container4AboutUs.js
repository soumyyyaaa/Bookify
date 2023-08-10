import testimonial1 from "../../Images/testimonial1.png";
import testimonial2 from "../../Images/testimonial2.png";
import testimonial3 from "../../Images/testimonial3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarR } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../AboutUs/Container4AboutUs.css";

library.add(faStarR);

function Container4AboutUs() {
    return (
        <div className="container4-aboutus">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active indicator-aboutus"
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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={testimonial1}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <p className="testimonial-aboutus">
                            Donec id tellus lacinia an, tincidunt risus ac,
                            consequat velit. Quisquemos sodales suscipit tortor
                            ditaemcos condimentum. Pellentesque posuere orci
                            lobortis scelerisque blandit.
                        </p>
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon="fa-regular fa-star"
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon="fa-regular fa-star"
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <h5 className="testimonial-name-aboutus">
                            Krist Watson
                        </h5>
                        <h6>Actor</h6>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={testimonial2}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <p className="testimonial-aboutus">
                            Quisquemos sodales suscipit tortor ditaemcos
                            condimentum. Pellentesque posuere orci lobortis
                            scelerisque blandit. Donec id tellus lacinia an,
                            tincidunt risus ac, consequat velit.
                        </p>
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon="fa-regular fa-star"
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon="fa-regular fa-star"
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <h5 className="testimonial-name-aboutus">Christina</h5>
                        <h6>Beautician</h6>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={testimonial3}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <p className="testimonial-aboutus">
                            Pellentesque posuere orci lobortis scelerisque
                            blandit. Donec id tellus lacinia an, tincidunt risus
                            ac, consequat velit. Quisquemos sodales suscipit
                            tortor ditaemcos condimentum
                        </p>
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <FontAwesomeIcon
                            icon="fa-regular fa-star"
                            style={{ color: "#d14031" }}
                            size="l"
                        />
                        <h5 className="testimonial-name-aboutus">Wilson</h5>
                        <h6>Teacher Assistant</h6>
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
        </div>
    );
}

export default Container4AboutUs;
