import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./project.scss";
import github from "../../../utils/assets/langages/github.png";
import Modal from "../modal/Modal";


const Project = ({project}) =>
{
    /********** Modale **********/
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const ref = useRef();

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    /********** Animation **********/
    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const yInfos = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    


    return (
        <section className="container-project">

            <div className="wrapper">
            
                <a href="#" onClick={() => openModal(project)}>
                    <img src={project.img} ref={ref} alt={`Mockup du projet ${project.title}`} className="mockup" />
                </a>


                <Modal isOpen={isModalOpen} onClose={closeModal} project={project}>
                    {selectedProject && (
                        <>
                            <h2>{selectedProject.title}</h2>
                            <img src={selectedProject.img} alt={`Projet ${selectedProject.title}`} />
                            <p>{selectedProject.description}</p>
                            <p>{selectedProject.details}</p>
                        </>
                    )}
                </Modal>


                <motion.div className='infos-wrapper' style={{y: yInfos}}>

                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    <div className='language-wrapper'>
                        {project.languages.map((language, index) => (
                            <img src={language} alt="Langage de programmation/outil/compétence utilisé" key={index} />
                        ))}
                    </div>

                    <a href={project.github} target="_blank"><img src={github} alt={`Logo GitHub avec lien vers le projet ${project.title}`} className="github"></img></a>

                </motion.div>

            </div>

        </section>
    )
};

export default Project;