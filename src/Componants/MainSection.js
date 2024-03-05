import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./MainSectioncompo/About";
import Blogs from "./MainSectioncompo/Blogs";
import Contact from "./MainSectioncompo/Contact";


function MainSection() {
  return (
    <>
      <section className="sectionOneMain">
        <div className="container ">
          <div className="navbarMainSection">
            <ul className="nav gap-5">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="container pt-5">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Contact" element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
