import React, { Component } from 'react'
import profImg from "../assets/img/a.jpg";

export default class Home extends Component {
    render() {
        return (
            
            <section id="home" class="pb-5">
                <div class="mb-5">
                    <div class="d-flex flex-row ps-lg-5 ps-1 pt-5">
                        <div class="rounded col-xl-2 ms-lg-5 ps-lg-5 mt-lg-5 mb-lg-5 pt-lg-4">
                            <img src={profImg} class="rounded-circle img-fluid img-thumbnail" alt="profileImage" />
                        </div>
                        <div class="position-relative col-xl-7 my-lg-5 pt-lg-4 ms-5">
                            <div class="text-container position-absolute ps-5 ms-5">
                                <p class="py-3 fw-bold">Hello,</p>
                                <p class="py-3">I'm Sachini Thilakshika</p>
                                <p class="py-4">I am Fashion designer</p>
                                <button type="button" class="btn btn-light btn-outline-dark me-4">Hire me</button>
                                <button type="button" class="btn btn-dark ms-1">Download CV</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="services container bg-light mt-5 px-xl-5 pb-5 pt-3">
                        <div class="services-text col-xl-6">
                            <p class="fs-2 fw-bold">Services</p>
                            <p class="fw-bold">Services required</p>
                            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis provident tempore laudantium magnam culpa dolore, fugit labore ex voluptatem nam soluta alias incidunt recusandae. Distinctio facilis labore tempore eveniet.</p>
                        </div>
                        
                        <div class="box-container d-flex justify-content-between">
                            <div class="box-1 d-flex align-items-center flex-column col-xl-3 pb-4">
                                <span class="d-flex mt-4">1</span>
                                <p class="heading">Product Art Direction</p>
                                <p class="details pb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                                <button type="button" class="btn btn-dark">Reade More</button>
                            </div>
                            <div class="box-2 d-flex align-items-center flex-column col-xl-3 pb-4">
                                <span class="d-flex mt-4">2</span>
                                <p class="heading">Product Launch Consultation</p>
                                <p class="details pb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                                <button type="button" class="btn btn-dark">Reade More</button>
                            </div>
                            <div class="box-3 d-flex align-items-center flex-column col-xl-3 pb-4">
                                <span class="d-flex mt-4">3</span>
                                <p class="heading">Brand analysis</p>
                                <p class="details pb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                                <button type="button" class="btn btn-dark">Reade More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
