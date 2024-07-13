import React from 'react';
import { useEffect, useState, useTransition } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import '../src/app.scss';

// import * as THREE from 'three';
// import FOG from 'vanta/dist/vanta.fog.min';

/********** Composants **********/
import Loader from "./components/loader/Loader";
import Accueil from "./components/accueil/Accueil";
import Navbar from "./components/navbar/Navbar";
import Parallax1 from './components/parallax/Parallax1';
import Parallax2 from './components/parallax/Parallax2';
import APropos from "./components/a_propos/APropos";



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
    <AnimatePresence initial={false}>

      {isPending || isLoading ? ( <Loader setIsLoading={setIsLoading} /> ) : 
      (

        <motion.div>
        
          <Navbar />

          <section id='Accueil'>
            <Accueil />
          </section>
          
          <section id="À propos">
            <Parallax1 />
          </section>

          <section>
            <APropos />
          </section>

          <section id="Portfolio">
            <Parallax2 />
          </section> {/* TODO: à voir si on garde */}
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