import "./App.css";
import Header from "../src/Components/Header";
import Navbars from "./Components/Navbars";
import Home from "../src/Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Footer from "./Components/Footer";
import Brands from "./Pages/Brands/Brands";
import BestSellers from "./Pages/BestSeller/BestSellers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Categories2 from "./Pages/Categories/Categories2";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Blogs2 from "./Pages/Blogs/Blogs2";
import Faq from "./Pages/FAQ/Faq";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Bcmi from "./Pages/Blogs/Bcmi";
import Bcnw from "./Pages/Blogs/Bcnw";
import Bksb from "./Pages/Blogs/Bksb";
import Ncoh from "./Pages/Blogs/Ncoh";
import T5asc from "./Pages/Blogs/T5asc";
import Bwo19c from "./Pages/Blogs/Bwo19c";
import Wpbab from "./Pages/Blogs/Wpbab";
import Bbfbl from "./Pages/Blogs/Bbfbl";
import Information from "./Components/Footer/Information";
import Search from "./Components/Footer/Search";
import Login from "./Pages/Login/Login";
import ForgotYourPassword from "./Pages/ForgotYourPassword/ForgotYourPassword";
import CreateYourAccount from "./Pages/CreateYourAccount/CreateYourAccount";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Navbars />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/blogs2" element={<Blogs2 />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/bcmi" element={<Bcmi />} />
                <Route path="/bwo19c" element={<Bwo19c />} />
                <Route path="/bksb" element={<Bksb />} />
                <Route path="/bcnw" element={<Bcnw />} />
                <Route path="/ncoh" element={<Ncoh />} />
                <Route path="/t5asc" element={<T5asc />} />
                <Route path="/wpbab" element={<Wpbab />} />
                <Route path="/information" element={<Information />} />
                <Route path="/bbfbl" element={<Bbfbl />} />
                <Route path="/search" element={<Search />} />
                <Route path="/bestsellers" element={<BestSellers />} />
                <Route path="/categoriespage2" element={<Categories2 />} />
                <Route
                    path="/createyouraccount"
                    element={<CreateYourAccount />}
                />
                <Route
                    path="/forgotyourpassword"
                    element={<ForgotYourPassword />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
