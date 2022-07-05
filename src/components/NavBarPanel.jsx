import React from 'react'

const NavBarPanel = (props) => {
  const usuario = props.usuariog;
  return (
      <div class="w-100">

        <nav class="navbar navbar-light">
            <div class="container">
          
              <ul class="navbar-nav">
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img alt="" src="https://picsum.photos/50/50" class="img-fluid rounded-circle mr-2 avatar"/>
                    <p className='h6'>{usuario.email}</p>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Mi perfil</a>
                    <a class="dropdown-item" href="#">Subscripción</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Cerrar sesión</a>
                  </div>
                </li>
              </ul>
              
            </div>
        </nav>


      </div>
  )
}

export default NavBarPanel