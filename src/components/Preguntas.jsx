import React from 'react'

const Preguntas = () => {
  return (

    <div className="content-fluid mt-5">

        <div className="row">

            <div className="col-md-4">

                <div className="content">
                    <img className="logogrande" src="images/logogrande.png" alt="" width="490px" height="550px" />
                </div>
            </div>
            <div className="col-md-8">

                <div className='container w-75'>
                <ol>
        <li>
            ¿Cómo creo mi usuario?
        </li>
        <li>
            ¿Cómo subo de nivel?
            <i>Se sube de nivel cada 5 logros. Son 35 logros en total. Todos dependen de la distancia recorrida y de la frecuencia con la que se utiliza la aplicación. Se empieza siendo nivel 1 y el nivel máximo es 7.</i>
        </li>
        <li>
            ¿Qué pasa si no recibo mi producto?
            En caso de no recibir el producto se podrá calificar negativamente al repartidor.
        </li>
        <li>
            ¿Qué pasa si el repartidor no entrega mi producto?
            <i>Los repartidores se toman fotos con el vendedor entregando el producto cerrado, filman su viaje y se toman foto entregando el producto. Tanto el repartidor como el comprador y el vendedor podrán calificar como positivo, negativo o neutral. Las calificaciones son visibles desde el perfil publico de cada usuario.</i>
        </li>
        <li>¿Quién elige al repartidor?</li>
        <i></i>
        <li>¿Quién puede ver mi perfil?</li>
        <i>Todos puen comprar, vender y repartir con el mismo perfil, el cual es visible para todos los usuarios.</i>
        <li>¿Cuánta distancia hay que recorrer como mínimo?</li>
        <i>El recorrido se calcula en km siendo la distancia mínima 1km.</i>
        <li>¿Cuánta propina debo dejar?</li>
        <i>La propina es optativa, se puede dejar la cantidad que se desee, la cual puede contribuir al repartidor o al token por parte tanto del comprador como del vendedor.</i>
        <li>¿Dónde veo mi nivel y mis logros?</li>
        <i>Podrá acceder desde su perfil. Cada vez que obtenga un logro y suba de nivel verá una animación con su nueva insignia.</i>
        <li>¿Dónde publico un producto o busco uno?</li>
        <i>Se puede acceder desde la barra de búsqueda ubicada en la pantalla principal o desde la opción búsqueda avanzada ubicada debajo de la misma.</i>
    </ol>
    </div>

            </div>

        </div>


    </div>

  )
}

export default Preguntas