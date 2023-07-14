import "../Blogs/Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import blogs1 from "../../Images/latest-news-img1.png";
import blogs2 from "../../Images/latest-news-img2.png";
import blogs3 from "../../Images/latest-news-img3.png";
import blogs4 from "../../Images/blog4.png";
import blogs5 from "../../Images/blog5.png";
import blogs6 from "../../Images/blog6.png";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <>
      <div className="container1-blogs">
        <div className="opacity-container-blogs"></div>
        <h2 className="heading-blogs">News</h2>
      </div>
      <div className="container2-blogs">
        <div className="container2-content">
          <img src={blogs1} alt="blogs 1" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Books changed my ideology</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac.
            Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.
            Elementum.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
        <div className="container2-content">
          <img src={blogs2} alt="blogs 2" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Best writers of 19th century</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Accumsan lacus vel facilisis volutpat. Posuere urna nec tincidunt
            praesent. Tempus iaculis urna id volutpat. Sapien nec sagittis aliq
            sdis nesst swes.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
        <div className="container2-content">
          <img src={blogs3} alt="blogs 3" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">100 Best kidsstory books</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Felis bibendum ut tristique et egestas quis ipsum suspendisse
            ultrices. In massa tempor nec feugiat nisl pretium fusce id. Sit
            amet dictum.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
        <div className="container2-content">
          <img src={blogs4} alt="blogs 4" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">10 Best crime novel writers</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Consequat id porta nibh venenatis. In fermentum et sollicitudin ac
            orci phasellus. Pellentesque diam volutpat commodo sed egestas
            egesta.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
        <div className="container2-content">
          <img src={blogs5} alt="blogs 5" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Novels changes our history</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Sit amet consectetur adipiscing elit duis tristique sollicitudin
            nibh sit. Neque convallis a cras semper auctor neque vitae. Leo duis
            ut diam qua.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
        <div className="container2-content">
          <img src={blogs6} alt="blogs 6" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Top 5 author success secrets</h2>
          <p style={{ color: "#707070", margin: "3% 0", textAlign: "justify" }}>
            Maecenas volutpat blandit aliquam etiam. Integer malesuada nunc vel
            risus commodo viverra maecenas. Gravida quis blandit turpis cursus
            in.
          </p>
          <button className="read-more-blogs">Read More</button>
        </div>
      </div>
      <div className="container3-blogs">
            <Link to="/blogs">
              <button className="next-blogs">1</button>
            </Link>
            <Link to="/blogs2">
              <button className="next-blogs">2</button>
            </Link>
            <Link to="/blogs2">
              <button className="next-blogs">
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </Link>
          </div>
    </>
  );
}

export default Blogs;
