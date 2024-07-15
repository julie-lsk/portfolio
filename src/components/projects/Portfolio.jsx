import {motion, useScroll, useSpring} from 'framer-motion';
import { useRef } from 'react';
import "./portfolio.scss";
import projects from "../../data/projects.json";
import Project from "./project/Project";

/* Mockups via https://smartmockups.com/fr/mockups/devices */
import kasa from "../../utils/assets/mockup/Kasa/Kasa_mockup_final.jpg";
import mvg from "../../utils/assets/mockup/Kasa/Kasa_mockup_final.jpg";
import carducci from "../../utils/assets/mockup/Kasa/Kasa_mockup_final.jpg";

/* Icônes technos */





function Portfolio()
{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


    return (

        <div className="portfolio" id="Portfolio" ref={ref}>

                <div className="progress">

                    <h3>Mes projets</h3>

                    <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>

                </div>

            {projects.map((project) => (
                <Project project={project} key={project.id} /> 
            ))}

        </div>

    )
};

export default Portfolio;