import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../ContactUs/ContactUs.css";

function ContactUs() {
    return (
        <>
            <div className="container-pages">
                <div className="opacity-container-pages"></div>
                <h2 className="heading-pages">Contact Us</h2>
            </div>
            <div className="container1-contact-us">
                <div className="contact-us-box">
                    <button className="contact-us-icons">
                        <FontAwesomeIcon size="xl" icon={faPhone} />
                    </button>
                    <h4 className="contact-us-heading">Phone</h4>
                    <p className="contact-us-para">
                        Toll-Free: 0803 - 080 - 3081 <br /> Fax: 0803 - 080 -
                        3082
                    </p>
                </div>
                <div className="contact-us-box">
                    <button className="contact-us-icons">
                        <FontAwesomeIcon size="xl" icon={faEnvelope} />
                    </button>
                    <h4 className="contact-us-heading">Email</h4>
                    <p className="contact-us-para">
                        <a
                            className="contact-us-email"
                            href="mailto:soumya.agarwal1103@gmail.com"
                        >
                            {" "}
                            mail@example.com{" "}
                        </a>
                        <br />{" "}
                        <a
                            className="contact-us-email"
                            href="mailto:soumya.agarwal1103@gmail.com"
                        >
                            {" "}
                            support@example.com{" "}
                        </a>
                    </p>
                </div>
                <div className="contact-us-box">
                    <button className="contact-us-icons">
                        <FontAwesomeIcon size="xl" icon={faLocationDot} />
                    </button>
                    <h4 className="contact-us-heading">Address</h4>
                    <p className="contact-us-para">
                        No: 58 A, East Madison Street, <br /> Baltimore, MD, USA
                        4508
                    </p>
                </div>
            </div>
            <div>
                <h2 className="heading-contact-us">Contact Form</h2>
                <hr className="line-contact-us" />
            </div>
            <div className="container2-contact-us">
                <form>
                    <input
                        className="contact-us-form"
                        placeholder="Name"
                        type="text"
                    />{" "}
                    <br />
                    <input
                        className="contact-us-form"
                        placeholder="Email"
                        type="email"
                    />{" "}
                    <br />
                    <input
                        className="contact-us-form"
                        placeholder="Phone Number"
                        type="tel"
                        size="10"
                        maxLength="10"
                    />{" "}
                    <br />
                    <input
                        className="contact-us-form"
                        placeholder="Comment"
                        type="text"
                    />{" "}
                    <br />
                    <input
                        className="contact-us-button"
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </>
    );
}

export default ContactUs;
