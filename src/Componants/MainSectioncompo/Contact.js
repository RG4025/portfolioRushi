import React, { useRef, useEffect } from "react";
import * as icon from "react-bootstrap-icons";

function Contact() {
  const yearone = useRef();

  useEffect(() => {
    // let year = document.getElementById("yearMain");
    let currYear = new Date();
    yearone.current.innerText = `All Rights Reserved @${currYear.getFullYear()}`;
    // yearone.current.innerText=currYear.getFullYear();
    // console.log(currYear.getFullYear());
  }, [yearone]);

  return (
    <>
      <section className="sectionContact w-100 mt-3">
        <div className="">
          <div className="w-100 container">
            <div className="d-flex justify-content-start align-items-center py-3">
              <h4 className="aboutTitle">Let's Connect </h4>
            </div>
            <div className="contactMain">
              <form action="" className="gap-3">
                <div className="d-flex flex-column gap-3 flex-sm-row gap-sm-4 justify-content-evenly align-items-center">
                  <input
                    type="text"
                    placeholder="Name*"
                    name="user_name"
                    title="Enter Your Name"
                    className="w-100 p-2 p-sm-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    name="user_email"
                    title="Enter Your Email"
                    className="w-100 p-2 p-sm-3"
                    required
                  />
                </div>
                <div className="py-3 py-sm-4">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    cols=""
                    title="Enter Your Message"
                    placeholder="Message*"
                    className="w-100 p-2"
                    required
                  ></textarea>
                </div>
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <ul class="list-unstyled gap-1 gap-sm-2 d-flex justify-content-center align-items-center">
                    <li class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center">
                      <a target="_blank" class="text-decoration-none" href="">
                        <icon.Linkedin />
                      </a>
                    </li>
                    <li class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center">
                      <a target="_blank" class="text-decoration-none" href="">
                        <icon.Github />
                      </a>
                    </li>
                    <li class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center">
                      <a target="_blank" class="text-decoration-none" href="">
                        <icon.TwitterX />
                      </a>
                    </li>
                  </ul>
                  <button
                    className="p-1 p-sm-2 fw-bold btn btn-secondary btn-sm "
                    type="button"
                  >
                    <icon.ArrowUpRightSquare className="text-dark fs-6" /> Send
                    Message
                  </button>
                </div>
              </form>
            </div>
            <div className="py-3 py-sm-1 d-flex flex-column justify-content-center gap-2 align-items-center ">
              <div className="skillChildTwo py-1 px-4 d-flex justify-content-center align-items-center text-center">
                <small
                  id="yearMain"
                  className="ms-3 fs-6 text-info"
                  ref={yearone}
                ></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
