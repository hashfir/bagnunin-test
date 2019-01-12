import React, { Component } from "react";
import "./App.css";
import Headernav from "./header/header";
import Nav from "./header/nav";
import Carousel from "./body/topcarousel/carousel";
import Category from "./body/category/category";
import Deal from "./body/hotdeal/hotdeal";
import Search from "./body/search/search";

const divStyle = {
  top: "10px",
  maxWidth: "100%",
  height: "520px"
};
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Headernav />
        </div>
        <div>
          <Category />
        </div>
        <div className="bg-warning mt-5" style={divStyle}>
          <div className="container">
            <Carousel />

            {/* <div className="col-6 col-md-4 ml-0">
                <Search />
              </div> */}
          </div>
        </div>

        <div className="top">
          <Deal />
        </div>
      </div>
    );
  }
}

export default App;
