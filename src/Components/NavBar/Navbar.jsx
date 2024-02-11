import React, { useState } from "react";
import "./Navbar.scoped.css";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";

import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Home from "../Home/Home";
import Middle from "../Middle/Middle";
import Timeline from "../Timeline/Timeline";
import Ready from "../Ready/Ready";
import Testimation from "../Testimation/Testimation";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, settransparent] = useState("header");
  const adding = () => {
    if (window.scrollY >= 10) {
      settransparent("header activeNavHeader");
    } else {
      settransparent("header ");
    }
  };
  window.addEventListener("scroll", adding);
  return (
    <section className="app" data-theme={theme}>
      <div className={transparent}>
        <div className="logoDiv">
          <Link to='/' className="logo">
            <h1 className="flex">
              <BiLogoMediumOld className="icon menuIcon" />
              bla
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to='/' className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to='/' className="navLink">
                products
              </Link>
            </li>
            <li className="navItem">
              <Link to='/' className="navLink">
                Resources
              </Link>
            </li>
            <li className="navItem">
              <Link to='/' className="navLink">
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link to='/' className="navLink">
                contact
              </Link>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon menuIcon" />
          </div>
        </div>
        <div className="headerBtns flex">
          <button className="btn loginBtn ">
            <Link to='/registration'>Registration</Link>
          </button>
          <button className="btn loginBtn">
            <Link to='/login'>Login</Link>
          </button>
          <Link to='/' className="darkMode" onClick={switchTheme}>
            {theme === "light" ? <BsFillMoonStarsFill /> : <IoMdSunny />}
          </Link>
        </div>
        <div onClick={showNav} className="togglrNavbar">
          <PiDotsNineBold className="icon " />
        </div>
      </div>

      <Home />
      <Middle />
      <Timeline />
      <Ready />
      <Testimation />
      <Footer />
    </section>
  );
};

export default Navbar;
