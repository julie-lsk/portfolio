import { useState } from 'react';
import {motion} from "framer-motion";
import './sidebar.scss';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';


const variants = 
{
    open: {
        clipPath: "circle(1200px at 40px 800px)",
        transition: {
            type: "spring", /* effet ressort */
            stiffness: 20, /* (20 = lent) --> rigidité : + la valeur est basse, plus l'effet ressort est souple */
        }
    },
    closed: {
        clipPath: "circle(40px at 310px 80px)", /* créé le cercle du menu burger */
        position: "fixed", /* FIXME: */
        transition: {
            delay: 0.5, /* délai avant la transition */
            type: "spring", /* effet ressort */
            stiffness: 400, /* (400 = rapide) --> rigidité : + la valeur est haute, plus l'effet ressort est rigide */
            damping: 40, /* oscillation après effet ressort --> 40 (élevé) = se stabilise vite sans trop d'oscilaltions + si basse = ressort rebondit bcp */
        }
    }
};


function Sidebar()
{
    const [open, setOpen] = useState(false);

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}> 
        
            <motion.div className="background" variants={variants}> {/* paramètre l'ouverture/fermeture de la sidebar selon div "sidebar" */}
                <Links />
            </motion.div>

            <ToggleButton setOpen={setOpen} open={open}/>

        </motion.div>
    )
};

export default Sidebar;