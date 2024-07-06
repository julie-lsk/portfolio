import {motion} from "framer-motion";


const variants = {
    open: {
        transition: {
            staggerChildren: 0.3 /* effet cascade : chaque item enfant de la div vont apparaitre un à un tous les 0.3s */
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05, /* effet cascade : chaque item enfant de la div vont apparaitre un à un tous les 0.05s (+ rapide) */
            staggerDirection: -1, /* ordre de disparition des enfants inversé : dernier, avant-dernier... */
        }
    }
}


const itemsVariants = {
    open: {
        y: 0, /* quand ouvert = pas de décalage */
        opacity: 1, 
    },
    closed: {
        y: 50, /* déplace les items de 50px vers le bas sur l'axe Y (par rapport à position d'origine = 0) */
        opacity: 0,
    }
}


function Links()
{
    const items = ["Accueil", "À propos","Portfolio","Contact"];

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.a 
                    href={`#${item}`} 
                    key={item}
                    variants={itemsVariants}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links;