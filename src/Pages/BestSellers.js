import "../Pages/BestSellers.css";
import Filter from "../Components/Filter";

function BestSellers() {
  return (
    <div>
      <div className="container1-bestsellers">
        <div className="opacity-container-bestsellers"></div>
        <h2 className="heading-bestsellers">Collection</h2>
      </div>
      <div className="container2-bestsellers">
        <Filter />
      </div>
    </div>
  );
}

export default BestSellers;
