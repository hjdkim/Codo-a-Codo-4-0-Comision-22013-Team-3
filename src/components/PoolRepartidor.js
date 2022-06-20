import React from "react";

export default class PoolRepartidor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendiente: false,
      origen: this.barrios[Math.floor(Math.random() * this.barrios.length)],
      destino: this.barrios[Math.floor(Math.random() * this.barrios.length)],
      peso: Math.floor(Math.random() * 25),
    };
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
  }

  barrios = [
    "Agronomía",
    "Almagro",
    "Balvanera",
    "Barracas",
    "Belgrano",
    "Boedo",
    "Caballito",
    "Chacarita",
    "Coghlan",
    "Colegiales",
    "Constitución",
    "Flores",
    "Floresta",
    "La Boca",
    "La Paternal",
    "Liniers",
    "Mataderos",
    "Monte Castro",
    "Montserrat",
    "Nueva Pompeya",
    "Núñez",
    "Palermo",
    "Parque Avellaneda",
    "Parque Chacabuco",
    "Parque Chas",
    "Parque Patricios",
    "Puerto Madero",
    "Recoleta",
    "Retiro",
    "Saavedra",
    "San Critóbal",
    "San Nicolás",
    "San Telmo",
    "Versalles",
    "Villa Crespo",
    "Villa Devoto",
    "Villa General Mitre",
    "Villa Lugano",
    "Villa Luro",
    "Villa Ortúzar",
    "Villa Pueyrredón",
    "Villa Real",
    "Villa Riachuelo",
    "Villa Santa Rita",
    "Villa Soldati",
    "Villa Urquiza",
    "Villa del Parque",
    "Vélez Sarsfield",
  ];

  handleYes() {
    this.setState((state) => ({
      pendiente: true,
      origen: this.state.origen,
      destino: this.state.destino,
      peso: this.state.peso,
    }));
  }

  handleNo() {
    this.setState({
      pendiente: false,
      origen: this.barrios[Math.floor(Math.random() * this.barrios.length)],
      destino: this.barrios[Math.floor(Math.random() * this.barrios.length)],
      peso: Math.floor(Math.random() * 25),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card mx-auto" style={{ width: "18rem" }}>
          {this.state.pendiente ? (
            <div className="card-body">
              <h5 classNazme="card-title">Ud. tiene un pedido pendiente</h5>
              <DatoReparto
                className="card-text"
                origen={this.state.origen}
                destino={this.state.destino}
                peso={this.state.peso}
              />
              <button
                type="button"
                className="btn btn-danger m-2 p-2"
                onClick={this.handleNo}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <div className="card-body">
              <h5 classNazme="card-title">
                Quiere aceptar el siguiente pedido?
              </h5>
              <DatoReparto
                className="card-text"
                origen={this.state.origen}
                destino={this.state.destino}
                peso={this.state.peso}
              />
              <button
                type="button"
                className="btn btn-success m-2 p-2"
                onClick={this.handleYes}
              >
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleNo}
              >
                Rechazar
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class DatoReparto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="origen">Origen: {this.props.origen}</div>
        <div className="destino">Destino: {this.props.destino}</div>
        <div className="peso">Peso: {this.props.peso} kg</div>
      </div>
    );
  }
}
