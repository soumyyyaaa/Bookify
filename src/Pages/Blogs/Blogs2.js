import "../Blogs/Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import blogs7 from "../../Images/blog7.png";
import blogs8 from "../../Images/blog8.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

function Blogs2() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="container-pages">
                        <div className="opacity-container-pages"></div>
                        <h2 className="heading-pages">News</h2>
                    </div>
                    <div className="container4-blogs">
                        <Link to="/wpbab" style={{ textDecoration: "none" }}>
                            <div className="container2-content">
                                <img src={blogs7} alt="blogs 7" />
                                <p
                                    className="sans-serif-font"
                                    style={{ margin: "3% 0", color: "#707070" }}
                                >
                                    <FontAwesomeIcon icon={faCircleUser} />{" "}
                                    Ramamoorthi M |{" "}
                                    <FontAwesomeIcon icon={faCalendarDays} />{" "}
                                    April 4, 2020
                                </p>
                                <h2 className="card-title">
                                    Why paper books are best?
                                </h2>
                                <p
                                    style={{
                                        color: "#707070",
                                        margin: "3% 0",
                                        textAlign: "justify",
                                    }}
                                >
                                    Tellus at urna condimentum mattis
                                    pellentesque id nibh. Mauris cursus mattis
                                    molestie a iaculis at erat. Netus et
                                    malesuada fames ac turpis.
                                </p>
                                <button className="read-more-blogs">
                                    Read More
                                </button>
                            </div>
                        </Link>
                        <Link to="/bbfbl" style={{ textDecoration: "none" }}>
                            <div className="container2-content">
                                <img src={blogs8} alt="blogs 8" />
                                <p
                                    className="sans-serif-font"
                                    style={{ margin: "3% 0", color: "#707070" }}
                                >
                                    <FontAwesomeIcon icon={faCircleUser} />{" "}
                                    Ramamoorthi M |{" "}
                                    <FontAwesomeIcon icon={faCalendarDays} />{" "}
                                    April 4, 2020
                                </p>
                                <h2 className="card-title">
                                    Best blogs for book lovers
                                </h2>
                                <p
                                    style={{
                                        color: "#707070",
                                        margin: "3% 0",
                                        textAlign: "justify",
                                    }}
                                >
                                    Justo eget magna fermentum iaculis eu. Ut
                                    consequat semper viverra nam libero justo
                                    laoreet sit amet. Viverra aliquet eget sit
                                    amet.
                                </p>
                                <button className="read-more-blogs">
                                    Read More
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="container3-blogs">
                        <Link to="/blogs">
                            <button className="next-blogs">
                                <FontAwesomeIcon icon={faBackwardStep} />
                            </button>
                        </Link>
                        <Link to="/blogs">
                            <button className="next-blogs">1</button>
                        </Link>
                        <Link to="/blogs2">
                            <button className="next-blogs">2</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Blogs2;
