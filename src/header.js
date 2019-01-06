import React from "react";

class Headernav extends React.Component {
  render() {
    const navLogo = {
      top: "4px"
    };
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
      }
    };

    const dropPosition = {
      height: "350px",
      width: "350px"
    };
    const input = {
      width: "270px"
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container">
          <a style={social.setWidthNav} href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/bangunin-nav-logo.png?alt=media&token=a17a62b8-b9a1-40c6-9482-237094c6a38c"
              style={social.setWidth}
              alt=" "
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
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
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                  style={dropPosition}
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
                        <i class="fa fa-facebook" /> Facebook
                      </button>
                      <button type="button" className="btn btn-info">
                        <i class="fa fa-twitter" /> Twitter
                      </button>
                    </div>
                    <hr />
                    <div className="text-warning">
                      <b>or</b>
                    </div>
                    <div className="form-group" style={input}>
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Username"
                        required="required"
                      />
                    </div>
                    <div className="form-group" style={input}>
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
                <span
                  className="nav-link fa fa-user text-warning"
                  style={navLogo}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Headernav;
