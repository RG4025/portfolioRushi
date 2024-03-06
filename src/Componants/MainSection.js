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
          <div className="navbarMainSection py-3 ">
            <ul className="nav px-2 gap-1 gap-sm-3 d-flex justify-content-around align-items-center">
              <li className="navLink px-2">
                <NavLink className="navItem" to="/">
                  About
                </NavLink>
              </li>
              <li className="navLink px-2">
                <NavLink className="navItem" to="/Blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="navLink px-2">
                <NavLink className="navItem" to="/Projects">
                  Projects
                </NavLink>
              </li>
              <li className="navLink px-2">
                <NavLink className="navItem" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container pt-5">
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
