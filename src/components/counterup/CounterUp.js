import React from "react";

function CounterUp() {
  return (
    <div>
      {/* counter area start */}
      <div className="counter-up-wrapper">
        <div className="container-full">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-one">
                <p>Mais aprovações</p>
                <h3 className="title">
                  +<span className="counter">46</span>%
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-one">
                <p>Verificações processadas</p>
                <h3 className="title">
                  <span className="counter">24</span>M
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-one">
                <p>Mais segurança</p>
                <h3 className="title">
                  <span className="counter">89</span>%
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-one">
                <p>Menos perdas</p>
                <h3 className="title">
                  <span className="counter">720</span>+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
    </div>
  );
}

export default CounterUp;