import React from "react";

const Placeholder = () => {
  return (
    <>
      <section className="issue py-4" aria-hidden={true}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card" aria-hidden="true">
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" aria-hidden="true">
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" aria-hidden="true">
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placeholder;
