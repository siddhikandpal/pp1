import React from 'react';
import "./projects.css";
import p1 from "../../assets/movieRec.png";
import p2 from "../../assets/osSim.png";
import p3 from "../../assets/mobilePP.png";
import p4 from "../../assets/compiler.png";
import p5 from "../../assets/weatherForc.png";
import p6 from "../../assets/spotTrack.png";

const data1 =[
  {
    id:1,
    image: p1,
    title: "API powered Moive Recommender",
    desc: "A content-based movie recommendation system that uses cosine similarity to find similar movies and recommend movies.",
    tech: "-Python | Scikit-learn "
  },
  {
    id:2,
    image: p2,
    title: "Memory Management Simulator",
    desc: "A web-based application that simulates the memory allocation algorithms used by OS - best fit, worst fit and first fit. It is build to serve as a tool for educational purpose.",
    tech: "-React"
  },
  {
    id:3,
    image: p3,
    title: "Mobile Price Prediction",
    desc: "A research work done for comparative analysis of machine learning algorithms in predicting mobile prices."   , 
    tech: "-Python | Scikit-learn "
  }
];

const data2 =[
  {
    id:1,
    image: p4,
    title: "C code analyzer with multiphase compilation pipeline",
    desc: "A web-based application that analyzes the C code written in the code editor and compiles it showing output of each phase of compiler like tokens, parse tree, 3 address code, optimized code and assembly code.",
    tech: "-React"
  },
  {
    id:2,
    image: p5,
    title: "Agriculture Weather Forecaster",
    desc: "A Python-based desktop application showing weather forecast that includes details that are cruicial in agriculural practices.",
    tech: "-Python | Tkinter | "
  },
  {
    id:3,
    image: p6,
    title: "Unsafe Spot Tracker",
    desc: "A web-based application that allows users to track a location considered as unsafe by them with the reason and other users can see those locations and reasons as why they are considered unsafe.",
    tech: "-HTML | CSS | Javascript "
  }
];

const Projects = () => {
  return (
    <div className = "projects container section" id = "projects">
      <h2 className = "section__title">Projects</h2>
      <div className = "projects__container grid">
        {data1.map(({id, image, title, desc, tech}) => {
          return (<div className = "projects__card" key = {id}>
            <img src = {image} alt = "" className = "projects__img"/>
            <h3 className = "projects__title">{title}</h3>
            <p className = "projects__desc">{desc}</p>
            <p className = "projects__tech">{tech}</p>
          </div>
          )
        })}
        {data2.map(({id, image, title, desc, tech}) => {
          return (<div className = "projects__card" key = {id}>
            <img src = {image} alt = "" className = "projects__img"/>
            <h3 className = "projects__title">{title}</h3>
            <p className = "projects__desc">{desc}</p>
            <p className = "projects__tech">{tech}</p>
          </div>
          )
        })}
      </div>
      <div className = "projects__viewmore">
        <a href = "https://github.com/Ayushii-uniyal?tab=repositories"className = "projects__viewmore-text">View more..</a>
      </div>
    </div>
  )
}

export default Projects
