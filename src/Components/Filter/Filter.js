import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../Filter/Filter.css";

const handleClick = (iconId) => {
    const filterNames = [
        ".availability-items",
        ".price-range-items",
        ".product-type-items",
        ".more-filters-items",
        ".brand-items",
        ".format-items",
        ".language-items",
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
        <div className="filter-container">
            <h6 className="heading-filter">Filter:</h6>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(0)}
                    >
                        Availability
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(0)}
                    />
                </div>
                <ul className="availability-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>In Stock</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Out of Stock</label>
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(1)}
                    >
                        Price Range
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(1)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="price-range-items list-items">
                    <p>The highest price is $15.38</p>
                    <p style={{ display: "inline", marginRight: "5%" }}>$</p>
                    <input
                        style={{ marginRight: "5%" }}
                        type="number"
                        min={0}
                        max={16}
                        placeholder="0"
                    />
                    <input
                        style={{ marginRight: "5%" }}
                        type="number"
                        min={0}
                        max={16}
                        placeholder="15.38"
                    />
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(2)}
                    >
                        Product Type
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(2)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="product-type-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Business (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Entertainment (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Fiction (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Humor (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Literature (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Sugar Flakes(0)</label>
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(3)}
                    >
                        More Filters
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(3)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="more-filters-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>$100 - $200 (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>$200 - $300 (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>$300 - $400 (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Adam Baid (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Alice James (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Donald William (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Hardcover (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Hebrew (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Paperback (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Spanish (0)</label>
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(4)}
                    >
                        Brand
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(4)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="brand-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Erik Martin (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>James Dylan (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Jayden Judah (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Robin Triple (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Sage Isaias (0)</label>
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(5)}
                    >
                        Format
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(5)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="format-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Audible Audiobook (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Hardcover (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Kindle Edition (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Largeprint (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Paperback (0)</label>
                </ul>
            </li>
            <hr style={{ color: "#707070" }} />
            <li style={{ listStyle: "none" }}>
                <div className="list-flex">
                    <h6
                        className="heading-filter"
                        onClick={() => handleClick(6)}
                    >
                        Language
                    </h6>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="xl"
                        onClick={() => handleClick(6)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <ul className="language-items list-items">
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>English (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Hebrew (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Japanese (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Korean (0)</label> <br />
                    <input style={{ marginRight: "5%" }} type="checkbox" />
                    <label>Spanish (0)</label>
                </ul>
            </li>
        </div>
    );
}

export default Filter;
