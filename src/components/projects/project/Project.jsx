import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./project.scss";


const Project = ({project}) =>
{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300])

    
    return (
        <section ref={ref} className="container-project">

            <div className="wrapper">
            
                <img src={project.img} alt={`Mockup du projet ${project.title}`} />

                <motion.div className='infos-wrapper' style={{y}}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    <div className='language-wrapper'>
                        {project.languages.map((language, index) => (
                            <a key={index} ><img src={language} alt="Langage de programmation/outil/compétence utilisé" /></a>
                        ))}
                    </div>
                    <a href={project.github}></a>
                </motion.div>

            </div>

        </section>
    )
};

export default Project;