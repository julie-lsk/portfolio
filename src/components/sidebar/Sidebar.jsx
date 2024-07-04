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
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(40px at 310px 80px)", /* créé le cercle du menu burger */
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
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

            <ToggleButton setOpen={setOpen}/>

        </motion.div>
    )
};

export default Sidebar;