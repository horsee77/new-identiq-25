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
                <h3 className="title">Benefícios para Marketplace</h3>
              </div>
            </div>
          </div>

          <div className="row g-0 mt--15">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:account-multiple-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Validação de compradores e sellers</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:store-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Onboarding mais seguro do seller</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:shield-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Menos fraude e abuso</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:alert-decagram-outline" width="38" height="38" />
                </div>
                <h5 className="title">Detecção de contas suspeitas</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:cellphone-key" width="38" height="38" />
                </div>
                <h5 className="title">Device fingerprinting</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:clipboard-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Regras por perfil e categoria</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:timeline-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Trilhas para auditoria e disputas</h5>
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