import {motion} from "framer-motion";

function ToggleButton({setOpen})
{
    return (
        <button onClick={() => setOpen(prev => !prev)}> {/* fera l'inverse de l'état actuel */}
            <svg width="23" height="24" viewBox="0 0 20 20">
                <motion.path 
                    strokeWidth="3" 
                    stroke="black" 
                    strokeLinecap="round" 
                    variants={{
                        closed: {d: "M 2 2.5 L 20 2.5"}, 
                        open: {d: "M 3 16.5 L 17 2.5"},
                    }}>
                </motion.path>
                <motion.path 
                    strokeWidth="3" 
                    stroke="black" 
                    strokeLinecap="round" 
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: {opacity: 1}, 
                        open: {opacity: 0},
                    }}>
                </motion.path>
                <motion.path 
                    strokeWidth="3" 
                    stroke="black" 
                    strokeLinecap="round" 
                    variants={{
                        closed: {d: "M 2 16.346 L 20 16.346"}, 
                        open: {d: "M 3 2.5 L 17 16.346"},
                    }}>
                </motion.path>
            </svg>
        </button>
    )
}

export default ToggleButton;