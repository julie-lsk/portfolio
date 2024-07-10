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



/********** Animation Vanta - background **********/
// const VantaAnimation = () => {
//   const [vantaEffect, setVantaEffect] = useState(null)
  
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(FOG({
//         el: "#vanta",
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,

//         // Rouge : 
//         // highlightColor: 0xcf1d1d,
//         // midtoneColor: 0xac052d,
//         // lowlightColor: 0xc70202,
//         // baseColor: 0x680128,

//         // Bleu :
//         highlightColor: 0xb6edda,
//         midtoneColor: 0x67d2aa,
//         lowlightColor: 0xbeffde,
//         baseColor: 0x4b9aac,

//         blurFactor: 0.55,
//         zoom: 1.5,
//         speed: 1.1,
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect]) 

//   return (
//     <div id='vanta'></div>
//   )
// }



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

      {isPending || isLoading ? ( <Loader setIsLoading={setIsLoading}/> ) : 
      (

        <motion.div 
          /* initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100vw', opacity: 0 }}
          transition={{ duration: 1 }} */>
        
          <Navbar />

          <section id='Accueil'>
            <Accueil />
            {/* <VantaAnimation /> */}
          </section>
          
          <section id="À propos">
            <Parallax1 />
          </section>

          <section>
            À propos
          </section>

          <section id="Portfolio">
            <Parallax1 />
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