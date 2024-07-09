import {motion} from "framer-motion";
import mouseScroll from "../../utils/assets/mouse_scroll.png";
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
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity
        }
    }
};


function Accueil()
{
    return (
        <div className="container-accueil">
            <motion.div 
                className="accueil" 
                variants={textVariants} 
                initial="initial" 
                animate="animate">

                <motion.h1 variants={textVariants}>Julie LAUSECKER <br />
                <motion.span variants={textVariants}>DÉVELOPPEUSE WEB</motion.span></motion.h1>
                
                <motion.h2 variants={textVariants}>PORTFOLIO</motion.h2>

                <motion.img variants={textVariants} animate="scrollButton" src={mouseScroll} alt="Icône d'une souris d'ordinateur"></motion.img>

            </motion.div>

        </div>
    )
};

export default Accueil;