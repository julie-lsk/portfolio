import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import "./APropos.scss";

/* Icônes langages */
import big3 from "../../utils/assets/langages/html_css_js.png";
import sass from "../../utils/assets/langages/sass.png";
import react from "../../utils/assets/langages/react.webp";
import framerMotion from "../../utils/assets/langages/framer_motion.svg";
import git from "../../utils/assets/langages/git.webp";
import github from "../../utils/assets/langages/github.png";
import nodeJS from "../../utils/assets/langages/node_js.png";
import mongoDB from "../../utils/assets/langages/Mongodb.png";
import expressJS from "../../utils/assets/langages/express_js.png";
import seo from "../../utils/assets/langages/seo.png";
import scrum from "../../utils/assets/langages/scrum.png";
import api from "../../utils/assets/langages/api_rest.svg";


function APropos()
{
    const ref = useRef();

    /* Suit la progression du défilement vertical */
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["-0%", "2500%"]);

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    const xNuage1 = useTransform(scrollYProgress, [0, 1], [-500, 12000]); 
    const xNuage2 = useTransform(scrollYProgress, [0, 1], [1000, -10000]); 
    const xNuage3 = useTransform(scrollYProgress, [0, 1], [1000, -2500]); 
    const yBirds = useTransform(scrollYProgress, [0, 1], [2000, -2000]); 

    return (
        <div className="APropos">

            <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div>
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>
            <motion.div style={{y: yBirds}} className="birds"></motion.div>

            <motion.h3 style={{y: yText}}>Qui suis-je ?</motion.h3>

            <div className="flex">
                <div className="description">
                    <p>Je suis <strong>Julie Lausecker</strong>, j'ai 23 ans et je suis développeuse web/front-end junior avec un intérêt particulier pour le <strong>design</strong>, l'<strong>UX</strong> et l'<strong>UI</strong>.</p> <br /> 

                    <p id="space">Afin d'approfondir mes compétences, je suis à la recherche d'une <strong>alternance</strong> pour la rentrée de <strong>septembre 2024</strong>.</p> <br />
                    <p>Je suis très motivée à poursuivre mes études le plus loin possible, tout en travaillant sur des projets concrets aux côtés d'experts.</p> <br />

                    <p id="space">Si vous êtes intéressé par mon profil, n'hésitez pas à <a href="#Contact" id="contact-link">me contacter</a>, je serai ravie de discuter avec vous !</p> <br />

                    <p id="space">Pour en savoir plus, téléchargez mon <a href="./cv_julie_lausecker.pdf" download id="cv">CV</a> !</p>
                    
                </div>


                <div className="skills-wrapper">
                    <img src={big3} title="JavaScript - HTML - CSS" alt="JavaScript - HTML - CSS" />
                    <img src={sass} title="SASS - SCSS" alt="SASS - SCSS" id="big" />
                    <img src={react} title="React"  alt="React" id="big" />
                    <img src={nodeJS} title="Node.js" alt="Node.js" id="small" />
                    <img src={mongoDB} title="Mongo DB" alt="Mongo DB" id="small" />
                    <img src={expressJS} title="Express.js" alt="Express.js" id="small" />
                    <img src={framerMotion} title="Framer-motion" alt="Framer-motion" id="big" />
                    <img src={seo} title="SEO (Search Engine Optimization)" alt="SEO (Search Engine Optimization)" id="big" />
                    <img src={scrum} title="Méthode SCRUM - gestion de projet" alt="Méthode SCRUM - gestion de projet" />
                    <img src={git} title="git - outil de versioning" alt="git - outil de versioning" />
                    <img src={github} title="GitHub" alt="GitHub" />
                    <img src={api} title="API REST - communication entre applications" alt="API REST - communication entre applications" id="small" />
                </div>

            </div>

        </div>
    )
};

export default APropos;