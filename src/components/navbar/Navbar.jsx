import {motion} from 'framer-motion';
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";


function Navbar()
{
    return (
        <header className="navbar">

            <motion.div 
                className="logo"
                animate={{rotate: 360}}
                transition={{duration: 7, ease: "linear", repeat: Infinity}}>
            </motion.div>

            <Sidebar />

        </header>
    )
};

export default Navbar;