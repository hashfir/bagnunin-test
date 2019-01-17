import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small bg-dark">
          <div class="footer-copyright text-center text-warning py-5">
            © 2018 Copyright:
            <a
              href="https://mdbootstrap.com/education/bootstrap/"
              class="text-warning"
            >
              {" "}
              Bangunin.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
