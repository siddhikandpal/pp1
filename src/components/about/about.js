import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section className = "about container section" id = "about">
        <h2 className = "section__title">About Me!</h2>
        <div className = "about__container grid">
            <div className = "about__info">
                <p className = "about__desc">Hi! I'm Siddhi Kandpal - a CSE undergrad who loves crafting web apps and diving into the world of machine learning. Be it front-end magic with React or smart predictions using Scikit-learn, I enjoy turning ideas into interactive experiences</p>
                <p className="about__desc">
                    I'm on a journey to become a well-rounded Software Development Engineer — learning, unlearning, and growing with every project I build.  
                    When I'm not coding, you'll find me sketching, or just soaking in nature — because a balanced mind builds better software!
                </p>
            </div>
            <div className = "about__btn">
                <a href = "/Resume.pdf" className = "btn">Get Resume</a>
            </div>
        </div>
    </section>
  )
}

export default About
