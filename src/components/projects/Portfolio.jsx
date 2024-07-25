import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useRef } from 'react';
import "./portfolio.scss";
import projects from "../../data/projects.json";
import Project from "./project/Project";



function Portfolio()
{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const {scrollYProgress: scrollAnimation} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })


    // Paramétrage des animations :
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const xNuage = useTransform(scrollAnimation, [0, 1], ["-50%", "50%"]);
    const yAvion = useTransform(scrollAnimation, [0, 1], ["-400%", "100%"]);


    return (

        <div className="portfolio" id="Portfolio" ref={ref}>

            {/* Barre de progression */}
            <div className="progress">

                <h3>Mes projets</h3>

                <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>

            </div>

            {projects.map((project) => (
                <Project project={project} key={project.id} /> 
            ))}

            <motion.div style={{x: xNuage}} className="nuage"></motion.div>
            <motion.div style={{y: yAvion}} className="avion"></motion.div>

        </div>

    )
};

export default Portfolio;