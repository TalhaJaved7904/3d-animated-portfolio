import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

// const items = [
//   {
//     id: 1,
//     img: "/p2.jpg",
//     title: "School Management System",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//     link: "/",
//   },
//   {
//     id: 2,
//     img: "/p4.jpg",
//     title: "Social Media Project",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//     link: "/",
//   },
//   {
//     id: 3,
//     img: "/p5.jpg",
//     title: "Animated Portfolio Website",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//     link: "/",
//   },
// ];

// const imgVariants = {
//   initial: {
//     x: -500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };

// const textVariants = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.05,
//     },
//   },
// };

// const ListItem = ({ item }) => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <div className="pItem" ref={ref}>
//       <motion.div
//         variants={imgVariants}
//         animate={isInView ? "animate" : "initial"}
//         className="pImg"
//       >
//         <img src={item.img} alt="" />
//       </motion.div>
//       <motion.div
//         variants={textVariants}
//         animate={isInView ? "animate" : "initial"}
//         className="pText"
//       >
//         <motion.h1 variants={textVariants}>{item.title}</motion.h1>
//         <motion.p variants={textVariants}>{item.desc}</motion.p>
//         <motion.a variants={textVariants} href={item.link}>
//           <button>View Project</button>
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// };

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
  //   const [containerDistance, setContainerDistance] = useState(0);
  //   const ref = useRef(null);

  //   // useEffect(() => {
  //   //   if (ref.current) {
  //   //     const rect = ref.current.getBoundingClientRect();
  //   //     setContainerDistance(rect.left);
  //   //   }
  //   // }, []);

  //   // FIX: Re-calculate when screen size changes
  //   useEffect(() => {
  //     const calculateDistance = () => {
  //       if (ref.current) {
  //         const rect = ref.current.getBoundingClientRect();
  //         setContainerDistance(rect.left);
  //       }
  //     };

  //     calculateDistance();

  //     window.addEventListener("resize", calculateDistance);

  //     return () => {
  //       window.removeEventListener("resize", calculateDistance);
  //     };
  //   }, []);

  //   const { scrollYProgress } = useScroll({ target: ref });

  //   const xTranslate = useTransform(
  //     scrollYProgress,
  //     [0, 1],
  //     [0, -window.innerWidth * items.length]
  //   );

  //   return (
  //     <div className="portfolio" ref={ref}>
  //       <motion.div className="pList" style={{ x: xTranslate }}>
  //         <div
  //           className="empty"
  //           style={{
  //             width: window.innerWidth - containerDistance,
  //             // backgroundColor: "pink",
  //           }}
  //         />
  //         {items.map((item) => (
  //           <ListItem item={item} key={item.id} />
  //         ))}
  //       </motion.div>
  //       <section />
  //       <section />
  //       <section />
  //       <section />
  //       <section />
  //       <div className="pProgress">
  //         <svg width="60%" height="60%" viewBox="0 0 160 160">
  //           <circle
  //             cx="80"
  //             cy="80"
  //             r="70"
  //             fill="none"
  //             stroke="#ddd"
  //             strokeWidth={20}
  //           />
  //           <motion.circle
  //             cx="80"
  //             cy="80"
  //             r="70"
  //             fill="none"
  //             stroke="#dd4c62"
  //             strokeWidth={20}
  //             style={{ pathLength: scrollYProgress }}
  //             transform="rotate(-90 80 80)"
  //           />
  //         </svg>
  //       </div>
  //     </div>
  //   );

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