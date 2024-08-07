import "./modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import github from "../../../utils/assets/langages/github.webp";
import croix from "../../../utils/assets/croix.svg";
import fire from "../../../utils/assets/fire.svg";
import star from "../../../utils/assets/star.svg";
import avis from "../../../utils/assets/avis.png";


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

          <motion.aside
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project"
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: isClosing ? 0.8 : 1, opacity: isClosing ? 0 : 1}}
            exit={{scale: 0.8, opacity: 0}}
            transition={{duration: 0.4}}
            onClick={e => e.stopPropagation()}
            >
            
            <div id="modal-header">
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
            </div>
            
            <div id="modal-body">
              <h4>{project.title}</h4>
              
              <p id="intro">Je vais vous expliquer ici les difficultés que j'ai recontré, ce que j'ai adoré coder ainsi que quelques mockup en plus. <br />
              N'hésitez pas à cliquer sur le lien vers GitHub tout en bas !</p>

              <span/>

              <div className="com-wrapper">

                <ul> <img src={fire} alt="Icône flamme"/> Ce qui était difficile : 
                  {project.difficultes.map((i, index) =>
                  (
                    <li key={index}>{i}</li>
                  ))}
                </ul>

                <ul> <img src={star} alt="Icône étoile"/> Ce que j'ai apprécié :
                  {project.pointsForts.map((i, index) =>
                  (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              
              </div>
              
              <p id="avis"> <img src={avis} alt="Icône avis - crédit : https://www.flaticon.com/fr/icones-gratuites/smileys"/>Mon avis sur le projet : </p>
              <p className="commentaire">{project.commentaire}</p>

              <span/>
              
              <p>Voici d'autres aperçus du site sous différents formats :</p>

              <div className="mockup-wrapper">
                {project.mockup.map((p, index) =>
                (
                  <img src={p} alt={`Mockup du projet ${project.title}`} key={index} />
                ))}
              </div>
              
              <div className="github">
                <p>Cliquez sur le logo de GitHub pour découvrir mon code !</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer"><img src={github} alt={`Logo GitHub avec lien vers le projet ${project.title}`} className="lien-github"></img></a>
              </div>

            </div>

          </motion.aside>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;