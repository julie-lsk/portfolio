import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import "./parallax.scss";


function Parallax({type})
{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yBackground = useTransform(scrollYProgress, [0, 1], ["-200%", "800%"])

    return (
        <div 
            className="parallax" 
            style={{
                background: type === "aPropos" 
                ? "linear-gradient(180deg, #82d1c7, #eceacf)" 
                : "linear-gradient(180deg, #111132, #505064)"}}
            >
            <motion.h3 style={{y: yBackground}}>{type === "aPropos" ? "Qui suis-je ?" : "Mes projets"}</motion.h3>

            <motion.div className="montagne-1"></motion.div>
            <motion.div className="arbres"></motion.div>
            <motion.div className="montagne-2"></motion.div>
            <motion.div className="montagne-3"></motion.div>
            <motion.div className="nuage-1"></motion.div>
            <motion.div className="nuage-2"></motion.div>
            <motion.div className="nuage-3"></motion.div>
        </div>
    )
};

export default Parallax;