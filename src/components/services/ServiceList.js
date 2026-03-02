"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function ServiceList() {
  return (
    <>
      {/* service-we-provice-area start */}
      <div className="rts-service-provide-area rts-section-gap">
        <div className="container-s-float">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <Icon icon="mdi:account-check-outline" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">KYC e onboarding</h3>
                  <p className="disc">
                    Valide usuários no cadastro com regras por risco, menos fricção e decisão em tempo real.
                  </p>
                </div>
                <Link href="/kyc" className="arrow-btn" aria-label="Ir para KYC e onboarding">
                  <Icon
                    icon="mdi:arrow-right"
                    width="22"
                    height="22"
                    style={{ color: "#3534FF", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3534FF")}
                  />
                </Link>
              </div>

              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <Icon icon="mdi:card-account-details-outline" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Validação de documentos</h3>
                  <p className="disc">
                    Verifique consistência e autenticidade para reduzir tentativas de fraude no onboarding.
                  </p>
                </div>
                <Link href="/documentos" className="arrow-btn" aria-label="Ir para Validação de documentos">
                  <Icon
                    icon="mdi:arrow-right"
                    width="22"
                    height="22"
                    style={{ color: "#3534FF", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3534FF")}
                  />
                </Link>
              </div>

              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <Icon icon="mdi:camera-account" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Biometria e prova de vida</h3>
                  <p className="disc">
                    Confirme pessoa real no fluxo e aumente segurança quando o risco exigir.
                  </p>
                </div>
                <Link href="/solucoes/biometria" className="arrow-btn" aria-label="Ir para Biometria e prova de vida">
                  <Icon
                    icon="mdi:arrow-right"
                    width="22"
                    height="22"
                    style={{ color: "#3534FF", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3534FF")}
                  />
                </Link>
              </div>

              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <Icon icon="mdi:face-recognition" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Face scan e match</h3>
                  <p className="disc">
                    Compare o rosto com a referência do documento para reduzir identidade falsa e abuso.
                  </p>
                </div>
                <Link href="/solucoes/facescan" className="arrow-btn" aria-label="Ir para Face scan e match">
                  <Icon
                    icon="mdi:arrow-right"
                    width="22"
                    height="22"
                    style={{ color: "#3534FF", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3534FF")}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service-we-provice-area end */}
    </>
  );
}

export default ServiceList;