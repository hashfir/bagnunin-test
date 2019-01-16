import React from "react";

class Deal extends React.Component {
  render() {
    return (
      <div className="border shadow-lg container bg-gray pb-2 mt-2 pl-0 pr-0">
        <div class="container">
          <h2>Hot Deal</h2>
          <div class="row">
            <div class="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/1_y6C4nSvy2Woe0m7bWEn4BA.png?alt=media&token=7ef93357-b24c-43cd-9005-742b45dab190"
                  alt=" "
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

export default Deal;
