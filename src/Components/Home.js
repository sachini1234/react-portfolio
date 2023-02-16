import React, { Component } from 'react'
import profImg from "../assets/img/a.jpg";

export default class Home extends Component {
    render() {
        return (
            <div class="rounded">
                <img src={profImg} alt="profileImage" />
            </div>
        )
    }
}
