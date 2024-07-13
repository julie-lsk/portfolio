import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import "./parallax1.scss";


function Parallax1()
{
    const ref = useRef()

    /* Suit la progression du défilement vertical */
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["-300%", "800%"])

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    const xNuage1 = useTransform(scrollYProgress, [0, 1], [300, -12500]); 
    const xNuage2 = useTransform(scrollYProgress, [0, 1], [0, 8000]); 
    const xNuage3 = useTransform(scrollYProgress, [0, 1], [0, 13000]); 
    const yMoutains = useTransform(scrollYProgress, [0, 1], ["-45%", "350%"]);

    return (
        <div className="parallax1">

            <motion.h3 style={{y: yText}}>Qui suis-je ?</motion.h3>

            <motion.div style={{y: yMoutains}} className="montagne-1"></motion.div>
            {/* <motion.div style={{y: yMoutains}} className="montagne-2"></motion.div>
            <motion.div style={{y: yMoutains}} className="montagne-3"></motion.div> */}
            <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div>
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>

        </div>
    )
};

export default Parallax1;