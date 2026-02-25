"use client";
import { Icon } from "@iconify/react";

function FeatureTwo() {
  return (
    <div>
      {/* key benefits area start */}
      <div className="keybenefits-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="benefits-area-title-wrapper">
                <h3 className="title">Benefícios para seguros</h3>
              </div>
            </div>
          </div>

          <div className="row g-0 mt--15">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:shield-home-outline" width="38" height="38" />
                </div>
                <h5 className="title">Menos fraude na contratação</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:clipboard-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Validação de documentos</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:account-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">KYC no onboarding</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:chart-line" width="38" height="38" />
                </div>
                <h5 className="title">Score de risco por perfil</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:camera-account" width="38" height="38" />
                </div>
                <h5 className="title">Biometria quando necessário</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:timeline-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Trilhas para auditoria</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:bell-alert-outline" width="38" height="38" />
                </div>
                <h5 className="title">Alertas e monitoramento</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:api" width="38" height="38" />
                </div>
                <h5 className="title">Integração via API</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* key benefits area end */}
    </div>
  );
}

export default FeatureTwo;