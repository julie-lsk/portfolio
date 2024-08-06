import { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import './sidebar.scss';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';



function Sidebar()
{
    const [open, setOpen] = useState(false);
    // const [isDesktop, setIsDesktop] = useState(false);

    // useEffect(() =>
    // {
    //     const checkScreenSize = () =>
    //     {
    //         setIsDesktop(window.innerWidth <= 1366);
    //     };

    //     checkScreenSize();
    //     window.addEventListener('resize', checkScreenSize);

    //     return () => window.removeEventListener('resize', checkScreenSize)
    // }, []);

    return (
        <>
            <motion.div className={`sidebar ${open ? "open" : ""}`}> 

                <div className="background-expand"></div>
                
                <Links />

            </motion.div>

            <ToggleButton setOpen={setOpen} open={open} />
  
        </>
    )
};

export default Sidebar;