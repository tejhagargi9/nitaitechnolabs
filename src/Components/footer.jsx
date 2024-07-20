import React from "react";
import "@/Styles/footer.css";

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="footer-widgets section-padding">
        <div className="footer-container">
          <div className="row">
            <div
              className="footer-column widget-area"
              id="footer-1"
              role="complementary"
            >
              <aside className="widget widget_custom_html">
                <h3 className="widget-title">
                  About NITAI TECHNOLOGICAL TRAINING INSTITUTE
                </h3>
                <div className="textwidget custom-html-widget">
                  Our mission is to equip candidates with comprehensive
                  knowledge and practical experience in various software
                  technologies. We strive to bridge the gap between theoretical
                  knowledge and real-world applications, empowering individuals
                  to meet the demands of the industry.
                </div>
              </aside>
            </div>
            <div
              className="footer-column widget-area"
              id="footer-2"
              role="complementary"
            >
              <aside className="widget widget_text">
                <h3 className="widget-title">Company Office</h3>
                <div className="textwidget">
                  <div className="contact-info-item">
                    <div className="contact-text">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-value">
                      <p>
                        Ramnagar, 1st main, 7th Cross, Odugoudar Building
                        Dharwad KA IN 580001
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-text">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="contact-value">
                      <a href="mailto:enquiry@nitaitechnolabs.in">
                        enquiry@nitaitechnolabs.in
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-text">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-value">
                      <a href="tel:08362442285">08362442285</a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div
              className="footer-column widget-area"
              id="footer-3"
              role="complementary"
            >
              <aside className="widget widget_text">
                <h3 className="widget-title">Business Hours</h3>
                <div className="textwidget">
                  <div>
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </div>
                  <br />
                  <ul className="hours">
                    <li>
                      Monday-Friday: <span>9am to 5pm</span>
                    </li>
                    <li>
                      Saturday: <span>10am to 2pm</span>
                    </li>
                    <li>
                      Sunday: <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="site-info">
        <div className="footer-container">
          <div className="site-copyright">
            Copyright © 2024 NITAI TECHNOLOGICAL TRAINING INSTITUTE. All Rights
            Reserved.
          </div>
          <div className="theme-info">
            <a href="https://www.famethemes.com/themes/screenr">
              Screenr parallax theme
            </a>{" "}
            by FameThemes
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
