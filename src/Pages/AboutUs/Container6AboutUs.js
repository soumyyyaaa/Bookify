import teamMember1 from "../../Images/teamMember1.png";
import teamMember2 from "../../Images/teamMember2.png";
import teamMember3 from "../../Images/teamMember3.png";
import teamMember4 from "../../Images/teamMember4.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../AboutUs/Container6AboutUs.css";

function Container6AboutUs() {
  return (
    <>
      <div className="container6-aboutus">
        <div className="grid-item-team-member">
          <img src={teamMember1} alt="member1" className="member-img" />
          <ul className="image-hover-icons-team-social">
            <FontAwesomeIcon
              icon={faTwitter}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="team-social-icons"
              size="l"
            />
          </ul>
          <h3 className="team-member-name">Jona Issac</h3>
          <h6 style={{ color: "#707070" }} className="sans-serif-font">CEO</h6>
        </div>
        <div className="grid-item-team-member">
          <img src={teamMember2} alt="member2" className="member-img" />
          <ul className="image-hover-icons-team-social">
            <FontAwesomeIcon
              icon={faTwitter}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="team-social-icons"
              size="l"
            />
          </ul>
          <h3 className="team-member-name">Lency</h3>
          <h6 style={{ color: "#707070" }} className="sans-serif-font">Marketing Manager</h6>
        </div>
        <div className="grid-item-team-member">
          <img src={teamMember3} alt="member3" className="member-img" />
          <ul className="image-hover-icons-team-social">
            <FontAwesomeIcon
              icon={faTwitter}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="team-social-icons"
              size="l"
            />
          </ul>
          <h3 className="team-member-name">Rony Diana</h3>
          <h6 style={{ color: "#707070" }} className="sans-serif-font">Support</h6>
        </div>
        <div className="grid-item-team-member">
          <img src={teamMember4} alt="member4" className="member-img" />
          <ul className="image-hover-icons-team-social">
            <FontAwesomeIcon
              icon={faTwitter}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="team-social-icons"
              size="l"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="team-social-icons"
              size="l"
            />
          </ul>
          <h3 className="team-member-name">Princy Charles</h3>
          <h6 style={{ color: "#707070" }} className="sans-serif-font">Company Supervisor</h6>
        </div>
      </div>
      <div className="container7-aboutus">
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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="grid-item-team-member">
                <img src={teamMember1} alt="member1" className="member-img" />
                <ul className="image-hover-icons-team-social">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="team-social-icons"
                    size="l"
                  />
                </ul>
                <h3 className="team-member-name">Jona Issac</h3>
                <h6 style={{ color: "#707070" }} className="sans-serif-font">CEO</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="grid-item-team-member">
                <img src={teamMember2} alt="member2" className="member-img" />
                <ul className="image-hover-icons-team-social">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="team-social-icons"
                    size="l"
                  />
                </ul>
                <h3 className="team-member-name">Lency</h3>
                <h6 style={{ color: "#707070" }} className="sans-serif-font">Marketing Manager</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="grid-item-team-member">
                <img src={teamMember3} alt="member3" className="member-img" />
                <ul className="image-hover-icons-team-social">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="team-social-icons"
                    size="l"
                  />
                </ul>
                <h3 className="team-member-name">Rony Diana</h3>
                <h6 style={{ color: "#707070" }} className="sans-serif-font">Support</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="grid-item-team-member">
                <img src={teamMember4} alt="member4" className="member-img" />
                <ul className="image-hover-icons-team-social">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="team-social-icons"
                    size="l"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="team-social-icons"
                    size="l"
                  />
                </ul>
                <h3 className="team-member-name">Princy Charles</h3>
                <h6 style={{ color: "#707070" }} className="sans-serif-font">Company Supervisor</h6>
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
      </div>
    </>
  );
}

export default Container6AboutUs;
