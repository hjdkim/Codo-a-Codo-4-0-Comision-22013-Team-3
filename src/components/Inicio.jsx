import React from 'react'
import { useEffect, useRef } from 'react'
import Km from './Km'
import Logins from './Logins'
import gsap from 'gsap'

const Inicio = () => {

  return (
    <div className="content-fluid mt-5">

        <div className="row">

            <div className="col-md-4">

                <div className="content">
                    <img className="logogrande" src="images/logogrande.png" alt="" width="490px" height="550px" />
                </div>
            </div>
            <div className="col-md-8">

                <div className="container">
                    <Km/>
                    <Logins/>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Inicio