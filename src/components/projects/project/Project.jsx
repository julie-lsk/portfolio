import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./project.scss";
import Modal from "../modal/Modal";



// const yBirds = useTransform(scrollYProgress, [0, 1], [2000, -2000]); 


const Project = ({project}) =>
{
    /********** Modale **********/
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    
    const openModal = (event) => {
        event.preventDefault(); /* évite que la modale soit ouverte tout en haut de la page */
        setIsModalOpen(true);
        document.body.classList.add('modal-open'); /* pour overflow: hidden; = empêche scroll qd la modale est ouverte */
    };
    
    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => { // Attend que l'animation soit terminée avant de fermer la modale
            setIsModalOpen(false);
            setIsClosing(false);
            document.body.classList.remove('modal-open');
        }, 300);
    };
    
    /********** Animation **********/
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const yInfos = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    


    return (
        <section className="container-project">

            <div className="wrapper">
            
                <button onClick={(event) => openModal(event)}>
                    <img src={project.img} ref={ref} alt={`Mockup du projet ${project.title}`} className="mockup" />
                </button>


                <Modal isModalOpen={isModalOpen} onClose={closeModal} isClosing={isClosing} project={project} />


                <motion.div className='infos-wrapper' style={{y: yInfos}}>

                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    <div className='language-wrapper'>
                        {project.languages.map((language, index) => (
                            <img src={language} alt="Langage de programmation/outil/compétence utilisé" key={index} />
                        ))}
                    </div>

                </motion.div>

                {/* <motion.div style={{y: yBirds}} className="birds"></motion.div> */}

            </div>

        </section>
    )
};

export default Project;