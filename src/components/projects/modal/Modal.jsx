import "./modal.scss";
import github from "../../../utils/assets/langages/github.png";
import croix from "../../../utils/assets/croix.svg";
import { motion, AnimatePresence } from "framer-motion";


function Modal({ isModalOpen, onClose, isClosing, project })
{
  if (!isModalOpen || !project) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={onClose}
          >

          <motion.div 
            className="modal-content"
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: isClosing ? 0.8 : 1, opacity: isClosing ? 0 : 1}}
            exit={{scale: 0.8, opacity: 0}}
            transition={{duration: 0.4}}
            onClick={e => e.stopPropagation()}
            >

            <motion.button 
              className="modal-close-button"
              onClick={onClose}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}} 
              transition={{delay:0.5}}
              >

              <img src={croix} alt="Croix de fermeture de la modale"/>

            </motion.button>
            
            <>
              <h4>{project.title}</h4>
              <p>Voici quelques images en plus sous plusieurs formats</p>

              <div className="mockup-wrapper">
                {project.mockup.map((p, index) =>
                (
                  <img src={p} alt={`Mockup du projet ${project.title}`} key={index} />
                ))}
              </div>
              
              <p id="avis">Mon avis sur le projet : </p>
              <p className="commentaire">{project.commentaire}</p>

              <p>Cliquez sur le logo de GitHub pour découvrir mon code !</p>

              <a href={project.github} target="_blank"><img src={github} alt={`Logo GitHub avec lien vers le projet ${project.title}`} className="github"></img></a>
            </>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;