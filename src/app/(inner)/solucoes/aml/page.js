"use client";

import Image from "next/image";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
  const styling = {
    backgroundImage: "url('/assets/images/career/03.webp')",
  };

  return (
    <div>
      <HeaderTwo />

      <>
        {/* rts career banner area start */}
        <div className="rts-career-banner-area rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="career-banner-wrapper">
                  <h1 className="title">AML e screening para apoiar compliance</h1>
                  <p className="disc">
                    Faça checagens para apoiar processos de prevenção a lavagem de dinheiro. A Identiq
                    ajuda sua operação a aplicar screening, regras e trilhas para decisões mais seguras
                    no onboarding e no ciclo de vida do usuário.
                  </p>
                  <Link href="/contato" className="rts-btn btn-primary btn-bold">
                    Falar com especialista
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 mt_md--30 mt_sm--30 wow fadeInRight">
                <div className="thumbnail-top">
                  <Image
                    src="/assets/images/career/01.webp"
                    alt="AML e screening"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts career banner area end */}

        <div className="rts-section-gap-top career-two-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="thumbnail-career-two wow fadeInLeft">
                  <Image
                    src="/assets/images/career/02.webp"
                    alt="Fluxo AML"
                    width={1200}
                    height={900}
                  />
                </div>
              </div>

              <div className="col-lg-6 pl--50 pl_md--15 pl_sm--10 mt_md--30 pt_sm--30">
                <div className="career-right-two-wrapper">
                  <h2 className="title">Como funciona</h2>
                  <p>
                    Um fluxo simples para checar, classificar e registrar, com regras conforme sua
                    política e seu processo interno de compliance.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Coleta de dados no onboarding</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Screening conforme suas listas e critérios</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Classificação por regras e nível de risco</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Rotas de aprovação, revisão ou bloqueio</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Registros e trilhas para auditoria</p>
                        </div>
                      </div>
                    </div>

                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Regras configuráveis por perfil e produto</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Revisão manual quando necessário</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Monitoramento contínuo de casos</p>
                        </div>
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Integração via API e webhooks</p>
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
                    {/* Se você tiver popup JS no template, esse link externo pode ficar */}
                    <a
                      className="video-play-button play-video popup-video"
                      href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Abrir vídeo no YouTube"
                    >
                      <span />
                    </a>

                    <div className="video-overlay">
                      <button
                        type="button"
                        className="video-overlay-close"
                        aria-label="Fechar vídeo"
                      >
                        ×
                      </button>
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
                    <h2 className="title">Benefícios do AML e screening</h2>
                  </div>
                  <p className="disc">
                    Aumente controle e consistência no compliance com regras claras, trilhas e revisão
                    quando necessário.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-5 mt--30">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/01.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Decisão consistente</h6>
                    <p>Padronize critérios e evite análises manuais desiguais.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/02.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Regras configuráveis</h6>
                    <p>Ajuste políticas por perfil, produto e nível de risco.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/03.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Trilhas e auditoria</h6>
                    <p>Mantenha registros para governança e comprovação.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/04.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Revisão quando precisa</h6>
                    <p>Direcione somente o que exige análise manual.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/05.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Menos risco</h6>
                    <p>Reduza exposição com checagens e monitoramento.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-values-in-action">
                  <div className="icon">
                    <Image src="/assets/images/career/06.svg" alt="ícone" width={48} height={48} />
                  </div>
                  <div className="information">
                    <h6 className="title">Integração simples</h6>
                    <p>API e webhooks para conectar no seu fluxo.</p>
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
                  <h4 className="title">Screening e regras</h4>
                  <p>
                    Faça checagens conforme critérios internos e direcione para revisão quando
                    necessário.
                  </p>
                  <p>
                    Defina limites e exceções por perfil, canal e produto para reduzir fricção.
                  </p>
                  <div className="tag-wrapper">
                    <div className="single">
                      <span>Screening</span>
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
                        Resultado <span>em tempo real</span>
                      </p>
                    </div>
                    <Link href="/contato" className="rts-btn btn-primary btn-bold">
                      Solicitar demo
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-job-opening-card">
                  <h4 className="title">Trilhas e monitoramento</h4>
                  <p>
                    Mantenha registros e histórico para auditoria, governança e acompanhamento de
                    casos.
                  </p>
                  <p>
                    Use alertas e monitoramento para responder a mudanças no ciclo de vida do usuário.
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
                    <Link href="/contato" className="rts-btn btn-primary btn-bold">
                      Falar com especialista
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job opening area end */}

        {/* faq section area start */}
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
                      <Accordion.Header>O que é AML</Accordion.Header>
                      <Accordion.Body>
                        AML é um conjunto de práticas para apoiar prevenção a lavagem de dinheiro. O
                        processo envolve checagens, regras e registros para orientar decisões e
                        revisões.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>O que é screening</Accordion.Header>
                      <Accordion.Body>
                        Screening é a checagem de dados do usuário conforme critérios e listas usadas no
                        seu processo de compliance, ajudando a classificar e direcionar para revisão.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Como integrar AML no onboarding</Accordion.Header>
                      <Accordion.Body>
                        Você integra via API e webhooks. Envia dados do usuário e recebe resultado e
                        status para seguir no fluxo com regras e trilhas.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq section area end */}
      </>

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}