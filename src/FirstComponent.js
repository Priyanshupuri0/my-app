import React from "react";
import styles from "./FirstComponent.css";
const FirstComponent = () => {
  return (
    <>
      <div className="container-fluid content">
        <h2 className="text text-center">What can Recruitify help you with?</h2>
      </div>
      <div className="container-fluid content1" id="content1">
          <div className="pencil">
            3X
            <h6>faster candidate submissions</h6>
          </div>
          <br />
          <div className="notification">
            30%
            <h6>more candidate placed</h6>
          </div>
          <br />
          <div className="calculator">
            100%
            <h6>client satisfaction</h6>
          </div>
      </div>
    </>
  );
};

export default FirstComponent;
