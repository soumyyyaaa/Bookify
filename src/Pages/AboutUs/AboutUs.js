import "../AboutUs/AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import aboutUsImg1 from "../../Images/about-us-img1.png";
import aboutUsImg2 from "../../Images/about-us-img2.png";
import aboutUsImg3 from "../../Images/about-us-img3.png";
import Container4AboutUs from "../AboutUs/Container4AboutUs";
import teamMember1 from "../../Images/teamMember1.png";
import teamMember2 from "../../Images/teamMember2.png";
import teamMember3 from "../../Images/teamMember3.png";
import teamMember4 from "../../Images/teamMember4.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
  return (
    <div>
      <div className="container1-aboutus">
        <div className="opacity-container-aboutus"></div>
        <h2 className="heading-aboutus">About Us</h2>
      </div>
      <div className="container2-aboutus">
        <div className="container-grid-aboutus">
          <img src={aboutUsImg1} alt="about-us-img-1" width="100%" />
          <div className="grid-item">
            <FontAwesomeIcon
              icon={faDroplet}
              size="2xl"
              className="icon-center"
            />
            <h2 className="sub-heading-aboutus">Give life to reading</h2>
            <p className="para-aboutus">
              Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris
              nunc congue nisi vitae. Lorem ipsum dolor sit amet. Sit amet
              consectetur adipiscing elit duis tristique sollicitudin nibh. Diam
              maecenas ultricies mi eget. . <br /> <br />
              Integer quis auctor elit sed vulputate mi sit amet mauris. Quam
              lacus suspendisse faucibus interdum posuere lorem. Nibh tellus
              molestie nunc non blandit massa enim nec dui. Suspendisse in est
              ante in nibh mauris.
            </p>
          </div>
          <img
            src={aboutUsImg2}
            alt="about-us-img-2"
            width="100%"
            className="image-aboutus-hidden"
          />
          <div className="grid-item-right">
            <FontAwesomeIcon
              icon={faList}
              flip="horizontal"
              size="2xl"
              className="icon-center"
            />
            <h2 className="sub-heading-aboutus">Seed of knowledge</h2>
            <p className="para-aboutus">
              Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Accumsan
              tortor posuere ac ut consequat semper viverra. Pellentesque
              habitant morbi tristique senectus et netus et malesuada. Accumsan
              sit amet.
              <br /> <br /> Porem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Pellentesque nec nam aliquam sem et. Cras sed felis eget
              velit aliquet lacus faucibus non est.
            </p>
          </div>
          <img
            src={aboutUsImg2}
            alt="about-us-img-2"
            width="100%"
            className="image-aboutus"
          />
          <img src={aboutUsImg3} alt="about-us-img-3" width="100%" />
          <div className="grid-item">
            <FontAwesomeIcon
              icon={faPerson}
              size="2xl"
              className="icon-center"
            />
            <h2 className="sub-heading-aboutus">Best for bookworms</h2>
            <p className="para-aboutus">
              Sed id semper risus in hendrerit gravida rutrum quisque. Malesuada
              nunc vel risus commodo viverra maecenas. At lectus urna duis
              convallis. Bibendum neque egestas congue quisque egestas diam.
              Volutpat commodo. <br />
              <br /> Cursus vitae congue mauris rhoncus aenean. Laoreet non
              curabitur gravida arcu ac tortor. Luctus venenatis lectus magna
              fringilla urna porttitor rhoncus dolor. Imperdiet proin fermentum
              leo vel orci porta non pulvinar
            </p>
          </div>
        </div>
      </div>
      <div className="container3-aboutus">
        <h1 className="heading-new-arrivals">TESTIMONIAL</h1>
        <hr className="line-home" />
        <Container4AboutUs />
      </div>
      <div className="container5-aboutus">
        <h1 className="heading-new-arrivals">ABOUT OUR TEAM</h1>
        <hr className="line-home" />
        <div className="team-member-aboutus">
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
            <h6 style={{ color: "#707070" }}>CEO</h6>
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
            <h6 style={{ color: "#707070" }}>Marketing Manager</h6>
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
            <h6 style={{ color: "#707070" }}>Support</h6>
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
            <h6 style={{ color: "#707070" }}>Company Supervisor</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
