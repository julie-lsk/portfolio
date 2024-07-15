import React from 'react';
import { useEffect, useState, useTransition } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import '../src/app.scss';


/********** Composants **********/
import Loader from "./components/loader/Loader";
import Accueil from "./components/accueil/Accueil";
import Navbar from "./components/navbar/Navbar";
import APropos from './components/a_propos/APropos';
import Portfolio from "./components/projects/Portfolio";



function App() 
{
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, []);
    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence>

      {isPending || isLoading ? ( <Loader setIsLoading={setIsLoading} /> ) : 
      (

        <motion.div>
        
          <Navbar />

          <section id='Accueil'>
            <Accueil />
          </section>
          
          <section id="À propos">
            <APropos />
          </section>

          <section>
            <Portfolio />
          </section>

          <section id="Portfolio">
          </section>
          <section>Portfolio1</section>
          <section>Portfolio2</section>
          <section>Portfolio3</section>
          <section id='Contact'>Contact</section>
          
        </motion.div>

      )}

    </AnimatePresence>

  )
};

export default App;