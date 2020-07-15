import React from "react";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
