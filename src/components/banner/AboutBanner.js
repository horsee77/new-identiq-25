"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import { Icon } from "@iconify/react";

function AboutBanner() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 5 });
    }
  }, []);

  const styling = {
    backgroundImage: "url('/assets/images/about/01.webp')",
  };

  return (
    <div>
      <>
        {/* about-banner area start */}
        <div className="about-banner-area-bg jarallax" style={styling}></div>
        {/* about-banner area end */}

        {/* counter area start */}
        <div className="counter-up-wrapper mt-dec-80">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter-up-one border-top border-left">
                  <div className="icon-area">
                    <Icon icon="mdi:chart-line" width="34" height="34" style={{ color: "#fff" }} />
                  </div>
                  <p>Mais aprovações</p>
                  <h3 className="title">
                    +<span className="counter">46</span>%
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter-up-one border-top">
                  <div className="icon-area">
                    <Icon icon="mdi:clock-fast" width="34" height="34" style={{ color: "#fff" }} />
                  </div>
                  <p>Decisão em tempo real</p>
                  <h3 className="title">
                    <span className="counter">2.5</span>s
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter-up-one border-top">
                  <div className="icon-area">
                    <Icon icon="mdi:shield-check-outline" width="34" height="34" style={{ color: "#fff" }} />
                  </div>
                  <p>Menos fraude</p>
                  <h3 className="title">
                    <span className="counter">89</span>%
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter-up-one border-top">
                  <div className="icon-area">
                    <Icon icon="mdi:timeline-check-outline" width="34" height="34" style={{ color: "#fff" }} />
                  </div>
                  <p>Trilhas e auditoria</p>
                  <h3 className="title">
                    <span className="counter">720</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AboutBanner;