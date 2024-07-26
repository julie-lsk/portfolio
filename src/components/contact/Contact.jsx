import {motion, useInView} from 'framer-motion';
import {useRef} from "react";
import "./contact.scss";
import ContactForm from './contactForm/ContactForm';


const variants = 
{
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}



function Contact()
{
    const ref = useRef();

    const isInView = useInView(ref);

    return (
        <motion.div ref={ref} variants={variants} className="contact" initial="initial" whileInView="animate">
            
            <motion.div variants={variants} className="text-container">

                <motion.h3 variants={variants}>Contactez-moi</motion.h3>

                <motion.div variants={variants} className="item">
                    <h4>Mail</h4>
                    <p>julielausecker@gmail.com</p>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h4>Téléphone</h4>
                    <p>06 52 92 47 71</p>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h4>Adresse</h4>
                    <p>67210 OBERNAI</p>
                </motion.div>

            </motion.div>


            <div className="form-container">

                <motion.div 
                    className="email-svg" 
                    initial={{opacity: 1}} 
                    whileInView={{opacity: 0}} 
                    transition={{delay: 3, duration: 1}}
                    >

                    <svg strokeWidth="0.2" viewBox="0 0 50 50" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>{`.cls-1{fill:none;stroke:#50555A;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                        </defs>

                        <motion.path 
                            initial={{pathLength: 0}} 
                            animate={isInView && {pathLength: 1}}
                            transition={{duration: 3, delay: 1}}
                            className="cls-1" 
                            d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                        />
                    </svg>

                </motion.div>

                <ContactForm />

            </div>

        </motion.div>
    )
};

export default Contact;