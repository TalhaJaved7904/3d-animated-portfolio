import { useRef, useState } from "react"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import Counter from "./Counter"
import "./services.css"
import { motion, useInView } from "motion/react"
import { image } from "motion/react-m"


const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
}
const listVariants = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  },
}

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: "5 Projects",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Project Design",
    counter: "3 Projects",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: "10 Projects",
  },
]

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1)
  const ref = useRef()
  const isInview = useInView(ref, { margin: "-200px" });

  return (
    <div className='services' ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInview ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInview ? "animate" : "initial"}
          className="serviceList">
          {services.map(service => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={10} text="Projects Completed" />
          <Counter from={0} to={5} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {
          currentServiceId === 1 ? (<ComputerModelContainer />) : currentServiceId === 2 ? <img width="75%" src="/design.png" alt="" srcset="" /> : <img width="50%" src="/design1.jpg" alt="" srcset="" />
        }
      </div>
    </div>
  )
}

export default Services