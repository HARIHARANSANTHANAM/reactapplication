import React, { Component } from "react";
import { Button } from "reactstrap";
import "../style/navbar.css";
class Footer extends Component {
  render() {
    return (
      <div className="footerbox">
        <footer className="footer-bs" style={{ margin: 0 }}>
          <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
              <h2>Tasty Restaurent</h2>
              <p>
                Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
                porttitor vitae orci nec ultricies. Curabitur vehicula, libero
                eget faucibus faucibus, purus erat eleifend enim, porta
                pellentesque ex mi ut sem.
              </p>
              <p>© 2014 BS3 UI Kit, All rights reserved</p>
            </div>
            <div className="col-md-4 footer-nav animated fadeInUp">
              <h4>Menu —</h4>
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list" />
              </div>
            </div>
            <div className="col-md-2 footer-social animated fadeInDown">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">RSS</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <p>
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
