/* eslint-disable no-unused-vars */
import React from "react";

// Tech stack data
const techStack = [
    { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
    { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "React", badge: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
    { name: "Bootstrap", badge: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" },
    { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" },
    { name: "Spring Boot", badge: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
    { name: "C#", badge: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" },
    { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "Vite", badge: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" },
    { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
    { name: "ASP.NET Core", badge: "https://img.shields.io/badge/ASP.NET%20Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" },
    { name: "Vercel", badge: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
    { name: "Netlify", badge: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" },
    { name: "Java", badge: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" },
    { name: "Microsoft SQL Server", badge: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" },
    { name: "Firebase", badge: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
    { name: "AWS", badge: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { name: "Appwrite", badge: "https://img.shields.io/badge/Appwrite-2D2D2D?style=for-the-badge&logo=appwrite&logoColor=white" },
    { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
    { name: "Windows", badge: "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" },
    { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
    { name: "JWT", badge: "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" },
    { name: "Redis", badge: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
    { name: "Microservices", badge: "https://img.shields.io/badge/Microservices-4B0082?style=for-the-badge&logo=microservices&logoColor=white" },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="bg-black text-white py-20">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center">
                            <img src={tech.badge} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
