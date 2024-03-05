import React from "react";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import "../App.css";

function Home() {
  return (
    <div className="sectionone has-scrollbar">
      <div className="row">
        <div className="col-12 col-xl-3">
          <div className="container">
            <div className=" sidebar my-3 my-xl-5">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-9">
          <div className="container">
            <div className=" mainsection my-3 my-xl-5">
              <MainSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
