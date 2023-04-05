/** @format */

import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import img from "./images/bg-header-mobile.svg";

function App() {
  return (
    <div className="App">
      <img className="header-img mb-5" src={img} alt="" />
      <Home />
    </div>
  );
}

export default App;
