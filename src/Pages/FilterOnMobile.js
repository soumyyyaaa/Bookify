import "../Pages/FilterOnMobile.css";
import Filter from "../Components/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const openNav = () => {
    document.querySelector("#mySidenav").style.width = "300px";
};
  
const closeNav = () => {
    document.querySelector("#mySidenav").style.width = "0";
    document.querySelector("#main").style.marginLeft= "0";
};

function FilterOnMobile() {
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>
        <Filter />
      </div>
      <div id="main">
        <span style={{fontSize:'1rem',cursor:'pointer',fontFamily: 'Josefin Sans, sans-serif',
    color: '#676767'}} onClick={() => openNav()}>
        <FontAwesomeIcon icon={faFilter} />
        Filter and sort
        </span>
      </div>
    </>
  );
}

export default FilterOnMobile;
