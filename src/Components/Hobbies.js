import React, { Component } from 'react'
import Picture1 from "../assets/img/c.jpg";
import Picture2 from "../assets/img/d.jpg";
import Picture3 from "../assets/img/e.jpg";
import Picture4 from "../assets/img/f.png";
import Picture5 from "../assets/img/g.jpg";

export default class Hobbies extends Component {
    render() {
        return (
            <div class="hobbies">
                <div class="container pt-5">
                    <div class="hobbies-text">
                        <p class="fw-bold fs-2 text-dark">Hobbies</p>
                        <p class="text-dark col-xl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis provident tempore laudantium magnam culpa dolore, fugit labore ex voluptatem nam soluta alias incidunt recusandae. Distinctio facilis labore tempore eveniet.</p>
                    </div>
                    
                    <div class="d-flex">
                        <div class="card col-xl-3">
                            <img src={Picture1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        
                        <div class="card col-xl-3">
                            <img src={Picture2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="box-container-sach">
                        <div class="box-1">
                            <span>1</span>
                            <p class="heading">Reading Books</p>
                            <img src={Picture1} alt="Picture 1" />
                            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                        </div>
                        <div class="box-2">
                            <span>2</span>
                            <p class="heading">Watchinig Movies</p>
                            <img src={Picture2} alt="Picture 2" />
                            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                        </div>
                        <div class="box-3">
                            <span>3</span>
                            <p class="heading">Gardening</p>
                            <img src={Picture3} alt="Picture 3"/>
                            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                        </div>
                    </div>
                    
                    <div class="box-container-thila">
                        <div class="box-4">
                            <span>4</span>
                            <p class="heading">Collecting fancy clothes</p>
                            <img src={Picture4} alt="Picture 4" />
                            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                        </div>
                        <div class="box-5">
                            <span>5</span>
                            <p class="heading">Travelling</p>
                            <img src={Picture5} alt="Picture 5" />
                            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores reprehenderit, vero culpa repellat temporibus natus provident, molestiae laudantium, accusamus doloribus. Corporis quos praesentium corrupti pariatur ut fugit dolorum assumenda?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
