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
                <h1 className="title">Face scan e match para confirmar identidade</h1>
                <p className="disc">
                  Compare o rosto do usuário com a referência do documento e reduza tentativas de
                  fraude no cadastro. A Identiq aplica face scan e match com regras configuráveis
                  para manter uma experiência rápida.
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
                  Um fluxo simples para capturar o rosto, validar a pessoa e comparar com a
                  referência, com etapas conforme sua política de risco.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Captura do rosto no onboarding</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Prova de vida quando necessário</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Face match com a foto do documento</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Regras para aprovar, revisar ou reprovar</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Retorno do resultado via API e webhooks</p>
                      </div>
                    </div>
                  </div>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Nível de exigência configurável por perfil</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Redução de tentativas com identidade falsa</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Menos falso positivo com ajustes finos</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Trilhas para auditoria e acompanhamento</p>
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
                  <h2 className="title">Benefícios do face scan e match</h2>
                </div>
                <p className="disc">
                  Aumente segurança no cadastro com comparação facial, mantendo aprovação rápida
                  para usuários legítimos.
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
                  <h6 className="title">Mais segurança</h6>
                  <p>Compare o rosto com a referência e reduza tentativas de fraude.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/02.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Menos fraude</h6>
                  <p>Impeça tentativas com identidade falsa no onboarding.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/03.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Decisão rápida</h6>
                  <p>Resultado em tempo real para seguir no fluxo de cadastro.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/04.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Regras configuráveis</h6>
                  <p>Defina exigências por perfil, canal e cenário de risco.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/05.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Menos falso positivo</h6>
                  <p>Melhore aprovação com ajustes finos e revisões quando preciso.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/06.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Integração simples</h6>
                  <p>API e webhooks para conectar e receber o resultado no seu sistema.</p>
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
                <h4 className="title">Comparação facial</h4>
                <p>
                  Compare o rosto capturado com a foto do documento para confirmar identidade e
                  reduzir fraude.
                </p>
                <p>
                  Defina quando aplicar e quais resultados exigem revisão conforme seu cenário.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Face match</span>
                  </div>
                  <div className="single">
                    <span>Onboarding</span>
                  </div>
                  <div className="single">
                    <span>Regras</span>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="selary-range">
                    <p>
                      Resultado <span>em tempo real</span>
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
                <h4 className="title">Prova de vida opcional</h4>
                <p>
                  Aplique prova de vida quando necessário para confirmar pessoa real e reduzir
                  tentativas com foto ou vídeo.
                </p>
                <p>
                  Ajuste exigências por perfil e risco mantendo uma jornada rápida para usuários
                  legítimos.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Prova de vida</span>
                  </div>
                  <div className="single">
                    <span>Segurança</span>
                  </div>
                  <div className="single">
                    <span>Configuração</span>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="selary-range">
                    <p>
                      Fluxos <span>configuráveis</span>
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
                    <Accordion.Header>O que é face match</Accordion.Header>
                    <Accordion.Body>
                      Face match é a comparação do rosto capturado no fluxo com uma referência, como a
                      foto do documento, para confirmar identidade com mais segurança.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Quando devo usar prova de vida</Accordion.Header>
                    <Accordion.Body>
                      Use prova de vida quando o risco for maior ou quando você precisar confirmar que
                      existe uma pessoa real no processo, reduzindo tentativas com foto ou vídeo.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Como integrar face scan com meu sistema</Accordion.Header>
                    <Accordion.Body>
                      A integração é via API e webhooks. Você envia o evento do fluxo e recebe status e
                      resultado para seguir com aprovação, revisão ou reprovação.
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