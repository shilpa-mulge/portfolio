import React from "react";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      id: 1,
      style: "bg-ecom bg-cover ",
      demo: "https://ecomerse-app-12d71.web.app/",
      git: "https://github.com/shilpa-mulge/ecommerce-app",
      name: "Ecommerse App",
    },
    {
      id: 2,
      style: "bg-exp bg-cover",
      demo: "https://expense-tracker-b91f4.web.app/",
      git: "https://github.com/shilpa-mulge/react-expense-tracker",
      name: "Expense Tracker App",
    },
    {
      id: 3,
      style: "bg-mail bg-cover",
      demo: "http://mail-box-client-406c3.web.app/",
      git: "https://github.com/shilpa-mulge/mail-box-client",
      name: "Mailbox Client",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0"
        >
          {projects.map(({ id, style, demo, git, name }) => (
            <div
              key={id}
              className={`group shadow-lg shadow-blue-600 rounded-r-lg bg-ecom ${style} h-80`}
            >
              <div className="opacity-0 rounded group-hover:opacity-100 bg-blue-300 flex flex-col justify-center items-center p-4 h-80">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {name}
                </span>
                <div className="pt-8 text-center  ">
                  <a href={demo}>
                    <button
                      className=" text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700
                    font-bold text-lg hover:scale-150"
                    >
                      Live
                    </button>
                  </a>
                  <a href={git}>
                    <button
                      className="text-center rounded-xl px-4 py-3 m-2 bg-white text-gray-700
                    font-bold text-lg  hover:scale-150 "
                    >
                      <FaGithub size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
