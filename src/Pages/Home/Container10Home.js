import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import latestNews1 from "../../Images/latest-news-img1.png";
import latestNews2 from "../../Images/latest-news-img2.png";
import latestNews3 from "../../Images/latest-news-img3.png";
import { Link } from "react-router-dom";
import "../Home/Container10Home.css";

function Container10Home() {
    return (
        <div className="container10-home">
            <h2 className="heading-new-arrivals">LATEST NEWS</h2>
            <hr className="line-home" />
            <div className="latest-news">
                <Link to="/bcmi" style={{ textDecoration: "none" }}>
                    <div className="latest-news-content">
                        <div className="demo-div">
                            <img src={latestNews1} alt="latest news 1" />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                size="xl"
                                className="search-icon"
                            />
                        </div>
                        <p style={{ margin: "3% 0", color: "#707070" }}>
                            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi
                            M | <FontAwesomeIcon icon={faCalendarDays} /> April
                            4, 2020
                        </p>
                        <h2 className="card-title">
                            Books changed my ideology
                        </h2>
                        <p
                            style={{
                                color: "#707070",
                                margin: "3% 0",
                                textAlign: "justify",
                            }}
                        >
                            Adipiscing enim eu turpis egestas pretium aenean
                            pharetra magna ac. Eu ultrices vitae auctor eu augue
                            ut lectus arcu bibendum. Elementum.
                        </p>
                        <button
                            className="shop-now shop-now-container10"
                            style={{ marginTop: "3.5%" }}
                        >
                            Read More
                        </button>
                    </div>
                </Link>
                <Link to="/bwo19c" style={{ textDecoration: "none" }}>
                    <div className="latest-news-content">
                        <img
                            src={latestNews2}
                            alt="latest news 2"
                            width="100%"
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size="xl"
                            className="search-icon"
                        />
                        <p style={{ margin: "3% 0", color: "#707070" }}>
                            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi
                            M | <FontAwesomeIcon icon={faCalendarDays} /> April
                            4, 2020
                        </p>
                        <h2 className="card-title">
                            Best writers of 19th century
                        </h2>
                        <p
                            style={{
                                color: "#707070",
                                margin: "3% 0",
                                textAlign: "justify",
                            }}
                        >
                            Accumsan lacus vel facilisis volutpat. Posuere urna
                            nec tincidunt praesent. Tempus iaculis urna id
                            volutpat. Sapien nec sagittis aliq sdis nesst swes.
                        </p>
                        <button
                            className="shop-now shop-now-container10"
                            style={{ marginTop: "5%" }}
                        >
                            Read More
                        </button>
                    </div>
                </Link>
                <Link to="/bksb" style={{ textDecoration: "none" }}>
                    <div className="latest-news-content">
                        <img src={latestNews3} alt="latest news 3" />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size="xl"
                            className="search-icon"
                        />
                        <p style={{ margin: "3% 0", color: "#707070" }}>
                            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi
                            M | <FontAwesomeIcon icon={faCalendarDays} /> April
                            4, 2020
                        </p>
                        <h2 className="card-title">
                            100 Best kids story books
                        </h2>
                        <p
                            style={{
                                color: "#707070",
                                margin: "3% 0",
                                textAlign: "justify",
                            }}
                        >
                            Felis bibendum ut tristique et egestas quis ipsum
                            suspendisse ultrices. In massa tempor nec feugiat
                            nisl pretium fusce id. Sit amet dictum.
                        </p>
                        <button
                            className="shop-now shop-now-container10"
                            style={{ marginTop: "5%" }}
                        >
                            Read More
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Container10Home;
