import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container-fluid'>

          <div className="row mt-2 mb-2">

            <div className="col">

              <div className="container">

                <img className='logonavbar' src="images/logotexto.png" alt="" width="170px" height="50px" />

              </div>
            </div>


            <div className="col">

                <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul class="navbar-nav text-right">
                      <li class="nav-item active">
                      <NavLink className="btn mr-2" to="/">Inicio</NavLink>
                      </li>
                      <li class="nav-item">
                      <NavLink className="btn mr-2" to="/nosotros">Nosotros</NavLink>
                      </li>
                      <li class="nav-item">
                      <NavLink className="btn mr-2" to="/preguntas">Preguntas</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>


            </div>

          </div>



          </div>
      )
}

export default Navbar