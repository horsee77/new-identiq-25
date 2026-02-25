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
                <h1 className="title">KYC e Onboarding para aprovar com segurança</h1>
                <p className="disc">
                  A Identiq ajuda sua empresa a verificar identidades, reduzir fraude e manter
                  compliance no cadastro. Crie jornadas mais rápidas, com menos fricção e decisões
                  mais confiáveis.
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
                  Um fluxo simples para validar usuários no cadastro, com regras e etapas conforme
                  sua política de risco.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Coleta de dados e documentos</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Validação e consistência das informações</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Biometria e prova de vida quando necessário</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Decisão automática ou revisão manual</p>
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
                        <p>Regras configuráveis por perfil e canal</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Trilha para auditoria e acompanhamento</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Menos falso positivo e mais aprovações</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Experiência rápida para o usuário final</p>
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
                  <h2 className="title">Benefícios do KYC com a Identiq</h2>
                </div>
                <p className="disc">
                  Melhore conversão no onboarding, reduza fraude e tenha visibilidade para decisões
                  mais seguras com compliance.
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
                  <h6 className="title">Mais aprovações</h6>
                  <p>Reduza fricção e aprove usuários legítimos com mais confiança.</p>
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
                  <p>Evite identidades falsas com checagens e validações no cadastro.</p>
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
                  <p>Automatize políticas de risco e responda em tempo real.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/04.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Compliance</h6>
                  <p>Mantenha evidências e trilhas para auditoria e governança.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-values-in-action">
                <div className="icon">
                  <Image src="/assets/images/career/05.svg" alt="icon" width={48} height={48} />
                </div>
                <div className="information">
                  <h6 className="title">Fluxo configurável</h6>
                  <p>Adapte as etapas do onboarding conforme produto, canal e perfil.</p>
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
                  <p>API e webhooks para conectar seu sistema e receber resultados.</p>
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
                <h4 className="title">Validação de documentos</h4>
                <p>
                  Verifique consistência de dados e autenticidade para reduzir tentativas de fraude
                  no cadastro.
                </p>
                <p>
                  Configure exigências por fluxo e aplique regras conforme o seu cenário de risco.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Onboarding</span>
                  </div>
                  <div className="single">
                    <span>Documentos</span>
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
                <h4 className="title">Biometria e prova de vida</h4>
                <p>
                  Aumente a segurança com face match e validação de pessoa real quando o fluxo exigir.
                </p>
                <p>Reduza fraude mantendo uma jornada rápida para usuários legítimos.</p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Biometria</span>
                  </div>
                  <div className="single">
                    <span>Prova de vida</span>
                  </div>
                  <div className="single">
                    <span>Segurança</span>
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
                    <Accordion.Header>O que é KYC e por que é importante</Accordion.Header>
                    <Accordion.Body>
                      KYC é o processo de conhecer e validar o usuário no cadastro. Ele ajuda a reduzir
                      fraude e apoiar compliance com decisões mais seguras.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Como é feita a integração com a Identiq</Accordion.Header>
                    <Accordion.Body>
                      A integração é via API e webhooks. Você envia os dados do usuário e recebe o status
                      e o resultado do processo para seguir no seu fluxo.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Posso configurar regras e etapas do onboarding</Accordion.Header>
                    <Accordion.Body>
                      Sim. Você define políticas de risco e jornadas por produto, canal e perfil, equilibrando
                      conversão e segurança conforme sua necessidade.
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