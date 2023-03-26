import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
   via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 text-white md:flex-row-0"
      >
        <div>
          <h1 className="text-red-500 ">Hii, my name is</h1>
          <h1
            className="text-4xl sm:text-7xl font-bold
                "
          >
            Shilpa Mulge
          </h1>
          <h1 className="text-4xl sm:text-6xl">
            {" "}
            I'm a Front-End Web Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            Hi, I'm Shilpa Mulge, and I Completed my M.tech in CSE from Lingraj
            Appa Engineering College in 2022. My interests are in Web
            Development, and I love to create beautiful and performant products
            with delightful user experiences.
          </p>
        </div>
        <Link
          to="projects"
          smooth
          duration={500}
          className="text-white w-fit px-6 py-3
            my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer "
        >
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
