import "../Pages/Brands.css";
import allBook1 from "../Images/all-book-1.png";
import allBook14 from "../Images/all-book-14.png";
import allBook13 from "../Images/all-book-13.png";
import allBook9 from "../Images/all-book-9.png";
import allBook12 from "../Images/all-book-12.png";
import allBook6 from "../Images/all-book-6.png";
import allBook7 from "../Images/all-book-7.png";

function Brands() {
  return (
    <div>
      <div className="container1-brands">
        <div className="opacity-container1"></div>
        <h2 className="heading-brands">All Collections</h2>
      </div>
      <div className="container2-brands">
        <div class="card">
          <img src={allBook1} class="card-img-top" alt="all-book-1" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Fiction [10]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook14} class="card-img-top" alt="all-book-1a" />
          <div class="card-body">
            <h4 class="all-collection-books-title">History [6]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook13} class="card-img-top" alt="all-book-13" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Humor [4]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook9} class="card-img-top" alt="all-book-9" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Literature [10]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook12} class="card-img-top" alt="all-book-12" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Religion [10]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook6} class="card-img-top" alt="all-book-6" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Science [10]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook7} class="card-img-top" alt="all-book-7" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Share Market [10]</h4>
          </div>
        </div>
        <div class="card">
          <img src={allBook14} class="card-img-top" alt="all-book-14" />
          <div class="card-body">
            <h4 class="all-collection-books-title">Stories [10]</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
