import image1 from "../../Images/blog5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Blogs/IndividualBlog.css";

function Ncoh() {
  return (
    <>
      <div className="container-pages">
        <div className="opacity-container-pages"></div>
        <h2 className="heading-pages">Novels changed our history</h2>
      </div>
      <div className="individual-blog-container">
        <img src={image1} alt="img-1" width="100%" />
        <h1 className="individual-blog-heading">Novels changed our history</h1>
        <p className="individual-blog-text">April 4, 2020 | Ramamoorthi M</p>
        <button className="share-button">
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            style={{ marginRight: "5%" }}
          />{" "}
          Share
        </button>
        <p className="individual-blog-content">
          <em>Yxsus in hendrerit gravida rutrum quisque?</em>
        </p>
        <p className="individual-blog-content">
          <strong>Violette:</strong> A arcu cursus vitae congue. Proin nibh nisl
          condimentum id venenatis a condimentum vitae sapien. Sagittis id
          consectetur purus ut faucibus pulvinar. Nec nam aliquam sem et tortor
          consequat. Non enim praesent elementum facilisis leo vel fringilla.
          Pretium nibh ipsum consequat nisl. Non arcu risus quis varius quam
          quisque id diam vel. <br /> <br />
          Aliquet bibendum enim facilisis gravida neque convallis a cras semper
          arcu risus quis varius quam :<br />
          <br />
          <ul>
            <li>
              Aliquet bibendum enim facilisis gravida neque convallis a cras
              semper. Scelerisque varius morbi enim nunc faucibus. Sollicitudin
              ac orci phasellus egestas tellus rutrum tellus.{" "}
            </li>
            <li>
              Varius morbi enim nunc faucibus a pellentesque sit amet. Molestie
              at elementum eu facilisis sed. Faucibus nisl tincidunt eget
              nullam. Sed viverra tellus in hac habitasse.Posuere ac ut
              consequat semper pellentesque sit amet viverra nam.{" "}
            </li>
          </ul>
          <br />
          <strong>
            Tortor dignissim convallis aenean et tortor at risus euismod nisi
            porta lorem mollis.
          </strong>
          <br />
          <br />
          <strong>Leo: </strong>Commodo odio aenean sed adipiscing diam donec.
          Erat imperdiet sed euismod nisi porta lorem mollis aliquam.: <br />
          <br />
          <ol>
            <li>
              Sed pulvinar proin gravida hendrerit lectus a. Dignissim cras
              tincidunt lobortis feugiat vivamus at augue. Etiam sit amet nisl
              purus in mollis nunc sed. Commodo viverra maecenas accumsan lacus
              vel facilisis. Fermentum odio eu feugiat pretium nibh ipsum
              consequat.
            </li>
            <li>
              Suspendisse interdum consectetur libero id faucibus. Suspendisse
              sed nisi lacus sed viverra tellus in hac habitasse. In dictum non
              consectetur a erat nam at lectus urna. Id eu nisl nunc mi ipsum
              faucibus. Consectetur adipiscing elit duis tristique.
            </li>
            <li>
              Consequat ac felis donec et odio pellentesque diam volutpat.
              Consectetur libero id faucibus nisl tincidunt eget nullam. Nisl
              pretium fusce id velit. Quis blandit turpis cursus in hac
              habitasse.
            </li>
          </ol>
          <Link
            to="/blogs"
            style={{ textDecoration: "none" }}
          >
            <button className="back-to-blog-button">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ marginRight: "5%" }}
              />
              Back to blog
            </button>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Ncoh;
