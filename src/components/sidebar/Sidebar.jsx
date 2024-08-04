import { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import './sidebar.scss';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';


const variants = 
{
    open: {
        clipPath: "circle(2500px at 50px 300px)",
        transition: {
            type: "spring", /* effet ressort */
            stiffness: 20, /* (20 = lent) --> rigidité : + la valeur est basse, plus l'effet ressort est souple */
        }
    },
    closed: {
        clipPath: "circle(39px at 326px 73.5px)", /* créé le cercle du menu burger */
        transition: {
            delay: 0.5, /* délai de transition après le clic */
            type: "spring", /* effet ressort */
            stiffness: 400, /* (400 = rapide) --> rigidité : + la valeur est haute, plus l'effet ressort est rigide */
            damping: 40, /* oscillation après effet ressort --> 40 (élevé) = se stabilise vite sans trop d'oscilaltions + si basse = ressort rebondit bcp */
        }
    }
};



function Sidebar()
{
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() =>
    {
        const checkScreenSize = () =>
        {
            setIsDesktop(window.innerWidth <= 1366);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize)
    }, []);

    return (
        <motion.div 
            className="sidebar"
            animate={open ? "open" : "closed"}
            > 
        
            <motion.div className="background" variants={/* isDesktop ? smallScreenVariants :  */variants}> {/* paramètre l'ouverture/fermeture de la sidebar selon div "sidebar" */}
                <Links />
            </motion.div>

            <ToggleButton setOpen={setOpen} open={open} />

        </motion.div>
    )
};

export default Sidebar;