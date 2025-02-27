/* eslint-disable no-unused-vars */
import React from "react";

const services = [
  {
    id: 1,
    title: "Backend Development",
    description: "Developed robust backend systems using ASP.NET Core, NodeJS, Spring Boot, and Python for scalable, high-performance applications.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Built dynamic, responsive user interfaces using React.js, Next.js, and Tailwind CSS, ensuring an optimal user experience across devices.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Implemented full-stack solutions using technologies like Next.js, React.js, and RESTful APIs, delivering seamless user experiences.",
  },
  {
    id: 6,
    title: "Database Management",
    description: "Managed databases such as MySQL, MS SQL Server, and MongoDB, ensuring data integrity, security, and high availability.",
  },
  {
    id: 7,
    title: "Cloud & Server Management",
    description: "Deployed and maintained web applications on cloud platforms, focusing on performance optimization, scalability, and uptime.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {/* {service.id} */}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
