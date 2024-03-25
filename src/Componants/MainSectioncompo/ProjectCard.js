import React from "react";

function ProjectCard({ data }) {
  return (
    <>
      <div className="py-2 py-sm-3 py-lg-4">
        <div className="col projectCard rounded-4 ">
          <div className=" text-light ">
            <div className="bg-primary d-flex justify-content-center align-items-center text-light">
              <p className="pt-2 fw-bold">{data.pName}</p>
            </div>

            <div className="">
              <img src={data.pImage} alt="" className="img-fluid h-100" />
            </div>

            <div className="py-1 container">
              <small>
                Created Using: <strong>{data.pTech}</strong>{" "}
              </small>
            </div>

            {data.pLink == null ? (
              <div className="projectCardChild container py-2">
                <div className="d-flxx justify-content-around align-items-center">
                  <div className="">
                    <a href={data.pLink} target="_blank">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        See Demo
                      </button>
                    </a>
                  </div>
                  <div className=""></div>
                </div>
              </div>
            ) : (
              <div className="projectCardChild container py-2">
                <div className="d-flxx justify-content-around align-items-center">
                  <div className="">
                    <a href={data.pLink} target="_blank">
                      <button type="button" className="btn btn-primary btn-sm">
                        See Here
                      </button>
                    </a>
                  </div>
                  <div className=""></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        class="modal fade  mt-4 "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body bg-secondary">
              <iframe
                className="projectDemoIframe"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1"
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
