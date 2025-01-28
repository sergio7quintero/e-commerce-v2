import React from "react";
import "./footer.css"; // Import your footer styles
import logo from "../../images/yuyilogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="wrapper">
          <div className="footer-widget">
            <a href="#">
              <img src={logo} className="yuyiLogo" alt="Yuyi Logo" />
            </a>
            <p className="desc">
              Serving our customers since 2017 from all across the country, Yuyi
              Kicks is the #1 place to buy sneakers.
            </p>
            <ul className="socials">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-tiktok"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Quick Links</h6>
            <ul className="links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Support</h6>
            <ul className="links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="contact.html#faq">FAQ</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>
            Created and Designed by
            <a
              href="https://www.linkedin.com/in/sergio7quintero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Sergio Quintero
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
