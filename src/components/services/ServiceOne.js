"use client";
import React from "react";
import { ReactSVG } from "react-svg";

function ServiceOne() {
  return (
    <div>
      {/* solution expertiece */}
      <div className="solution-expertice-area rts-section-gap bg-solution">
        <div className="top-left wow slideInLeft">
          <img
            loading="lazy"
            rel="preload"
            src="assets/images/service/icons/02.png"
            alt="service"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-2">
                <h2 className="title">Soluções inteligentes para verificar e proteger</h2>
                <p>
                  Uma plataforma unificada para verificação de identidade, prevenção a fraudes e
                  compliance. Veja como ajudamos seu time a reduzir risco e aumentar aprovações.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-0 mt--70">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one border-left">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/id-card.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">KYC e Onboarding</h4>
                <p className="disc">
                  Valide usuários com rapidez e segurança para aprovar clientes legítimos com menos fricção.
                </p>
                <a href="/solucoes/kyc" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/document-check.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">Validação de Documentos</h4>
                <p className="disc">
                  Confirme autenticidade e consistência de documentos com análise automatizada e regras.
                </p>
                <a href="/solucoes/documentos" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/face-scan.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">Biometria e Prova de Vida</h4>
                <p className="disc">
                  Garanta que a pessoa é real com face match e prova de vida em fluxos rápidos.
                </p>
                <a href="/solucoes/biometria" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one border-left border-bottom-1">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/shield-check.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">Antifraude e Score de Risco</h4>
                <p className="disc">
                  Detecte padrões suspeitos e aplique regras para reduzir fraudes e chargebacks.
                </p>
                <a href="/solucoes/risco" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one border-bottom-1">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/compliance.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">Compliance e Auditoria</h4>
                <p className="disc">
                  Centralize trilhas, regras e evidências para apoiar conformidade e decisões seguras.
                </p>
                <a href="/solucoes/auditoria" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-solution-style-one border-bottom-1">
                <div className="right-draw">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/service/icons/01.png"
                    alt="icons"
                  />
                </div>
                <div className="icon">
                  <img
                    loading="lazy"
                    rel="preload"
                    src="assets/images/icons/icon-sets/workflow.svg"
                    alt="service"
                  />
                </div>
                <h4 className="title">Integrações e Workflows</h4>
                <p className="disc">
                  Conecte com API e webhooks e personalize fluxos de verificação para sua operação.
                </p>
                <a href="/produto/workflows" className="btn-arrow">
                  Ver detalhes
                  <img
                    className="injectable"
                    src="assets/images/icons/arrow-right.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <a
                href="/solucoes"
                className="rts-btn btn-primary wow fadeInUp"
                data-wow-delay=".5s"
              >
                Mais soluções
                <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* solution expertiece end */}
    </div>
  );
}

export default ServiceOne;