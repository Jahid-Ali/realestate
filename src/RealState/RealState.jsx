import react, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Import image
import logo from "./image/logo.png";
import house from "./image/house.png";
import house1 from "./image/house1.webp";
import house2 from "./image/house2.jpg";
import house3 from "./image/house3.webp";
import phone from "./image/phone.png";
import homeelogo from "./image/homeelogo.svg";
import bigeclipse from "./image/big-eclipse.svg";
import mideclipse from "./image/mid-eclipse.svg";
import smalleclipse from "./image/small-eclipse.svg";

const RealState = () => {
  const [showBurger, setShowBurger] = useState(false);
  //
  return (
    <>
      {/* NAVBAR */}
      <div className="container">
        <nav className="navbar">
          {/* LOGO */}
          <Link to="/realestate" className="navbar-logo">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          {/* LINK */}
          <div
            className={showBurger ? "mob_navbar navbar_link" : "navbar_link"}
          >
            <Link to="/about" className="navbar_link__item">
              About
            </Link>

            <Link to="/login" className="navbar_link__item nav_btn_login">
              Sign in
            </Link>

            <Link to="/signup" className="navbar_link__item sign nav_btn_sign">
              sign up
            </Link>
          </div>

          {/* BURGER BUTTON */}
          <div
            className="burger"
            onClick={() => {
              setShowBurger(!showBurger);
            }}
          >
            <div className="burger1"></div>
            <div className="burger2"></div>
            <div className="burger3"></div>
          </div>
        </nav>
      </div>

      {/*First SECTION */}
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1>Find Your Perfect</h1>
            <h2> Dream Home</h2>
            <p>
              The house you looked at today and wanted to think about until
              tomorrow may be the same house someone looked at yesterday and
              will buy today.
            </p>
          </div>
          <div className="btn">
            <button className="btn-add" type="submit">
              Search
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="cover">
          <img src={house} alt="house" />
        </div>
      </section>

      <img className="big-circle" src={bigeclipse} alt="" />
      <img className="mid-circle" src={mideclipse} alt="" />
      <img className="small-circle" src={smalleclipse} alt="" />

      <div className="second_section_headerUp">
        <h5>ALL PROPERTY NEEDS - ONE PORTAL</h5>
        <h3>
          “ A man travels the world over in search of what he needs and returns
          home to find it. ”
        </h3>
      </div>

      {/*Homee LOGO */}
      <Link to="/realestate" className="homee_logo">
        <img src={homeelogo} alt="homeelogo" className="homeelogo" />
      </Link>

      {/* SECOND SECTION */}
      <section className="second_section">
        <div className="second_section_cover">
          <img src={house1} alt="house1" />
        </div>

        <div className="second_section_introduction">
          <div className="second_section_introduction_intro-text">
            <h5>Buy a Homee...</h5>
            <h3>Find, Buy & Own Your Dream Home</h3>
            <p>Explore from Apartments, land, villas and more</p>
          </div>

          <div className="btn">
            <button className="btn-add">Explore more</button>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="third_section">
        <div className="third_section_link">
          <Link to="/realestate" className="third_section_link__item">
            Listing
          </Link>

          <Link to="/about" className="third_section_link__item">
            About
          </Link>

          <Link to="/realestate" className="third_section_link__item sign">
            Contact
          </Link>
        </div>

        {/* ////// */}
        <div className="third_section_imgsection">
          <Link to="/realestate" className="third_section_imgsection_firstlink">
            <img src={house1} alt="house2" className="" />
          </Link>
          <Link
            to="/realestate"
            className="third_section_imgsection_secondlink"
          >
            <img src={house3} alt="house3" className="" />
          </Link>
        </div>
      </section>

      {/* Fourth SECTION */}
      <section className="fourth_section">
        <div className="fourth_section_introduction">
          <div className="fourth_section_introduction_intro-text">
            <h5>Sell a Homee...</h5>
            <h3>Sell or Rent your Property</h3>
            <h3> on Housing.com</h3>
            <p>
              Selling property online was never so easy and is now just a click
              away :)
            </p>
          </div>

          <div className="btn">
            <button className="btn-add">Contact us</button>
          </div>
        </div>
        {/* IMAGE */}
        <div className="fourth_section_cover ">
          <img src={house2} alt="house2" />
        </div>
      </section>

      {/*Homee LOGO */}
      <Link to="/realestate" className="homee_logo">
        <img src={homeelogo} alt="homeelogo" className="homeelogo" />
      </Link>

      {/* Fifth SECTION */}
      <section className="fifth_section">
        <div className="fifth_section_cover">
          <img src={phone} alt="phone" />
        </div>

        <div className="fifth_section_introduction">
          <div className="fifth_section_introduction_intro-text">
            <h5>Download an App...</h5>
            <h3>The Housing Mobile App</h3>
            <p>
              The HOUSING mobile app makes it easy to get the right Property and
              manage the entire service process from one platform in real time
            </p>
          </div>

          <div className="btn">
            <button className="btn-add">Download</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer_section">
        <div className="footer_section_div1 footer_section_common">
          <p>Housing.com</p>
          <a href="/realestate">Mobile App</a>
          <a href="/realestate">Our Service</a>
          <a href="/realestate">Builder in India</a>
          <a href="/realestate">Realtor</a>
        </div>
        <div className="footer_section_div2 footer_section_common">
          <p>Company</p>
          <a href="/about">About us</a>
          <a href="/realestate">Contact us</a>
          <a href="/realestate">Careers with us</a>
          <a href="/realestate">Term & Condition</a>
          <a href="/realestate">Privacy Policy</a>
        </div>
        <div className="footer_section_div3 footer_section_common">
          <p>Our Partners</p>
          <a href="/realestate">XyZ.com</a>
          <a href="/realestate">Hoomee.com</a>
          <a href="/realestate">study.com</a>
          <a href="/realestate">Tata.com</a>
          <a href="/realestate">ambition.com</a>
        </div>
        <div className="footer_section_div4 footer_section_common">
          <p>Contact Us</p>
          <h5>Toll Free - 1008-556-874</h5>
          <h6>Monday-Saturday (9:00AM to 11:00PM IST)</h6>
          <h4>Email - feedback@housing.com</h4>
          <h5>All rights reserved - Housing Ltd.</h5>
        </div>
      </section>
    </>
  );
};

export default RealState;
