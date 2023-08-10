import "../Filter/FilterOnMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const openNav = () => {
    document.querySelector("#mySidenav").style.width = "320px";
};

const closeNav = () => {
    document.querySelector("#mySidenav").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
};

const handleClickFilterMobile = (num) => {
    const filterNames = [
        ".availability-items-mobile",
        ".price-range-items-mobile",
        ".product-type-items-mobile",
        ".more-filters-items-mobile",
        ".brand-items-mobile",
        ".format-items-mobile",
        ".language-items-mobile",
    ];
    let filter = filterNames[num];
    const element = document.querySelector(filter);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
};

function FilterOnMobile() {
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <button className="closebtn" onClick={() => closeNav()}>
                    &times;
                </button>
                <div className="filter-container">
                    <h6 className="heading-filter-on-mobile">
                        Filter and sort
                    </h6>
                    <hr style={{ color: "#707070" }} />
                    <li
                        className="filters-list-filter-on-mobile"
                        style={{ marginTop: "25%" }}
                    >
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(0)}
                            >
                                Availability
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickFilterMobile(0)}
                            />
                        </div>
                        <ul className="availability-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>In Stock</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Out of Stock</label>
                        </ul>
                    </li>
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(1)}
                            >
                                Price Range
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(1)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="price-range-items-mobile list-items">
                            <p>The highest price is $15.38</p>
                            <p style={{ display: "inline", marginRight: "5%" }}>
                                $
                            </p>
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
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(2)}
                            >
                                Product Type
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(2)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="product-type-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Business (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Entertainment (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Fiction (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Humor (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Literature (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Sugar Flakes(0)</label>
                        </ul>
                    </li>
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(3)}
                            >
                                More Filters
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(3)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="more-filters-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>$100 - $200 (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>$200 - $300 (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>$300 - $400 (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Adam Baid (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Alice James (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Donald William (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Hardcover (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Hebrew (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Paperback (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Spanish (0)</label>
                        </ul>
                    </li>
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(4)}
                            >
                                Brand
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(4)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="brand-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Erik Martin (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>James Dylan (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Jayden Judah (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Robin Triple (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Sage Isaias (0)</label>
                        </ul>
                    </li>
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(5)}
                            >
                                Format
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(5)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="format-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Audible Audiobook (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Hardcover (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Kindle Edition (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Largeprint (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Paperback (0)</label>
                        </ul>
                    </li>
                    <li className="filters-list-filter-on-mobile">
                        <div className="list-flex">
                            <h6
                                className="heading-filter-on-mobile"
                                style={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                }}
                                onClick={() => handleClickFilterMobile(6)}
                            >
                                Language
                            </h6>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="l"
                                onClick={() => handleClickFilterMobile(6)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <ul className="language-items-mobile list-items">
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>English (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Hebrew (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Japanese (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Korean (0)</label> <br />
                            <input
                                style={{ marginRight: "5%" }}
                                type="checkbox"
                            />
                            <label>Spanish (0)</label>
                        </ul>
                    </li>
                    <hr style={{ color: "#707070" }} />
                    <button className="remove-all">Remove all</button>
                    <button className="apply">Apply</button>
                </div>
            </div>
            <div id="main">
                <span
                    style={{
                        fontSize: "1rem",
                        cursor: "pointer",
                        fontFamily: "Josefin Sans, sans-serif",
                        color: "#707070",
                    }}
                    onClick={() => openNav()}
                >
                    <FontAwesomeIcon icon={faFilter} />
                    Filter and sort
                </span>
            </div>
        </>
    );
}

export default FilterOnMobile;
