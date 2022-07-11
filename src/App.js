import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logins from "./components/Logins";
import Inicio from "./components/Inicio";
import React from "react";
import PoolRepartidor from "./components/PoolRepartidor";
import Admin from "./components/Admin";
import Choose from "./components/Choose";
import { useState } from "react";
import Nosotros from './components/Nosotros';
import Preguntas from './components/Preguntas';
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useRef } from 'react';

function App() {
  const [usuariog, setUsuariog] = useState(false);

  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    gsap.fromTo(q(".row"), {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      stagger: 0.2
    });
  }, []);


  return (
    <div className="container-fluid h-100">
      <BrowserRouter>
        <Navbar usuario={usuariog}></Navbar>

        <Routes>
          <Route index element={<Inicio ref={el} setUsuariog={setUsuariog}/>} />
          <Route path="/login" element={<Logins />} />
          <Route path="/crear" element={<Choose/>}/>
          <Route path="/nosotros" element={<Nosotros />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
