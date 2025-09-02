import React from 'react';
import "./skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Flask"]
  },
  {
    category: "Machine Learning & Data Science",
    skills: ["Machine Learning", "Scikit-learn", "Pandas", "TensorFlow", "Matplotlib"]
  },
  {
    category: "Tools & IDEs",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "PyCharm", "Google Colab"]
  }
];

const Skills = () => {
  return (
    <div className="skills container section" id="skills">
      <h2 className="section__title">My Techstack</h2>
      <div className="skills__container">
        {skillsData.map((category, index) => (
          <div className="skills__category" key={index}>
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <span className="skills__item" key={skillIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;