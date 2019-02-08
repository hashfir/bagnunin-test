import React from "react";
import "./header.css";

class Nav extends React.Component {
  render() {
    const znav = {
      zIndex: 2
    };
    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-dark">
        <div class="container">
          <div class="d-flex flex-row">
            <div class="p-2 nav-item active">
              <a class="nav-link text-warning mr-0 pr-0 pl-0" href="/">
                <i class="fas fa-question-circle" />
                Bantuan | Follow us on
              </a>
            </div>
            <div class="p-2 ml-0 nav-item active">
              <a class="nav-link text-warning pl-0 pr-1" href="/">
                <i class="fab fa-facebook-f" />
              </a>
            </div>
            <div class="p-2 nav-item active">
              <a class="nav-link text-warning pl-0" href="/">
                <i class="fab fa-instagram" />
              </a>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="ml-auto nav-item">
              <div class="d-flex navbar-nav">
                <div class="p-1 nav-item">
                  <button type="button" class="btn btn-sm btn-outline-warning">
                    Login
                  </button>
                </div>
                <div class="p-1 nav-item ">
                  <button type="button" class="btn btn-sm btn-warning">
                    register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
