import { useState } from "react";
import { motion } from "framer-motion";
import "./project.scss";
import Modal from "../modal/Modal";
import arrowLeft from '../../../utils/assets/arrow_left.webp';



const Project = ({project}) =>
{
    /********** Modale **********/
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    
    const openModal = (event) => {
        event.preventDefault(); /* évite que la modale soit ouverte tout en haut de la page */
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => { // Attend que l'animation soit terminée avant de fermer la modale
            setIsModalOpen(false);
            setIsClosing(false);
        }, 300);
    };


    return (
        <section className="container-project">

            <div className="wrapper">
            
                <button onClick={(event) => openModal(event)}>
                    <img src={project.img} alt={`Mockup du projet ${project.title}`} className="mockup" />
                </button>

                <motion.div className='infos-wrapper'>

                    <div className="title-wrapper">
                        <h4>{project.title}</h4>

                        <div className='language-wrapper'>
                            {project.languages.map((language, index) => (
                                <img src={language} alt="Langage de programmation/outil/compétence utilisé" key={index} />
                            ))}
                        </div>
                    </div>
                    
                    <p>{project.description}</p>

                    <div className="arrow">
                        <img src={arrowLeft} alt="Flèche pointée vers la gauche" />
                        Cliquez sur l'image pour en savoir plus !
                    </div>

                </motion.div>

                {isModalOpen && (
                    <Modal isModalOpen={isModalOpen} onClose={closeModal} isClosing={isClosing} project={project} />
                )}

            </div>

        </section>
    )
};

export default Project;