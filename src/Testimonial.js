import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="heading text-center my-4">
        {" "}
        DON'T JUST TAKE IT FROM US
        <br />
        <br />
        <h1>
          <strong>From our Users</strong>
        </h1>
      </div>
      <div className="container">
        <div className="row" style={{ rowGap: "1.5rem" }}>
          <div className="col-md-6">
            <div className="card" style={{height: "20vh"}}>
              <div className="card-body d-flex text-center align-items-center">
                <p className="card-text">
                  "I got my tech job on Recruitify (AngelList Talent) 4 years ago
                  and I'm still happy! Pays well, great culture, and unlimited
                  PTO."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{height: "20vh"}}>
              <div className="card-body d-flex text-center align-items-center">
                <p className="card-text">
                  "I love Recruitify (AngelList Talent). I got my current job at
                  a startup entirely through the site last year - it's super
                  easy to use and I love the UI."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{height: "20vh"}}>
              <div className="card-body d-flex text-center align-items-center">
                <p className="card-text">
                  "I can't imagine my day to day without this platform. Life
                  would be a lot more difficult."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{height: "20vh"}}>
              <div className="card-body d-flex text-center align-items-center">
                <p className="card-text">
                  "Half of the offers I give are sourced from Recruitify
                  (AngelList Talent). It's the best product for anyone looking
                  for startup talent."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
