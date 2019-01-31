import React from "react";
import "./header.css";

class Headernav extends React.Component {
  render() {
    const social = {
      button: {
        marginRight: "10px"
      },
      setWidth: {
        width: "160px",
        marginTop: "-10px"
      },
      setWidthNav: {
        width: "160px"
      },
      setWidthSearch: {
        width: "500px"
      }
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-3">
        <div className="container">
          <a style={social.setWidthNav} href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/bangunin-nav-logo.png?alt=media&token=a17a62b8-b9a1-40c6-9482-237094c6a38c"
              style={social.setWidth}
              alt=" "
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText1"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarText1">
            <ul className="navbar-nav mr-auto">
              <li>
                <form class="form-inline pl-5">
                  <input
                    class="form-control border-warning"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={social.setWidthSearch}
                  />
                  <span class="input-group-append">
                    <button class="btn btn-outline-warning" type="button">
                      <i class="fa fa-search" />
                    </button>
                  </span>
                </form>
              </li>
              <li className="nav-item ml-3">
                <button className="btn btn-warning ">
                  <i class="fas fa-truck">kirim ke?</i>
                </button>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link border border-warning dropdown-toggle text-warning"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </a>
                <div
                  className="dropPosition dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <p class="hint-text text-light">
                      Sign in with your social media account
                    </p>
                    <div className="btn-toolbar">
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={social.button}
                      >
                        <i class="fab fa-facebook-f mr-1" />
                        Facebook
                      </button>
                      <button type="button" className="btn btn-info">
                        <i class="fab fa-twitter mr-1" /> Twitter
                      </button>
                    </div>
                    <hr />
                    <div className="text-warning">
                      <b>or</b>
                    </div>
                    <div className="input form-group">
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Username"
                        required="required"
                      />
                    </div>
                    <div className="input form-group">
                      <input
                        type="password"
                        className="form-control input-sm"
                        placeholder="Password"
                        required="required"
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-warning"
                      value="Login"
                    />
                    <div className="form-footer">
                      <span>Forgot Your password?</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <span className=" navLogo nav-link fa fa-user text-warning" />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Headernav;
