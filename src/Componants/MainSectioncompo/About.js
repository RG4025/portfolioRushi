import React from "react";
import * as icon from "react-bootstrap-icons";
function About() {

  
  const aboutMain = [
    {
      // icons: <icon.CodeSquare />,
      icons:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89Zqyiu5EhY4uDRASwggSgbkfI2JvBQmJPxuG4WcZJA&s",
      aboutTitle: "Frontend Dev",
      aboutContent: "RWD, User Interface, Browser Support.",
    },
    {
      // icons: <icon.CodeSquare />,
      icons:
        "https://img.icons8.com/nolan/512w/backend-development.png",
      aboutTitle: "Backend Dev",
      aboutContent: "Data Flow, Handling Table Interactivity.",
    },
    {
      icons:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeJt3X4pW8SK3cBcoApqiFzmXH1miabhBcHg4jgDJjQ&s",
      aboutTitle: "API Integration",
      aboutContent: "Manage, Data Sorting & Integrat",
    },
    {
      // icons: <icon.CodeSquare />,
      icons:
        "https://document360.com/wp-content/uploads/2023/08/Mastering-Documentation-Version-Control-Best-Practices-for-a-Streamlined-and-Collaborative-Workflow.png",
      aboutTitle: "Version And File Control",
      aboutContent: "Github, File Format's, Import & Exports.",
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
          <div className="d-flex justify-content-start align-items-center pb-2">
            <h5 className="aboutTitle">I Work On</h5>
          </div>

          <div className="container">
            <div className="row row-cols-1 row-cols-md-2">
              {aboutMain.map((e) => {
                return (
                  <div className="col py-3 ">
                    <div className="">
                      <div className="p-1 px-sm-0 py-sm-3 aboutChildTwoParent text-start d-flex justify-content-start gap-2  align-items-center ">
                        <div className="aboutChildTwo mx-2 mx-sm-2 ">
                          <img src={e.icons} alt="" className="" />
                        </div>
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
