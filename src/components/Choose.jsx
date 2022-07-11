import React from 'react'
import IniciarPedido from './IniciarPedido'
import PoolRepartidor from './PoolRepartidor'
import { useState } from 'react'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';

const Choose = () => {

    const [crear, setCrear] = useState(false);
    const [realizar, setRealizar] = useState(false);

    const el = useRef();
    const q = gsap.utils.selector(el);

    useLayoutEffect(() => {
        gsap.fromTo(q(".row"), {
        opacity: 0
        }, {
        opacity: 1,
        duration: 2.2,
        stagger: 0.2
        });
    }, []);

  return (
    <div className='row d-flex align-items-center justify-content-center h-100 flex-column' ref={el}>

        <div className="col12 d-flex justify-content-center align-items-center flex-column"><h2 className='mb-5'>Elige lo que deseas:</h2>
        <div className="row w-100">
        <div className='col-12 d-flex justify-content-center'>
            <div className='col-6 d-flex justify-content-center'>
                <div className='row d-flex justify-content-center flex-column'>
                    <h6 className='text-center'>CREAR un PEDIDO</h6>
                    <button class="btn btn-default" onClick={() => setCrear(!crear)}>
                        <img src='images/undraw_social_influencer_re_beim.svg' width='200px' height="200px"></img>
                    </button>
                </div>
            <div className='col-6 d-flex justify-content-center ml-5'>
                <div className='row d-flex justify-content-center flex-column'>
                    <h6 className='text-center'>REPARTIR un PEDIDO</h6>
                    <button class="btn btn-default" onClick={() => setRealizar(!realizar)}>
                        <img src='images/undraw_bike_ride_7xit.svg' width='200px' height="200px"></img>
                    </button>
                </div>
                    
            </div>
        </div>

    </div>
        </div>
        </div>
        <div className="row w-75 mt-5">
            { crear == true ? 
                (<IniciarPedido />):('')
            }
        </div>

        <div className="row w-75 mt-5">
            { realizar == true ? 
                (<PoolRepartidor />):('')
            }
        </div>
    </div>
  )
}

export default Choose