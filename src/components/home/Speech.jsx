import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";

const Speech = () => {
    return (
        <motion.div className='bubbleContainer'
         animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "Designing seamless, engaging, and functional web experiences that captivate users.",
                        1000,
                        "Turning ideas into immersive digital realities – one line of code at a time.",
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/man.png" alt="" />
        </motion.div>
    )
}

export default Speech