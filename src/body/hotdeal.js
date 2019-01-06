import React from "react";

class Deal extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <hr />
          </div>
          <div class="col-auto text-dark">
            <h2>Hot Deal</h2>
          </div>
          <div class="col">
            <hr class="text-warning" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/1_y6C4nSvy2Woe0m7bWEn4BA.png?alt=media&token=7ef93357-b24c-43cd-9005-742b45dab190"
                alt="Card image cap"
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
                alt="Card image cap"
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
                alt="Card image cap"
              />
              <div class="card-body bg-warning">
                <h5 class="card-title">paku</h5>
                <p class="card-text">cc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deal;
