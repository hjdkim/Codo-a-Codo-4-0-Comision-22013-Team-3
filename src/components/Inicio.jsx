import React from 'react'
import { useEffect, useRef } from 'react'
import Km from './Km'
import Logins from './Logins'
import gsap from 'gsap'
import { useState } from 'react'
import { firebase } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import NavBarPanel from './NavBarPanel'

const Inicio = ({setUsuariog}) => {

    const [usuario, setUsuario] = useState(false)

    useEffect(()=>{

        const auth = getAuth(firebase);

        onAuthStateChanged(auth, (user) => {

            if(user){
                setUsuario(user);
                setUsuariog(user);
            }else{
                setUsuario(false);
                setUsuariog(null);
            }

        });

    }, []);

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
                    { usuario === false ? (<Logins/>):(<div className='d-flex justify-content-center mt-5'><button className='btn btn-success'><a class="text-white text-decoration-none display-4" href="crear">COMENZAR</a></button></div>)}
                </div>

            </div>

        </div>


    </div>
  )
}

export default Inicio