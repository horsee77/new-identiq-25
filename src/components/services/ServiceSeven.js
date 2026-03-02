"use client";
import React from "react";
import { Icon } from "@iconify/react";

function ServiceSeven() {
  return (
    <div>
      {/* banner bottom service area start */}
      <div className="service-main-wrapper-area-service pb--80">
        <div className="container">
          <div className="row">
            <div className="row g-5 mt--0">
              <div
                className="col-lg-3 mt--0 wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".2s"
              >
                <div className="single-service-border-top">
                  <div className="icon">
                    <Icon icon="mdi:clock-fast" width="44" height="44" />
                  </div>
                  <p className="disc">
                    Decisão em tempo real para aprovar, revisar ou reprovar com regras configuráveis.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 mt--0 wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                <div className="single-service-border-top">
                  <div className="icon">
                    <Icon icon="mdi:shield-check-outline" width="44" height="44" />
                  </div>
                  <p className="disc">
                    Menos fraude e menos chargeback com sinais de risco, dispositivo e comportamento.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 mt--0 wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                <div className="single-service-border-top">
                  <div className="icon">
                    <Icon icon="mdi:timeline-check-outline" width="44" height="44" />
                  </div>
                  <p className="disc">
                    Trilhas e auditoria para manter evidências, governança e compliance no fluxo.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 mt--0 wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                <div className="single-service-border-top">
                  <div className="icon">
                    <Icon icon="mdi:api" width="44" height="44" />
                  </div>
                  <p className="disc">
                    Integração via API e webhooks para conectar ao seu sistema sem fricção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner bottom service area end */}
    </div>
  );
}

export default ServiceSeven;