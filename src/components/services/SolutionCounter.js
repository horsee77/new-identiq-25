"use client";
import React from "react";
import { Icon } from "@iconify/react";

function SolutionCounter() {
  return (
    <div>
      {/* solution by experts area */}
      <div className="solution-exparts-area-service-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="exparts-area-main-mt-dec">
                <div className="title-area-center-inner-with-sub">
                  <span>Soluções por especialistas</span>
                  <h2 className="title">
                    Aumente aprovações, reduza fraude e mantenha compliance com decisões em tempo real.
                  </h2>
                  <a
                    href="/contato"
                    className="rts-btn btn-primary wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Falar com especialista
                    <img
                      className="injectable"
                      src="assets/images/service/icons/13.svg"
                      alt="arrow"
                    />
                  </a>
                </div>

                <div className="top-right-shape">
                  <img
                    className="wow toBottomLeft"
                    src="assets/images/banner/shape/02.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counters */}
      <div className="counter-up-wrapper">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-counter-up-one border-top border-left">
                <div className="icon-area">
                  <Icon icon="mdi:chart-line" width="34" height="34" style={{ color: "#fff" }} />
                </div>
                <p>Mais aprovações</p>
                <h3 className="title animated fadeIn">
                  +<span className="counter animated fadeInDownBig">46</span>%
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-counter-up-one border-top">
                <div className="icon-area">
                  <Icon icon="mdi:clock-fast" width="34" height="34" style={{ color: "#fff" }} />
                </div>
                <p>Decisão em tempo real</p>
                <h3 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">2.5</span>s
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-counter-up-one border-top">
                <div className="icon-area">
                  <Icon icon="mdi:shield-check-outline" width="34" height="34" style={{ color: "#fff" }} />
                </div>
                <p>Menos fraude</p>
                <h3 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">89</span>%
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-counter-up-one border-top">
                <div className="icon-area">
                  <Icon icon="mdi:cash-multiple" width="34" height="34" style={{ color: "#fff" }} />
                </div>
                <p>Menos perdas</p>
                <h3 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">720</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counters end */}
    </div>
  );
}

export default SolutionCounter;