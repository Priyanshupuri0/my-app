import React from "react";
import styles from "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="row r">
          <div className="col-md-4 text-center">
            <strong>Jobs by location</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">Jobs in Bangalore</a>
                </li>
                <li>
                  <a href="#">Jobs in Delhi / NCR</a>
                </li>
                <li>
                  <a href="#">Jobs in Hyderabad</a>
                </li>
                <li>
                  <a href="#">Jobs in Mumbai</a>
                </li>
                <li>
                  <a href="#">Jobs in Chennai</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <strong>Technology Jobs</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">Java Jobs</a>
                </li>
                <li>
                  <a href="#">Python Jobs</a>
                </li>
                <li>
                  <a href="#">PHP Jobs</a>
                </li>
                <li>
                  <a href="#">Software Testing Jobs</a>
                </li>
                <li>
                  <a href="#">Dot Net Jobs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <strong>Business and Design Jobs</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">Digital Marketing Jobs</a>
                </li>
                <li>
                  <a href="#">Graphic Design Jobs</a>
                </li>
                <li>
                  <a href="#">UI/UX Design Jobs</a>
                </li>
                <li>
                  <a href="#">Business Development Jobs</a>
                </li>
                <li>
                  <a href="#">Sales Jobs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <strong>Popular Collections</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">Internship in Bangalore</a>
                </li>
                <li>
                  <a href="#">Internship in Hyderabad</a>
                </li>
                <li>
                  <a href="#">Internship in Mumbai</a>
                </li>
                <li>
                  <a href="#">Internship in Chennai</a>
                </li>
                <li>
                  <a href="#">Internship in Delhi</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <strong>Top Companies Hiring</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">Amazon Jobs</a>
                </li>
                <li>
                  <a href="#">Flipkart Jobs</a>
                </li>
                <li>
                  <a href="#">Swiggy Jobs</a>
                </li>
                <li>
                  <a href="#">Zomato Jobs</a>
                </li>
                <li>
                  <a href="#">Byju's Jobs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <strong>Top Companies in India</strong>
            <br />
            <div className="element d-flex flex-column">
              <ul>
                <li>
                  <a href="#">EdTech Companies</a>
                </li>
                <li>
                  <a href="#">Fintech Companies</a>
                </li>
                <li>
                  <a href="#">IT Companies</a>
                </li>
                <li>
                  <a href="#">Ecommerce Companies</a>
                </li>
                <li>
                  <a href="#">Travel Companies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <center>
            <h5>Follow us on</h5>
            <div className="social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
        </center>
      </div>

  );
};

export default Footer;
