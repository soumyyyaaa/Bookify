import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../Components/Filter.css";

const handleClick = (iconId) => {
  const filterNames = [
    ".availability-items",
    ".price-range-items",
    ".product-type-items",
    ".more-filters-items",
    ".brand-items",
    ".format-items",
    ".language-items"
  ];
  let filter = filterNames[iconId];
  const element = document.querySelector(filter);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
};

function Filter() {
  return (
    <div>
      <h6>Filter:</h6>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Availability</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(0)}
        />
        <ul className="availability-items">
          <input type="checkbox" />
          <label>In Stock</label> <br />
          <input type="checkbox" />
          <label>Out of Stock</label>
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Price Range</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(1)}
          style={{ cursor: "pointer" }}
        />
        <ul className="price-range-items">
          <p>The highest price is $16.65</p>
          <p>$</p>
          <input type="number" min={0} max={16} />
          <input type="number" min={0} max={16} />
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Product Type</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(2)}
          style={{ cursor: "pointer" }}
        />
        <ul className="product-type-items">
          <input type="checkbox" />
          <label>Business (0)</label> <br />
          <input type="checkbox" />
          <label>Entertainment (0)</label> <br />
          <input type="checkbox" />
          <label>Fiction (0)</label> <br />
          <input type="checkbox" />
          <label>Humor (0)</label> <br />
          <input type="checkbox" />
          <label>Literature (0)</label> <br />
          <input type="checkbox" />
          <label>Sugar Flakes(0)</label>
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>More Filters</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(3)}
          style={{ cursor: "pointer" }}
        />
        <ul className="more-filters-items">
          <input type="checkbox" />
          <label>$100 - $200 (0)</label> <br />
          <input type="checkbox" />
          <label>$200 - $300 (0)</label> <br />
          <input type="checkbox" />
          <label>$300 - $400 (0)</label> <br />
          <input type="checkbox" />
          <label>Adam Baid (0)</label> <br />
          <input type="checkbox" />
          <label>Alice James (0)</label> <br />
          <input type="checkbox" />
          <label>Donald William (0)</label> <br />
          <input type="checkbox" />
          <label>Hardcover (0)</label> <br />
          <input type="checkbox" />
          <label>Hebrew (0)</label> <br />
          <input type="checkbox" />
          <label>Paperback (0)</label> <br />
          <input type="checkbox" />
          <label>Spanish (0)</label>
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Brand</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(4)}
          style={{ cursor: "pointer" }}
        />
        <ul className="brand-items">
          <input type="checkbox" />
          <label>Erik Martin (0)</label> <br />
          <input type="checkbox" />
          <label>James Dylan (0)</label> <br />
          <input type="checkbox" />
          <label>Jayden Judah (0)</label> <br />
          <input type="checkbox" />
          <label>Robin Triple (0)</label> <br />
          <input type="checkbox" />
          <label>Sage Isaias (0)</label>
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Format</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(5)}
          style={{ cursor: "pointer" }}
        />
        <ul className="format-items">
          <input type="checkbox" />
          <label>Audible Audiobook (0)</label> <br />
          <input type="checkbox" />
          <label>Hardcover (0)</label> <br />
          <input type="checkbox" />
          <label>Kindle Edition (0)</label> <br />
          <input type="checkbox" />
          <label>Largeprint (0)</label> <br />
          <input type="checkbox" />
          <label>Paperback (0)</label>
        </ul>
      </li>
      <hr />
      <li style={{ listStyle: "none" }}>
        <h6>Language</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2xl"
          onClick={() => handleClick(6)}
          style={{ cursor: "pointer" }}
        />
        <ul className="language-items">
          <input type="checkbox" />
          <label>English (0)</label> <br />
          <input type="checkbox" />
          <label>Hebrew (0)</label> <br />
          <input type="checkbox" />
          <label>Japanese (0)</label> <br />
          <input type="checkbox" />
          <label>Korean (0)</label> <br />
          <input type="checkbox" />
          <label>Spanish (0)</label>
        </ul>
      </li>
    </div>
  );
}

export default Filter;
