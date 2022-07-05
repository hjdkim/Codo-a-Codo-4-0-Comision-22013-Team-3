import React from 'react'

const IniciarPedido = () => {

  return (
    <div>
        <form className='mb-5'>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nombre">Nombre y apellido destinatario</label>
        <input type="text" class="form-control" id="nombre" placeholder="Nombre"/>
      </div>
      <div class="form-group col-md-6">
        <label for="dni">DNI</label>
        <input type="number" class="form-control" id="dni" placeholder="DNI"/>
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Dirección</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Almagro 307"/>
    </div>
    <div class="form-group">
      <label for="inputAddress2">Detalles de dirección</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Entre junin y maipu, Departamento con ventana roja"/>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">Localidad</label>
        <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">Provincia</label>
        <select id="inputState" class="form-control">
          <option selected>Elige una opción...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Código Postal</label>
        <input type="text" class="form-control" id="inputZip"/>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
        <label class="form-check-label mb-2" for="gridCheck">
          He leído y estoy de acuerdo con realizar el pedido entendiendo que la información que he suministrador es verdadera y correcta, según mi conocimiento.
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-success">Crear</button>
  </form>
  </div>
  )
}

export default IniciarPedido