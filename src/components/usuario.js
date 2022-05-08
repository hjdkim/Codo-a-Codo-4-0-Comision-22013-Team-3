// Componente de perfil de usuario

import React from "react";

export default class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        type: "",
        level: "",
        name: "",
        username: "",
        email: "",
        photo: "",
        address: "",
      },
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-photo">
            <img src={this.state.user.photo} alt="profile" />
          </div>
          <div className="profile-header-info">
            <div className="profile-header-info-name">
              {this.state.user.name}
            </div>
            <div className="profile-header-info-username">
              @{this.state.user.username}
            </div>
            <div className="profile-header-type">{this.state.user.type}</div>
            <div className="profile-header-level">{this.state.user.level}</div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-body-info">
            <div className="profile-body-info-email">
              {this.state.user.email}
            </div>
            <div className="profile-body-info-address">
              {this.state.user.address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
