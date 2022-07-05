import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logins from "./components/Logins";
import Inicio from "./components/Inicio";
import React from "react";
import PoolRepartidor from "./components/PoolRepartidor";
import Admin from "./components/Admin";
import Choose from "./components/Choose";
import { useState } from "react";

function App() {
  const [usuariog, setUsuariog] = useState(false);
  return (
    <div className="container-fluid h-100">
      <BrowserRouter>
        <Navbar usuario={usuariog}></Navbar>

        <Routes>
          <Route index element={<Inicio setUsuariog={setUsuariog}/>} />
          <Route path="/login" element={<Logins />} />
          <Route path="/crear" element={<Choose/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
