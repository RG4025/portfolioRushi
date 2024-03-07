import React from "react";
import "../App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./MainSectioncompo/About";
import Blogs from "./MainSectioncompo/Blogs";
import Contact from "./MainSectioncompo/Contact";
import Projects from "./MainSectioncompo/Projects";

function MainSection() {
  return (
    <>
      <section className="sectionOneMain">  
        <div className=" ">
          <div className="navbarMainSection py-1 py-md-2 ">
            <ul className="navbarScroll navScrollbar">
              <li className="navLink px-0 py-0 py-sm-0">
                <NavLink className="navItem" to="/">
                  About
                </NavLink>
              </li>
              <li className="navLink px-0 py-0 py-sm-0">
                <NavLink className="navItem" to="/Blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="navLink px-0 py-0 py-sm-0">
                <NavLink className="navItem" to="/Blogs">
                  Education
                </NavLink>
              </li>
              <li className="navLink px-0 py-0 py-sm-0">
                <NavLink className="navItem" to="/Projects">
                  Projects
                </NavLink>
              </li>
              <li className="navLink px-0 py-0 py-sm-0">
                <NavLink className="navItem" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container pt-3">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
