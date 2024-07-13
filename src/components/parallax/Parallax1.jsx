import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import "./parallax1.scss";

/* Icônes langages */
import js from "../../utils/assets/langages/js.png"


function Parallax1()
{
    const ref = useRef();

    /* Suit la progression du défilement vertical */
    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yText = useTransform(scrollYProgress2, [0, 1], ["-300%", "800%"])

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    // const xNuage1 = useTransform(scrollYProgress2, [0, 1], [0, -12500]); 
    const xNuage1 = useTransform(scrollYProgress2, [0, 1], [500, -9000]); 
    const xNuage2 = useTransform(scrollYProgress2, [0, 1], [0, 8000]); 
    const xNuage3 = useTransform(scrollYProgress2, [0, 1], [0, 13000]); 
    // const yNuage3 = useTransform(scrollYProgress2, [0, 1], [0, 13000]); 
    const yBirds = useTransform(scrollYProgress2, [0, 1], [1900, -5000]); 

    return (
        <div className="parallax1">

            <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div>
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>
            <motion.div className="nuage-4"></motion.div>
            {/* <motion.div className="nuage-5"></motion.div> */}
            <motion.div style={{y: yBirds}} className="birds"></motion.div>

            <motion.h3 style={{y: yText}}>Qui suis-je ?</motion.h3>

            <div className="flex">
                <div className="description">
                    <p>Je suis <strong>Julie Lausecker</strong>, j'ai 23 ans et je suis développeuse web/front-end junior avec une forte passion pour le <strong>design</strong>, l'<strong>UX</strong> et l'<strong>UI</strong>.</p> <br /> 
                    <p>J'ai suivi une formation de niveau bac+2 grâce à laquelle j'ai pu réaliser 7 projets divers et variés.</p> <br />

                    <p id="alternance">Je suis actuellement à la recherche d'une <strong>alternance</strong> pour la rentrée de <strong>septembre 2024</strong>.</p> <br />
                    <p>Je suis très motivée à approfondir mes connaissances tout en travaillant sur des projets concrets.</p> <br />

                    <p id="alternanceBis">Si vous êtes intéressé par mon profil, n'hésitez pas à <a href="mailto:julielausecker@gmail.com?subject=Demande d'information&body=Bonjour Julie ! J'aimerais avoir plus d'informations sur...">me contacter</a>, je serai ravie de discuter avec vous !</p>
                </div>

                <div className="skills">
                    <div className="ligne1">
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                    </div>
                    <div className="ligne2">
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                    </div>
                    <div className="ligne3">
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                        <img src={js} alt="" />
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
};

export default Parallax1;