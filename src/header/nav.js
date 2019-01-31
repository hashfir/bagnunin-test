import React from "react";
import "./header.css";

class Nav extends React.Component {
  render() {
    const znav = {
      zIndex: 2
    };
    return (
      <nav
        class="navbar navbar-expand-sm navbar-dark bg-dark setNavHeight"
        style={znav}
      >
        <div className="container">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-warning pl-0" href="/">
                <i class="fas fa-question-circle" />
                Bantuan | Follow us on <span class="sr-only">(current)</span>
              </a>
            </li>
            <div class="collapse navbar-collapse">
              <li class="nav-item ">
                <a class="nav-link text-warning pl-1 pr-1" href="/">
                  <i class="fab fa-facebook-f" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning pl-1" href="/">
                  <i class="fab fa-instagram" />
                </a>
              </li>
            </div>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item bg-dark">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-warning mr-1 mb-"
                >
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-sm btn-warning">
                  register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
