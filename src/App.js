import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      btn: "Vai",
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.btn = "Vai";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.btn = "Pausar";
    }

    this.setState(state);
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.btn = "Vai";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={require("./assets/cronometro.png")} />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.vai}>
            {this.state.btn}
          </a>
          <a className="btn" onClick={this.limpar}>
            Limpar
          </a>
        </div>
      </div>
    );
  }
}

export default App;
