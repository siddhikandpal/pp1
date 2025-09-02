import React from 'react';
import "./home.css";
import Me from "../../assets/MeAvatar.png";
import Socials from './socials';

const Home = () => {
  return (
    <section className = "homeContainer" id = "home">
        <div className = "intro">
            <img src = {Me} alt = "" className = "home__img"/>
            <h1 className = "home__name">Hii, Siddhi Kandpal</h1>
            <span class = "home__education">a final year B.tech CSE student at Graphic Era Hill University, Bhimtal</span>

            <Socials/>

            <a href = "#contact" className = "btn">Let's Connect</a>
        </div>
    </section>
  )
}

export default Home
