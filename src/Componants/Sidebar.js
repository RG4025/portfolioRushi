import React, { useRef } from 'react'
import '../App.css';
import * as icon from 'react-bootstrap-icons';
import myImage from "../Images/myImage.jpg"


function Sidebar() {

  

  return (

    <>
       
        <section className="sidebarMain">
            <div className="container">
                <div className="sidebarChildOne py-2 mt-2 mt-xl-3 d-flex d-xl-block  justify-content-flex-start gap-2 gap-sm-2 gap-md-4 align-items-center ">


                  <div className='myImage my-3'>
                    <img src={myImage} alt="Rushi" className=''/>
                  </div>

                  <div className='d-flex flex-column gap-0 gap-xl-2 justify-content-center align-items-center text-center'>
                    <strong className='d-block fs-5'>Rushikesh Gurav</strong>

                    <small className='my-2 px-2'>
                     Web  Developer
                    </small>

                  </div><div className="socialTwo d-none d-md-block d-xl-none py-2">
                              <div className='d-flex py-2 gap-2 justify-content-flex-start align-items-center'>
                                <div className='socialTwoOne d-flex justify-content-center align-items-center p-2  rounded-3'>
                                   <icon.Envelope/>
                                </div>
                                <div className='d-flex flex-column '>
                                          <span className='text-uppercase text-light'>Email</span>
                                          <strong className=' fw-medium'>rushikeshgurav@gmail.com</strong>
                                </div>
                              </div>
                              <div className='d-flex py-2 gap-2 justify-content-flex-start align-items-center'>
                                <div className='socialTwoOne d-flex justify-content-center align-items-center p-2  rounded-3'>
                                <icon.Telephone/>
                                </div>
                                <div className='d-flex flex-column '>
                                          <span className='text-uppercase text-light'>Contact</span>
                                          <strong className=' fw-medium'>9130817064</strong>
                                </div>
                              </div>
                        </div>
                </div>

                <div  id='toggleNav' className='sidebarChildTwo mx-auto'>

                  <div className="socialOne py-3 mx-auto d-flex justify-content-center align-items-center gap-3">
                    <div className=' d-flex gap-4'>

                      <span className='fs-5'><a href="#"><icon.Linkedin/></a></span>
                      <span className='fs-5'><a href="#"><icon.Github/></a></span>
                      <span className='fs-5'><a href="#"><icon.TwitterX/></a></span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start align-items-center">
                    <div className='container'>
                        <div className="socialTwo d-block  d-xl-flex flex-column gap-xl-3 d-md-none d-xl-block py-2">
                              <div className='d-flex py-2 gap-2 justify-content-flex-start align-items-center'>
                                <div className='socialTwoOne d-flex justify-content-center align-items-center p-2  rounded-3'>
                                   <icon.Envelope/>
                                </div>
                                <div className='d-flex flex-column '>
                                          <span className='text-uppercase '>Email</span>
                                          <strong className=' fw-medium'>rushikeshgurav@gmail.com</strong>
                                </div>
                              </div>
                              <div className='d-flex py-2 gap-2 justify-content-flex-start align-items-center'>
                                <div className='socialTwoOne d-flex justify-content-center align-items-center p-2  rounded-3'>
                                   <icon.Telephone/>
                                </div>
                                <div className='d-flex flex-column '>
                                          <span className='text-uppercase '>Contact</span>
                                          <strong className=' fw-medium'>9130817064</strong>
                                </div>
                              </div>
                        </div>
                    </div>
                    <div></div>
                  </div>
                </div>
            </div>
        </section>

    </>
  );
};

export default Sidebar