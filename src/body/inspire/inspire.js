import React from "react";

class Inspire extends React.Component {
  render() {
    const imgStyle = {
      width: "347px",
      height: "600px"
    };
    return (
      <div className="border shadow-lg container pb-2 mt-5 pl-0 pr-0">
        <div class="container">
          <h2>Inspirasi Design</h2>
          <div class="row">
            <div class="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/apartment-architecture-chair-892618.jpg?alt=media&token=f03f7f3e-536d-42f4-95d5-eaa7d3460251"
                  alt=" "
                  style={imgStyle}
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">cet kuas</h5>
                  <p class="card-text">test</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/1_y6C4nSvy2Woe0m7bWEn4BA.png?alt=media&token=7ef93357-b24c-43cd-9005-742b45dab190"
                  alt=" "
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">cet</h5>
                  <p class="card-text">test</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/1_y6C4nSvy2Woe0m7bWEn4BA.png?alt=media&token=7ef93357-b24c-43cd-9005-742b45dab190"
                  alt=" "
                />
                <div class="card-body bg-warning">
                  <h5 class="card-title">paku</h5>
                  <p class="card-text">cc</p>
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
