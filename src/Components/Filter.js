import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Filter() {
    return (
        <div>
            <h6>Filter:</h6>
            <hr />
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Availability
                  </h6>
                  <ul className="dropdown-menu">
                    <input type="checkbox" />
                    <label>In Stock</label> <br />
                    <input type="checkbox" />
                    <label>Out of Stock</label>
                  </ul>
            </li>
            <hr />
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Price Range
                  </h6>
                  <ul className="dropdown-menu">
                    <p>The highest  price is $16.65</p>
                    <p>$</p>
                    <input type="number" min={0} max={16} />
                    <input type="number" min={0} max={16} />
                  </ul>
            </li>
            <hr />
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product Type
                  </h6>
                  <ul className="dropdown-menu">
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
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Filters
                  </h6>
                  <ul className="dropdown-menu">
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
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Brand
                  </h6>
                  <ul className="dropdown-menu">
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
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Format
                  </h6>
                  <ul className="dropdown-menu">
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
            <li style={{listStyle: 'none'}}>
                  <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Format
                  </h6>
                  <ul className="dropdown-menu">
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