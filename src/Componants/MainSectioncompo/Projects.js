import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import reactProjectImg from "../../Images/reactProject2.png";

function Projects() {
  const [projects, setProjects] = useState(0);

  const handleSetProject = (e) => {
    setProjects(e.target.value);
  };

  const projectData = [
    {
      pStatus: { selectedStatus: 1 },
      pName: "Real Market Dashboard",
      pImage: reactProjectImg,
      pTech: "React Js",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG1",
      pImage: reactProjectImg,
      pTech: "React Js",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG2",
      pImage: reactProjectImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG1",
      pImage: reactProjectImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG1",
      pImage: reactProjectImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG1",
      pImage: reactProjectImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG1",
      pImage: reactProjectImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 2 },
      pName: "Satyamev Granthalay",
      pImage: reactProjectImg,
      pTech: "PHP,Html,Bootstrap",
      pLink: "",
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 2 },
      pName: "RG Photography",
      pImage: reactProjectImg,
      pTech: "Java,MySQL,Jsp,JDBC",
      pLink: null,
      pLike: 0,
    },
    {
      pStatus: { selectedStatus: 2 },
      pName: "CRUD Operation",
      pImage: reactProjectImg,
      pTech: "SpringBoot",
      pLink: "",
      pLike: 0,
    },
  ];

  const filteredProject = projectData.filter((e) => {
    if (projects == 0) {
      return e.pStatus.selectedStatus;
    } else {
      return e.pStatus.selectedStatus == projects;
    }
  });

  useEffect(() => {}, [projects, filteredProject]);

  return (
    <>
      <div className="container">
        <div className="sectionProject d-flex justify-content-start align-items-center gap-3">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h4 className="aboutTitle">Project's :</h4>
          </div>
          <select
            className="px-3 py-2 fw-bold rounded-2 bg-secondary outline-danger"
            name="project"
            id=""
            onClick={handleSetProject}
          >
            <option className="p-2 fw-bold rounded-2 outline" value="0">
              All
            </option>
            <option className="p-2 fw-bold rounded-2 outline" value="1">
              Frontend
            </option>
            <option className="p-2 fw-bold rounded-2 outline" value="2">
              Backend
            </option>
          </select>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 py-3 ">
            {filteredProject.map((item, index) => (
              <ProjectCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
