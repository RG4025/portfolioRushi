import React from "react";
import * as icon from "react-bootstrap-icons";
function Education() {
  const educationMain = [
    {
      eTitle: "Java Fullstack Development",
      eDate: "Mar 2024",
      eContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus vitae dignissimos eaque dolorum quibusdam modi laborum iste accusantium nostrum.",
    },
    {
      eTitle: "Bachlor Of Computer Application (BCA)",
      eDate: "2020 — 2023",
      eContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus vitae dignissimos eaque dolorum quibusdam modi laborum iste accusantium nostrum.",
    },
    {
      eTitle: " Higher Secondary School (HSC)",
      eDate: "2017 — 2019",
      eContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus vitae dignissimos eaque dolorum quibusdam modi laborum iste accusantium nostrum.",
    },
  ];

  return (
    <>
      <section className="sectionEducation">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center gap-3 py-2 mb-3">
            <div className="socialTwoOne d-flex justify-content-center align-items-center px-2  rounded-3">
              <i class="bi bi-award-fill"></i>
            </div>
            <div className="d-flex justify-content-start align-items-center pb-2">
              <h4 className="aboutTitle">Education</h4>
            </div>
          </div>

          <ol class="education-list">
            {educationMain.map((e) => {
              return (
                <li class="educationItem">
                  <h5 class="h5 educationItem-title">
                    {e.eTitle}
                  </h5>

                  <span>{e.eDate}</span>

                  <p class="educationText">
                    {e.eContent}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Education;
