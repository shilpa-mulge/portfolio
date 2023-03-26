import React from "react";
import js from "../assets/js.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/github.png";
import firebase from "../assets/firebase.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import router from "../assets/router.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: router,
      title: "React Router",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: git,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b
    from-gray-800 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4
    border-gray-500 p-2 inline"
          >
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
gap-4 text-center py-8 px-12 sm:px-3"
        >
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md duration-500 hover:scale-105 w-full h-20
py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-5 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
