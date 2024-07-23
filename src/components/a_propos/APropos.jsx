import { useRef } from "react";
import {motion, useScroll, useTransform, } from "framer-motion";
import "./APropos.scss";
import Skills from './skills/Skills';
import contact from '../../utils/assets/email.svg';


function APropos()
{
    const ref = useRef();

    /* Suit la progression du défilement vertical */
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    // const yText = useTransform(scrollYProgress, [0, 1], ["500%", "700%"]);

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    // const xNuage1 = useTransform(scrollYProgress, [0, 1], [-500, 9000]); 
    const xNuage2 = useTransform(scrollYProgress, [0, 1], ["150%", "-200%"]); 
    const xNuage3 = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]); 
    // const yBirds = useTransform(scrollYProgress, [0, 1], [2000, -2000]); 

    return (
        <div className="APropos" ref={ref}>

            {/* <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div> */}
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>
            {/* <motion.div style={{y: yBirds}} className="birds"></motion.div> */}

            

            <div className="flex">
                
                <div className="description">
                    <h3>Qui suis-je ?</h3>

                    <span/>

                    <p>Je suis <strong>Julie</strong>, j'ai 23 ans et je suis Développeuse Web Junior avec un intérêt particulier pour le <strong>front-end</strong>. <br/> 

                    <span/>

                    J'ai suivi une formation en développement web qui m'a permis de réaliser 7 projets sur diverses thématiques : front, back, SEO, gestion de projet... <br/> 
                    Grâce à elle, j'ai compris que je souhaite développer mes compétences en expérience utilisateur (UX) et en interface utilisateur (UI).</p> <br /> 

                    <span/>

                    <p id="space">Afin d'aller plus loin dans mon apprentissage, je suis à la recherche d'une <strong>alternance</strong> pour réaliser une licence informatique dès la rentrée de <strong>septembre 2024</strong>.</p> <br />
                    <p>Je suis très motivée à poursuivre mes études, afin d'apprendre tout en travaillant sur des projets concrets !</p> <br />

                    <span/>

                    <p id="space">Hâte de pouvoir en discuter avec vous !</p> <br />

                    <a href="./cv_julie_lausecker.pdf" download>
                        {/* <img src={contact} alt="Icône mail" id="cv" ></img> */}
                        <motion.div 
                            className="email-svg" 
                            initial={{opacity: 1}} 
                            whileInView={{opacity: [1, 0, 1]}} 
                            transition={{delay: 4, repeat: Infinity}}
                            >

                                <svg strokeWidth="0.2" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <style>{`.cls-1{fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                                    </defs>

                                    <motion.path 
                                        initial={{pathLength: 0}} 
                                        animate={{pathLength: [0, 1, 0]}}
                                        transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                                        className="cls-1" 
                                        d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                                    />
                                </svg>

                        </motion.div>
                    </a>
                    
                </div>

                <div className="skills-container">

                    <h3>Mes compétences</h3>

                    <Skills />

                    {/* <div className="skills-wrapper">

                    </div> */}
                </div>

            </div>

        </div>
    )
};

export default APropos;