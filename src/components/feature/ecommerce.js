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
                <h3 className="title">Benefícios para E-commerce</h3>
              </div>
            </div>
          </div>

          <div className="row g-0 mt--15">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:cart-check" width="38" height="38" />
                </div>
                <h5 className="title">Mais conversão no checkout</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:credit-card-remove-outline" width="38" height="38" />
                </div>
                <h5 className="title">Menos chargeback</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper bg-light">
                <div className="icon">
                  <Icon icon="mdi:shield-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Menos fraude em compras</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:clock-fast" width="38" height="38" />
                </div>
                <h5 className="title">Decisão em tempo real</h5>
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
                <h5 className="title">Regras por valor e perfil</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="single-benefits-area-wrapper">
                <div className="icon">
                  <Icon icon="mdi:filter-check-outline" width="38" height="38" />
                </div>
                <h5 className="title">Menos falso positivo</h5>
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