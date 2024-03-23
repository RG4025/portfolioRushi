import React from "react";
import * as icon from "react-bootstrap-icons";
function About() {
  const aboutMain = [
    {
      icons: <icon.CodeSquare />,
      aboutTitle: "Frontend Dev",
      aboutContent: "lorem ipsum doller sit ammet.",
    },
    {
      icons: <icon.CodeSlash />,
      aboutTitle: "Backend Dev",
      aboutContent: "lorem ipsum doller sit ammet.",
    },
    {
      icons: <icon.CodeSlash />,
      aboutTitle: "API Integration",
      aboutContent: "lorem ipsum doller sit ammet.",
    },
    {
      icons: <icon.CodeSquare />,
      aboutTitle: "Version Control",
      aboutContent: "lorem ipsum doller sit ammet.",
    },
  ];

  return (
    <>
      <section>
        <div className="aboutSectionParent">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h4 className="aboutTitle">About Me</h4>
          </div>
          <div className="py-2">
            <p>
              I'm a passionate Full Stack Developer from Kolhapur with a strong
              foundation in both frontend and backend technologies. My focus is
              on crafting user-friendly interfaces that are not only visually
              appealing but also intuitive and easy to navigate.
            </p>

            <p>
              I leverage my coding skills to build simple yet powerful
              applications that prioritize user experience. I believe in the
              power of hard work and consistency. This dedication fuels my
              desire to continuously learn and improve, allowing me to
              contribute meaningfully to the success of the organizations I work
              with and my own professional journey.
            </p>
          </div>
        </div>

        <div className="aboutSectionParentTwo">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h5 className="aboutTitle">I Work On</h5>
          </div>

          <div className="container">
            <div className="row row-cols-1 row-cols-md-2">
              {aboutMain.map((e) => {
                return (
                  <div className="col py-3 ">
                    <div className="container">
                      <div className="p-3 aboutChildTwoParent text-center d-flex justify-content-evenly  align-items-center ">
                        <div className="aboutChildTwo">{e.icons}</div>
                        <div>
                          <strong className="fs-6 text-light">
                            {e.aboutTitle}
                          </strong>
                          <p className="fs-6">{e.aboutContent}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
