import {motion} from "framer-motion";
import "./accueil.scss";


const textVariants =
{
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
};


function Accueil()
{
    return (
        <motion.div 
            className="accueil" 
            variants={textVariants} 
            initial="initial" 
            animate="animate">

            <motion.h1 variants={textVariants}>Julie LAUSECKER <br />
            <motion.span variants={textVariants}>DÉVELOPPEUSE WEB</motion.span></motion.h1>
            
            <motion.h2 variants={textVariants}>PORTFOLIO</motion.h2>

        </motion.div>
    )
};

export default Accueil;