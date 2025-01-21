/* eslint-disable no-unused-vars */
import React from "react";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* <img
            src={AboutImage}
            alt="David Cole"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          /> */}
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed">
              Hi, I’m <strong>David Isaac Samuel Cole</strong>, a passionate and
              motivated software developer with a solid foundation in computer
              science and hands-on experience in building and testing software
              applications. My goal is to deliver innovative solutions that
              enhance user experiences and solve real-world problems.
              <br />
              Fluent in English and Chinese, I have successfully collaborated on
              projects across diverse teams, showcasing strong communication
              and problem-solving skills. I strive to make a meaningful impact
              through technology while continually learning and growing in the
              industry.
            </p>
            {/* <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                     transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                     transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  Spring-Boot
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                     transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                     transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div> */}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-green-400 to-blue-500"
                >
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-green-400 to-blue-500"
                >
                  5+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a
                href="/resume.pdf"
                download="resume"
                className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 
                  text-black font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
