import React, { Component } from "react";
import "./styles.css";

class One extends Component {
  constructor() {
    super();
    this.state = {
      statename: "Krish State",
      counter: 1,
      color: "red",
      isShown: true
    };
  }

  myClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      statename: "Balu Mahaan State",
      color: "green",
      isShown: false
    });
  };

  render() {
    const { statename } = this.state;
    const { counter } = this.state;
    const { color } = this.state;
    const { name } = this.props;
    const { isShown } = this.state;

    const myStyle = {
      color: color
    };

    const myDStyle = {
      color: color,
      display: isShown ? "" : "none"
    };

    return (
      <div>
        <h3 style={myStyle} className="App">
          I'm from One: {statename} - {name}
        </h3>
        <p style={{ myDStyle }}> Showing this </p>
        <p>{counter}</p>

        <button onClick={this.myClick}>Click button</button>
      </div>
    );
  }
}

// function One(props) {
//   return <h2>props.name</h2>;
// }

export default One;
