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
    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yText = useTransform(scrollYProgress2, [0, 1], ["-300%", "800%"]);

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    const xNuage1 = useTransform(scrollYProgress2, [0, 1], [500, -9000]); 
    const xNuage2 = useTransform(scrollYProgress2, [0, 1], [0, 8000]); 
    const xNuage3 = useTransform(scrollYProgress2, [0, 1], [-500, 10000]); 
    const yBirds = useTransform(scrollYProgress2, [0, 1], [1900, -5000]); 

    return (
        <div className="parallax1">

            <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div>
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>
            <motion.div style={{y: yBirds}} className="birds"></motion.div>

            <motion.h3 style={{y: yText}}>Qui suis-je ?</motion.h3>

            <div className="flex">
                <div className="description">
                    <p>Je suis <strong>Julie Lausecker</strong>, j'ai 23 ans et je suis développeuse web/front-end junior avec un intérêt particulier pour le <strong>design</strong>, l'<strong>UX</strong> et l'<strong>UI</strong>.</p> <br /> 
                    <p>Grâce à une formation de niveau bac+2, j'ai pu réaliser 7 projets divers et variés. Voici ci-après les quelques compétences acquises.</p> <br />

                    <p id="alternance">Je suis actuellement à la recherche d'une <strong>alternance</strong> pour la rentrée de <strong>septembre 2024</strong>.</p> <br />
                    <p>Je suis très motivée à approfondir mes connaissances tout en travaillant sur des projets concrets.</p> <br />

                    <p id="alternanceBis">Si vous êtes intéressé par mon profil, n'hésitez pas à <a href="mailto:julielausecker@gmail.com?subject=Demande d'information&body=Bonjour Julie ! J'aimerais avoir plus d'informations sur...">me contacter</a>, je serai ravie de discuter avec vous !</p>
                </div>

                <div className="skills">
                    <div className="ligne1">
                        <img src={big3} alt="" />
                        <img src={sass} alt="" />
                        <img src={react} alt="" />
                        <img src={framerMotion} alt="" />
                    </div>
                    <div className="ligne2">
                        <img src={git} alt="" />
                        <img src={github} alt="" />
                        <img src={nodeJS} alt="" />
                        <img src={mongoDB} alt="" />
                    </div>
                    <div className="ligne3">
                        <img src={expressJS} alt="" />
                        <img src={seo} alt="" />
                        <img src={scrum} alt="" />
                        <img src={api} alt="" />
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
};

export default APropos;