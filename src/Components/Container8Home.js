import "../Components/Container4Home.css"
import allBook3 from "../Images/all-book-3.png";
import allBook9 from "../Images/all-book-9.png"
import allBook10 from "../Images/all-book-10.png"
import allBook11 from "../Images/all-book-11.png"
import "../Components/Container4Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Container8Home() {
  return (
    <div className="container8-home">
      <div class="card">
        <img src={allBook9} class="card-img-top" alt="all-book-9" />
        <ul className="image-hover-icons">
          <li><FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-icons"/></li>
          <li><FontAwesomeIcon icon={faHeart} size="xl" className="hover-icons" /></li>
          <li><FontAwesomeIcon icon={faEye} size="xl" className="hover-icons" /></li>
        </ul>
        <div class="card-body">
          <p class="card-text">JAYDEN JUDAH</p>
          <h4 class="card-title">Beauty Of Structures</h4>
          <p class="card-text">
            $7.16{" "}
            <span style={{ textDecoration: "line-through", color: "#b8b8b8" }}>
              $10.53
            </span>
          </p>
        </div>
      </div>
      <div class="card">
        <img src={allBook10} class="card-img-top" alt="all-book-10" />
        <ul className="image-hover-icons">
          <li><FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-icons"/></li>
          <li><FontAwesomeIcon icon={faHeart} size="xl" className="hover-icons" /></li>
          <li><FontAwesomeIcon icon={faEye} size="xl" className="hover-icons" /></li>
        </ul>
        <div class="card-body">
          <p class="card-text">SAGE ISAIAS</p>
          <h4 class="card-title">The Red Desert</h4>
          <p class="card-text">
            $7.52{" "}
            <span style={{ textDecoration: "line-through", color: "#b8b8b8" }}>
              $10.76
            </span>
          </p>
        </div>
      </div>
      <div class="card">
        <img src={allBook3} class="card-img-top" alt="all-book-3" />
        <ul className="image-hover-icons">
          <li><FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-icons"/></li>
          <li><FontAwesomeIcon icon={faHeart} size="xl" className="hover-icons" /></li>
          <li><FontAwesomeIcon icon={faEye} size="xl" className="hover-icons" /></li>
        </ul>
        <div class="card-body">
          <p class="card-text">ERIK MARTIN</p>
          <h4 class="card-title">The Stadium by Night</h4>
          <p class="card-text">
            $14.65{" "}
            <span style={{ textDecoration: "line-through", color: "#b8b8b8" }}>
              $17.53
            </span>
          </p>
        </div>
      </div>
      <div class="card">
        <img src={allBook11} class="card-img-top" alt="all-book-11" />
        <ul className="image-hover-icons">
          <li><FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-icons"/></li>
          <li><FontAwesomeIcon icon={faHeart} size="xl" className="hover-icons" /></li>
          <li><FontAwesomeIcon icon={faEye} size="xl" className="hover-icons" /></li>
        </ul>
        <div class="card-body">
          <p class="card-text">JAMES DYLAN</p>
          <h4 class="card-title">Adventurous Eating</h4>
          <p class="card-text">
            $5.49{" "}
            <span style={{ textDecoration: "line-through", color: "#b8b8b8" }}>
              $8.23
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container8Home;
