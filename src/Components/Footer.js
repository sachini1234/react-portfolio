import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
        <footer class="flex-column justify-content-center align-items-center text-center bg-dark">
            <p class="text-white fs-3 fw-bolder pt-4 text-white fw-bold">Asali Blog</p>
            <div class="cont col justify-content-center align-items-center text-center mx-5 px-5 pt-1">
                <div class="mx-5 px-5">
                    <div class="mx-5 px-5">
                        <div class="mx-5 px-3 pb-1">
                            <p class="mx-5 px-5 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dignissimos, vero beatae eum dolore distinctio atque porro quisquam eius nostrum saepe minima nemo tempore sapiente, necessitatibus soluta vel molestiae? Recusandae?</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="social-icons d-flex justify-content-center align-items-center my-4">
                <a class="d-flex justify-content-center align-items-center rounded-circle text-decoration-none me-1">
                    <i class="fab fa-facebook"></i>
                </a>
                <a class="d-flex justify-content-center align-items-center rounded-circle text-decoration-none mx-3">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="d-flex justify-content-center align-items-center rounded-circle text-decoration-none ms-1 me-3">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="d-flex justify-content-center align-items-center rounded-circle text-decoration-none ms-1">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            
            <div class="pb-3">
                <p class="copyright fs-6">Copyright by Asali Blog</p>
            </div>
        </footer>
        )
    }
}
