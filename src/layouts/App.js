import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">Strona SPA</div>
      </Router>
    );
  }
}

export default App;
