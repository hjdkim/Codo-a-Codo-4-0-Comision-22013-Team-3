import React, { useEffect } from 'react'
import { useState } from 'react'
import {firebase} from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Login = (props) => {

  const location = useLocation();
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null)

  const [registro, setRegistro] = useState(true)

  useEffect(() => {

    try {

      setError(location.state.error)
      
    } catch (error) {
      
    }
    

  }, [])

  

  const procesarDatos = e=>{

      e.preventDefault();

      if(!email.trim()){

        setError('Mail vacío');
        return

      }

      if(!password.trim() && password.length < 6){

        setError('Password vacío o tiene menos de 6 caracteres')
        return

      }



      setError(null);

      if(registro){

        registrar();

      }else{
        loguear();
      }

  }

  const registrar = async() => {

    try{
      const auth = getAuth(firebase);
      const db = getFirestore(firebase);
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const data = {
        email: res.user.email,
        uid: res.user.uid
      };

      const uid = res.user.uid;
      console.log(uid)
      
      // Add a new document in collection "cities" with ID 'LA'
      const res2 = await setDoc(doc(db, "Users", uid), {
        data
      });
      
      setEmail('');
      setError(null);
      setPassword('');
    }
    catch(error) {
    
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)

      if(errorMessage == 'Firebase: Error (auth/invalid-email).'){

        setError('Mail inválido')

      }else if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){

        setError('El usuario ya está registrado o en uso')

      }

      console.log(errorMessage)
    
    }


  }

  const loguear = async() =>{

    try{

      const auth = getAuth(firebase);
      const logueo = await signInWithEmailAndPassword(auth, email, password)

      console.log(logueo.user)

      setEmail('');
      setError(null);
      setPassword('');

      const user = logueo.user.email;

      //navigate('/admin',{state:{email:user}});

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)

        if(errorMessage == 'Firebase: Error (auth/user-not-found).'){
          setError('El mail no coincide con un usuario registrado')
        }else{
          setError('Contraseña incorrecta')
        }
    }

  }





  return (
    <div className='container'><h1>Login</h1>

      <div className="mt-5">

        <h3 className='text-center'>{ registro ? 'Registrarse':'Logueo'}</h3>

        <hr></hr>

        <div className="row justify-content-center">

            <div className="col-12 col-sm-8 col-md-6 col-xl-4">

              <form onSubmit={procesarDatos}>

                {error&&(<div className='alert alert-danger'>{error}</div>)}

                <input type="email"
                className='form-control mb-2'
                placeholder='Ingrese E-mail'
                onChange={e => setEmail(e.target.value)}
                value={email}></input>

                <input
                type='password'
                className='form-control mb-2'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}></input>

                <button className="btn btn-dark btn-lg btn-block m-2" type='submit'>{registro ? 'Registrarse' : 'Loguearse'}</button>
                <button onClick={() => setRegistro(!registro)} className="btn btn-info btn-lg btn-block m-2" type='button'>{registro ? 'Ya estoy registrado' : 'Deseo Registrarme' }</button>
              </form>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Login