import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Carousel from "./body/carousel";
import Category from "./body/category";
import Deal from "./body/hotdeal";

const divStyle = {
  top: "10px",
  maxWidth: "100%",
  height: "580px"
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container bg-warning" style={divStyle}>
          <Carousel />
        </div>
        <div>
          <Category />
        </div>
        <div className="top">
          <Deal />
        </div>
      </div>
    );
  }
}

export default App;
