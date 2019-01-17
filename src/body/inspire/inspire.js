import React from "react";
import "../body.css";

class Inspire extends React.Component {
  render() {
    const imgStyle = {
      width: "363px",
      height: "600px"
    };
    return (
      <div className="border shadow-lg container pb-2 mt-5 pl-0 pr-4">
        <div class="container">
          <div class="d-flex">
            <h2 class="mt-3 mb-3">Inspirasi Design</h2>
            <a href="/" class="ml-auto p-2 textLink mt-2">
              See More...
            </a>
          </div>
          <div class="row">
            <div class="col-md-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire1.jpg?alt=media&token=f8ee9f6b-05d7-40e7-9af5-bd4c310f1bf2"
                  alt=" "
                  style={imgStyle}
                />
              </div>
            </div>
            <div class="col-md-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire2.jpg?alt=media&token=e0e39d39-e831-4214-b5e6-8cd80ac3352c"
                  alt=" "
                  style={imgStyle}
                />
              </div>
            </div>
            <div class="col-md-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire3.jpg?alt=media&token=636a03df-b5a6-41f0-b7ea-8da1d2fcef1e"
                  alt=" "
                  style={imgStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inspire;
