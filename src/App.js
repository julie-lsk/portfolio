import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import '../src/app.scss';

import Accueil from "./pages/accueil/Accueil";
import Header from "./components/header/Header";


/********** Animation Vanta - background **********/
const VantaAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: "#vanta",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,

        // Rouge : 
        // highlightColor: 0xcf1d1d,
        // midtoneColor: 0xac052d,
        // lowlightColor: 0xc70202,
        // baseColor: 0x680128,

        // Bleu :
        highlightColor: 0xb6edda,
        midtoneColor: 0x67d2aa,
        lowlightColor: 0xbeffde,
        baseColor: 0x4b9aac,

        blurFactor: 0.53,
        zoom: 1,
        speed: 1.1,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]) 

  return (
    <div id='vanta'></div>
  )
}



function App() 
{
  return (
    <Router>

      <VantaAnimation />

      <Header />

      <Routes>
        <Route path="/" element={<Accueil />}></Route>
      </Routes>

      {/* <Footer /> */}

    </Router>
  );
}

export default App;