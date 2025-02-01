import "./contact.css";
import { sendForm } from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const ref = useRef();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await sendForm(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        e.target,
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS user ID
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.log(err)
    }
  };


  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref} onSubmit={handleSubmit}>
      <div className="cSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Talha"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="talha@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection svg"><ContactSvg /></div>
    </div>
  );
};

export default Contact;