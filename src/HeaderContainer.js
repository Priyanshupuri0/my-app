import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./HeaderContainer.css";
import header_image from "./Utilities/birdImg.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="container-fluid headerContent" id="header">
        <div className="row r">
          <div className="col-md-6 left-side">
            <h1>Where techies realise their true potential</h1>
            <h6>
              Look beyond the obvious. Use Recruitify to easily get discovered by
              awesome companies and get referred to job positions very few know
              about.
            </h6>
            <div className="d-flex">
              <Button variant="primary" size="lg" className="mx-2">
                Find Jobs
              </Button>
              <Button variant="primary" size="lg">
                Hire Talent
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={header_image}
              alt="header_image"
              className="img header-image"
            />
          </div>
        </div>
      </div>
      <div className="info">
        <p className="text-center promo">
          <strong>30,00,000+ professionals</strong> from <strong>16,500 <br /> companies </strong> are cutting short their
          path to <br/> success
        </p>
      </div>
    </>
  );
};

export default header;
