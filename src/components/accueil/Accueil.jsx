import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import mouseScroll from "../../utils/assets/mouse_scroll.png";
import moon from "../../utils/assets/half_moon.webp";
import stars from "../../utils/assets/stars.webp";
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
    const ref = useRef()

    /* Suit la progression du défilement vertical */
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yMoon = useTransform(scrollYProgress, [0, 1], ["0", "-200%"])
    const xStars = useTransform(scrollYProgress, [0, 1], ["0", "100%"])

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

                <motion.img src={moon} style={{y: yMoon}} className="moon" alt="Demi lune"></motion.img>
                <motion.img src={stars} style={{x: xStars}} className="stars" alt="Étoiles"></motion.img>

            </motion.div>

        </div>
    )
};

export default Accueil;