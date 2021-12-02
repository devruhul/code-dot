import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faLaptopCode} />;
const Footer = () => {
  return (
    <div className="footer-body text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-start">
            <div className="logo-footer mb-3">
              <a class="navbar-brand text-warning fw-bold " href="/home">
                {element} Code Dot
              </a>
            </div>
            <p>
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>
            <div className="social-link">
              <a className="text-warning" href="/facebook">
                Facebook
              </a>
              <a className="text-warning" href="/facebook">
                LinkedIn
              </a>
              <a className="text-warning" href="/facebook">
                Twitter
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Courses</h3>
            <div className="cources-item">
              <a href="/web">Web Design</a>
              <a href="/javascript">Javascript</a>
              <a href="/react">React</a>
              <a href="/webdev">Web Development</a>
              <a href="/python">Python</a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Subscribe to our newsletter</h3>
            <input
              type="text"
              className="form-control "
              placeholder="Enter Your Enail Address"
            />
            <button className="btn btn-primary mt-3">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="copyright p-2 bg-secondary">
        <p>
          Copyright &copy; ALl Rights Resered{" "}
          <span className="text-warning">Code Dot</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
