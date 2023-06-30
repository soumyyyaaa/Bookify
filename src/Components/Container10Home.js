import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import latestNews1 from "../Images/latest-news-img1.png";
import latestNews2 from "../Images/latest-news-img2.png";
import latestNews3 from "../Images/latest-news-img3.png";
import "../Components/Container10Home.css"

function Container10Home() {
  return (
    <div className="container10-home">
      <h2 className="heading-new-arrivals">LATEST NEWS</h2>
      <hr className="line-home" />
      <div className="latest-news">
        <div className="latest-news-content">
          <div className="demo-div">
            <img
              src={latestNews1}
              alt="latest news 1"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="search-icon" />
          </div>
          
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Books changed my ideology</h2>
          <p style={{ color: "#676767", margin: "3% 0", textAlign: 'justify' }}>
            In this turbulent world, it can be lovely to use books as an escape,
            to read about a different world with different problems, and maybe
            forget about your own for a while. But, it's also equally cathartic
            and important to read books that reflect our own realities—books
            that take what we're going through, what we're feeling, and put them
            down on a page so we can see ourselves mirrored.
          </p>
          <button className="shop-now shop-now-container10" style={{marginTop: '5%'}}>Read More</button>
        </div>
        <div className="latest-news-content">
          <img
            src={latestNews2}
            alt="latest news 2"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="search-icon" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">Best writers of 19th century</h2>
          <p style={{ color: "#676767", margin: "3% 0", textAlign: 'justify' }}>
            The first half of the 19th century was characterized by Romanticism,
            a literary, artistic, and intellectual movement focused on emotional
            expression. As scientific inquiry and industry became more
            prevalent, Romantic writers stepped away from urban life. They wrote
            heavily on nature, individualism, and the idea of the ''common
            man''—the working class person reflective of everyday society.
          </p>
          <button className="shop-now shop-now-container10" style={{marginTop: '5%'}}>Read More</button>
        </div>
        <div className="latest-news-content">
          <img
            src={latestNews3}
            alt="latest news 3"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="search-icon" />
          <p style={{ margin: "3% 0" }}>
            <FontAwesomeIcon icon={faCircleUser} /> Ramamoorthi M |{" "}
            <FontAwesomeIcon icon={faCalendarDays} /> April 4, 2020
          </p>
          <h2 className="card-title">100 Best kids story books</h2>
          <p style={{ color: "#676767", margin: "3% 0", textAlign: 'justify' }}>
            We're living in a golden age of young-adult literature, when books
            ostensibly written for teens are equally adored by readers of every
            generation. In the likes of Harry Potter and Katniss Everdeen,
            they've produced characters and conceits that have become the
            currency of our pop-culture discourse—and inspired some of our best
            writers to contribute to the genre.
          </p>
          <button className="shop-now shop-now-container10" style={{marginTop: '5%'}}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Container10Home;
