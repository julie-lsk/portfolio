import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import "./portfolio.scss";
import projects from "../../data/projects.json";
import Project from "./project/Project";


/* Retire animation sur nuage si écran trop petit */
function useIsTablet()
{
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkIsTablet = () => {
            setIsTablet(window.innerWidth <= 2200)
        };

        checkIsTablet();
        window.addEventListener("resize", checkIsTablet);

        return () => window.removeEventListener("resize", checkIsTablet)
    }, []);

    return isTablet;
}

/* Retire animation sur avion */
function useIsSmall()
{
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const checkIsSmall = () => {
            setIsSmall(window.innerWidth <= 1600)
        };

        checkIsSmall();
        window.addEventListener("resize", checkIsSmall);

        return () => window.removeEventListener("resize", checkIsSmall)
    }, []);

    return isSmall;
}



function Portfolio()
{
    const ref = useRef();
    const isTablet = useIsTablet();
    const isSmall = useIsSmall();

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

    const yAvion = useTransform(scrollAnimation, [0, 1], ["-200%", "10%"]);
    const xNuage = useTransform(scrollAnimation, [0, 1], ["-50%", "0%"]);

    const nuageStyle = isTablet 
    ? {x: "0%"}
    : {x: xNuage};

    const avionStyle = isSmall 
    ? {y: "0%"}
    : {y: yAvion};


    return (

        <div className="portfolio" id="Portfolio" ref={ref}>

            {/* Barre de progression */}
            <div className="progress">

                <h3>Mes projets</h3>

                <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>

            </div>

            <div className='projects-flex'>
                {projects.map((project) => (
                    <Project project={project} key={project.id} /> 
                ))}
            </div>

            <motion.div style={nuageStyle} className="nuage"></motion.div>
            <motion.div style={avionStyle} className="avion"></motion.div>

        </div>

    )
};

export default Portfolio;