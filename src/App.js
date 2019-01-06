import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Carousel from "./body/topcarousel/carousel";
import Category from "./body/category/category";
import Deal from "./body/hotdeal/hotdeal";
import Search from "./body/search/search";

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
        <div className="bg-warning" style={divStyle}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 mr-0">
                <Carousel />
              </div>
              <div className="col-6 col-md-4 ml-0">
                <Search />
              </div>
            </div>
          </div>
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
