import bookPublisher1 from "../../Images/book-publisher1.png";
import bookPublisher2 from "../../Images/book-publisher2.png";
import bookPublisher3 from "../../Images/book-publisher3.png";
import bookPublisher4 from "../../Images/book-publisher4.png";
import bookPublisher5 from "../../Images/book-publisher5.png";
import bookPublisher6 from "../../Images/book-publisher6.png";
import bookPublisher7 from "../../Images/book-publisher7.png";
import bookPublisher8 from "../../Images/book-publisher8.png";
import "../Home/Container11Home.css";

function Container11Home() {
    return (
        <div className="container11-home">
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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={bookPublisher1}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher2}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher3}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher4}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={bookPublisher5}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher6}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher7}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
                        <img
                            src={bookPublisher8}
                            className="d-inline w-auto mx-4"
                            alt="..."
                        />
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

export default Container11Home;
