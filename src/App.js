import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logins from "./components/Logins";
import Inicio from "./components/Inicio";
import React from 'react'
import Admin from "./components/Admin";

function App() {
  return (
    <div className="container-fluid">

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>

          <Route index element={<Inicio/>}/>
          <Route path="/login" element={<Logins/>}/>
          <Route path="/admin" element={<Admin/>}/>

        </Routes>


      </BrowserRouter>
      
    </div>
  );
}

export default App;
