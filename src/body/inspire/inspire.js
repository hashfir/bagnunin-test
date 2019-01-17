import React from "react";

class Inspire extends React.Component {
  render() {
    const imgStyle = {
      width: "363px",
      height: "600px"
    };
    return (
      <div className="border shadow-lg container pb-2 mt-5 pl-0 pr-0">
        <div class="container">
          <h2>Inspirasi Design</h2>
          <div class="row">
            <div class="col-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire1.jpg?alt=media&token=f8ee9f6b-05d7-40e7-9af5-bd4c310f1bf2"
                  alt=" "
                  style={imgStyle}
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">cet kuas</h5>
                  <p class="card-text">test</p>
                </div>
              </div>
            </div>
            <div class="col-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire2.jpg?alt=media&token=e0e39d39-e831-4214-b5e6-8cd80ac3352c"
                  alt=" "
                  style={imgStyle}
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">cet kuas</h5>
                  <p class="card-text">test</p>
                </div>
              </div>
            </div>
            <div class="col-4 pr-0">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/inspire3.jpg?alt=media&token=636a03df-b5a6-41f0-b7ea-8da1d2fcef1e"
                  alt=" "
                  style={imgStyle}
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">cet kuas</h5>
                  <p class="card-text">test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inspire;
