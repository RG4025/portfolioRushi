import React from "react";
import html_logo from "../../Images/html_logo.jpeg";
import css_logo from "../../Images/css_logo.png";
import js_logo from "../../Images/js_logo.png";
import jquery_logo from "../../Images/jquery_logo.jpg";
import react_logo from "../../Images/react_logo.png";
import $ from "jquery";


function SkillsAndCertificates() {

  const skillFrontend = [
    {
      img: html_logo,
      title: "HTML",
    },
    {
      img: css_logo,
      title: "CSS",
    },
    {
      img: js_logo,
      title: "Javascript",
    },
    {
      img: jquery_logo,
      title: "jQuery",
    },
    {
      img: react_logo,
      title: "React Js",
    },
  ];
  const skillBackend = [
    {
      img: html_logo,
      title: "Java",
    },
    {
      img: css_logo,
      title: "JDBC",
    },
    {
      img: js_logo,
      title: "Servlet",
    },
    {
      img: jquery_logo,
      title: "Springboot",
    },
    {
      img: react_logo,
      title: "MySQL",
    },
  ];

  return (
    <>
      <section className="">
        <div className="sectionSkillParent">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h4 className="aboutTitle">Frontend </h4>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5">
            {skillFrontend.map((e, index) => {
              return (
                <div className="col py-2 " key={index}>
                  <div className="container skillChildOne p-3  d-flex flex-column justify-content-center align-items-center">
                    <div className="skillImage d-flex justify-content-center align-items-center">
                      <img src={e.img} alt="Language" className="img-fluid" />
                    </div>

                    <div className="py-2  fw-bold">
                      <span>{e.title}</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sectionSkillParent py-3">
          <div className="d-flex justify-content-start align-items-center pb-2">
            <h4 className="aboutTitle">Backend</h4>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5">
            {skillBackend.map((e, index) => {
              return (
                <div className="col py-2 " key={index}>
                  <div className="container skillChildOne p-3  d-flex flex-column justify-content-center align-items-center">
                    <div className="skillImage d-flex justify-content-center align-items-center">
                      <img src={e.img} alt="Language" className="img-fluid" />
                    </div>

                    <div className="py-2  fw-bold">
                      <span>{e.title}</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sectionSkillParent py-3">
          <div className="d-flex justify-content-start align-items-center pb-2">
            <h4 className="aboutTitle">Certificates</h4>
          </div>
          <div className="skillChildTwo p-3">

            here will be the UX design and javascript and react basics as well as the C++ udemy!!.

          </div>
        </div>
      </section>
    </>
  );
}


export default SkillsAndCertificates;
