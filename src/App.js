import React, { Component } from "react";
import "./App.css";
import Headernav from "./header/header";
import Nav from "./header/nav";
import Footer from "./footer";
import Carousel from "./body/topcarousel/carousel";
import Category from "./body/category/category";
import Deal from "./body/hotdeal/hotdeal";
// import Search from "./body/search/search";
import Inspire from "./body/inspire/inspire";
import Partner from "./body/partner/partner";
import Why from "./body/partner/whybangunin";

const divStyle = {
  top: "10px",
  maxWidth: "100%",
  height: "520px"
};

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Headernav />
        </div>
        <div>
          <Category />
        </div>
        <div className="bg-warning mt-2" style={divStyle}>
          <div className="container">
            <Carousel />

            {/* <div className="col-6 col-md-4 ml-0">
                <Search />
              </div> */}
          </div>
        </div>
        <div>
          <Deal />
        </div>
        <div>
          <Inspire />
        </div>
        <div>
          <Partner />
        </div>
        <div class="mb-5">
          <Why />
        </div>
        <div class="pt-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
