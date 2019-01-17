import React from "react";
import "../body.css";

class Deal extends React.Component {
  render() {
    return (
      <div className="border shadow-lg container pb-2 mt-2 pl-0 pr-0">
        <div class="container">
          <div class="d-flex">
            <h2 class="mt-3 mb-3">Hot Deal</h2>
            <a href="/" class="ml-auto p-2 textLink mt-2">
              See More...
            </a>
          </div>
          <div class="row">
            <div class="col-md">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/hot-deal.jpg?alt=media&token=c47bec8f-9dca-4eec-9b08-10225b7daaaa"
                  alt=" "
                />
                <div class="card-body cardbodyStyle bg-warning">
                  <h5 class="card-title">Toto Bathub White</h5>
                  <strike class=" text-muted">Rp 12.000.000</strike>
                  <h4 class="card-tex font-weight-bold text-dark">
                    Rp 5.000.000
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/Roll.jpg?alt=media&token=5e6a6f10-5849-4756-b9b5-b40c06b6512d"
                  alt=" "
                />
                <div class="card-body cardbodyStyle bg-warning">
                  <h5 class="card-title">Roll Brush</h5>
                  <strike class=" text-muted">Rp 12.000</strike>
                  <h4 class="card-tex font-weight-bold text-dark">Rp 5.000</h4>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/hot-deal.jpg?alt=media&token=c47bec8f-9dca-4eec-9b08-10225b7daaaa"
                  alt=" "
                />
                <div class="card-body cardbodyStyle bg-warning">
                  <h5 class="card-title">Toto Bathub White</h5>
                  <strike class=" text-muted">Rp 12.000.000</strike>
                  <h4 class="card-tex font-weight-bold text-dark">
                    Rp 5.000.000
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/hashfi-8f1e0.appspot.com/o/Roll.jpg?alt=media&token=5e6a6f10-5849-4756-b9b5-b40c06b6512d"
                  alt=" "
                />
                <div class="card-body cardbodyStyle bg-warning">
                  <h5 class="card-title">Roll Brush</h5>
                  <strike class=" text-muted">Rp 12.000</strike>
                  <h4 class="card-tex font-weight-bold text-dark">Rp 5.000</h4>
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
