import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const projects = [
  {
    id: 1,
    title: "School Management System",
    description: "A comprehensive digital platform streamlining school operations featuring student enrollment, attendance tracking, grade management, and parent-teacher communication. Developed with React.js and Node.js, this cloud-based solution reduces administrative workload by 60% while enhancing data security.",
    image: "/school.jpg",
  },
  {
    id: 2,
    title: "Job Portal Application",
    description: "Modern web application connecting employers with candidates, featuring resume parsing, advanced search filters, and real-time notifications. Built using MERN stack (MongoDB, Express, React, Node.js).",
    image: "/job.jpg",
  },
  {
    id: 3,
    title: "Animated Portfolio Website",
    description: "Interactive developer portfolio showcasing technical skills through fluid animations and micro-interactions. Implemented with React.js and Framer Motion, featuring responsive design, 3D transformations, and CSS transitions.",
    image: "/portfolio.jpg",
  },

];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our Portfolio
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="project-card"
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Portfolio;