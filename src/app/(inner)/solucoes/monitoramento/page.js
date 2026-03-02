// SLUG: /solucoes/monitoramento
// sem hífen

"use client";

import Image from "next/image";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Accordion from "react-bootstrap/Accordion";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
  const styling = {
    backgroundImage: `url(/assets/images/career/03.webp)`,
  };

  return (
    <div>
      <HeaderTwo />

      {/* rts career banner area start */}
      <div className="rts-career-banner-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="career-banner-wrapper">
                <h1 className="title">Monitoramento contínuo para reduzir fraude ao longo do tempo</h1>
                <p className="disc">
                  O risco muda depois do cadastro. A Identiq ajuda sua empresa a monitorar usuários e
                  padrões de comportamento para detectar sinais de fraude, reduzir perdas e manter
                  compliance com decisões mais rápidas.
                </p>
                <a href="/contato" className="rts-btn btn-primary btn-bold">
                  Falar com especialista
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt_md--30 mt_sm--30 wow fadeInRight">
              <div className="thumbnail-top">
                <Image
                  src="/assets/images/career/01.webp"
                  alt="career"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts career banner area send */}

      <div className="rts-section-gap-top career-two-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="thumbnail-career-two wow fadeInLeft">
                <Image
                  src="/assets/images/career/02.webp"
                  alt="career"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="col-lg-6 pl--50 pl_md--15 pl_sm--10 mt_md--30 pt_sm--30">
              <div className="career-right-two-wrapper">
                <h2 className="title">Como funciona</h2>
                <p>
                  Um fluxo simples para acompanhar eventos e sinais ao longo do tempo, com alertas e
                  ações conforme sua política de risco.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Coleta de eventos e sinais do seu fluxo</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Detecção de padrões e mudanças de comportamento</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Regras para alertar, revisar ou bloquear</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Monitoramento de tentativas e recorrência</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Integração via API e webhooks</p>
                      </div>
                    </div>
                  </div>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Alertas para o time operacional</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Trilhas para auditoria e acompanhamento</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Ajustes contínuos por performance</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Menos perdas com resposta mais rápida</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* career video area start */}
      <div className="career-video-area-large-3 rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="career-video-area-large position-relative bg_image"
                style={styling}
                data-speed=".8"
              >
                <div className="vedio-icone">
                  <a
                    className="video-play-button play-video popup-video"
                    href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                  >
                    <span />
                  </a>
                  <div className="video-overlay">
                    <a className="video-overlay-close" href="#">
                      ×
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* career video area end */}

      {/* company values area start */}
      <div className="company-values-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area-wrapper-main">
                <div className="title-left-area">
                  <h2 className="title">Benefícios do monitoramento contínuo</h2>
                </div>
                <p className="disc">
                  Detecte risco depois do cadastro, responda rápido e mantenha controle com regras e
                  trilhas.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/01.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Detecção de padrões</h6>
                  <p>Identifique mudanças de comportamento e recorrência de tentativas.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/02.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Resposta mais rápida</h6>
                  <p>Acione revisão ou bloqueio com menos tempo de reação.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/03.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Menos perdas</h6>
                  <p>Reduza prejuízo ao identificar risco no ciclo de vida do usuário.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/04.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Alertas operacionais</h6>
                  <p>Envie sinais para o time agir com prioridade e consistência.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/05.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Regras configuráveis</h6>
                  <p>Ajuste políticas por cenário e acompanhe performance.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/06.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Trilhas e auditoria</h6>
                  <p>Mantenha registros para governança e compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* company values area end */}

      {/* job opening area start */}
      <div className="job-opening-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-style-two">
                <h2 className="title">Recursos principais</h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".1s">
              <div className="single-job-opening-card">
                <h4 className="title">Alertas e regras</h4>
                <p>
                  Crie alertas para eventos suspeitos e defina ações por risco, como revisão, bloqueio
                  ou exigência de nova verificação.
                </p>
                <p>
                  Ajuste limites por canal e perfil para reduzir falso positivo e manter conversão.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Alertas</span>
                  </div>
                  <div className="single">
                    <span>Regras</span>
                  </div>
                  <div className="single">
                    <span>Risco</span>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="selary-range">
                    <p>
                      Ação <span>em tempo real</span>
                    </p>
                  </div>
                  <a href="/contato" className="rts-btn btn-primary btn-bold">
                    Solicitar demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-job-opening-card">
                <h4 className="title">Acompanhamento e trilhas</h4>
                <p>
                  Acompanhe eventos, decisões e histórico para agir com consistência e manter registros
                  para auditoria e governança.
                </p>
                <p>
                  Tenha visibilidade para ajustar políticas e priorizar casos de maior risco.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Trilhas</span>
                  </div>
                  <div className="single">
                    <span>Auditoria</span>
                  </div>
                  <div className="single">
                    <span>Governança</span>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="selary-range">
                    <p>
                      Controle <span>contínuo</span>
                    </p>
                  </div>
                  <a href="/contato" className="rts-btn btn-primary btn-bold">
                    Falar com especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job opening area end */}

      {/* why choose us sectiona area start */}
      <div className="faqs-section rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="title">Perguntas frequentes</h2>
            </div>

            <div className="col-lg-6">
              <div className="faq-why-choose-left-accordion">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>O que é monitoramento contínuo</Accordion.Header>
                    <Accordion.Body>
                      É o acompanhamento de eventos e sinais depois do cadastro para detectar mudanças
                      de comportamento e responder com regras e ações ao longo do tempo.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>O que posso monitorar</Accordion.Header>
                    <Accordion.Body>
                      Tentativas repetidas, mudanças de padrão, eventos suspeitos e sinais definidos na
                      sua política. Você escolhe quais eventos importam para seu cenário.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Como integrar</Accordion.Header>
                    <Accordion.Body>
                      A integração é via API e webhooks. Você envia eventos e recebe alertas e decisões
                      para agir no seu sistema conforme regras configuradas.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us sectiona area end */}

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}