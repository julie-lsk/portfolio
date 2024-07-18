import {motion} from 'framer-motion';
import "./contact.scss";


const variants = 
{
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}



function Contact()
{
    return (
        <motion.div variants={variants} className="contact" initial="initial" whileInView="animate">
            
            <motion.div variants={variants} className="text-container">

                <motion.h3 variants={variants}>Contactez-moi</motion.h3>

                <motion.div variants={variants} className="item">
                    <h4>Mail</h4>
                    <p>julielausecker@gmail.com</p>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h4>Téléphone</h4>
                    <p>06 52 92 47 71</p>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h4>Adresse</h4>
                    <p>67210 OBERNAI</p>
                </motion.div>

            </motion.div>


            <div className="form-container">
                <form>

                    <input type="text" name="" id="" placeholder="Nom" required />
                    <input type="text" name="" id="" placeholder="E-mail" required />
                    <textarea rows={8} placeholder="Votre message" />
                    <button>Envoyer</button>

                </form>
            </div>

        </motion.div>
    )
};

export default Contact;