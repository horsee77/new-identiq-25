// SLUG: /solucoes/sancoes
// sem hífen

"use client";

import Image from "next/image";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  return (
    <div>
      <HeaderTwo />

      <div className="rts-career-banner-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career-banner-wrapper">
                <h1
                  className="title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Sanções e PEP para apoiar compliance no onboarding
                </h1>

                <p
                  className="disc"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Cheque pessoas expostas politicamente e sinalizações de sanções para apoiar decisões
                  mais seguras. A Identiq ajuda sua operação com screening, regras e trilhas para
                  revisão quando necessário.
                </p>

                <a
                  href="/contato"
                  className="rts-btn btn-primary btn-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Falar com especialista
                </a>
              </div>
            </div>

            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
              <div
                className="thumbnail-top thumbnail-consultancy"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  className="jarallax-img"
                  src="/assets/images/consultancy/02.webp"
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

      <div className="consultancy-bottom rts-section-gapBottom career-two-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pr--40 pr_md--15 pr_sm--10">
              <div
                className="thumbnail-consultancy"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  className="jarallax-img"
                  src="/assets/images/consultancy/01.webp"
                  alt="consultancy"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="col-lg-6 pt_md--50 mt_sm--30">
              <div className="career-right-two-wrapper">
                <h2 className="title">
                  Screening de <br /> sanções e PEP
                </h2>

                <p>
                  Aplique checagens no cadastro e direcione para revisão quando houver alerta. Você
                  define critérios, níveis e rotas para decisão, mantendo trilhas para auditoria e
                  governança.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Coleta de dados no onboarding</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Checagem de PEP conforme sua política</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Checagem de sanções conforme critérios</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Rotas de aprovação, revisão ou bloqueio</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Registros e trilhas para auditoria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-solution-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-style-two">
                <h2 className="title">Passo a passo da checagem</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-consulting mt--80 mt_sm--30">
          <div className="row">
            <div className="col-lg-12">
              <div className="consulting-step">
                <div className="timeline-line" />

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/consultancy/03.webp"
                      alt="consulting"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Cadastro</h4>
                    <p>O usuário informa dados para onboarding.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/consultancy/04.webp"
                      alt="consulting"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Checagem</h4>
                    <p>Screening de PEP e sanções conforme regras.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/consultancy/05.webp"
                      alt="consulting"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Classificação</h4>
                    <p>Nível e rota definidos pela política.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/consultancy/06.webp"
                      alt="consulting"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Decisão</h4>
                    <p>Aprovar, revisar ou bloquear com trilhas.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shedule a consultation start */}
      <div className="shedule-a-consultation rts-section-gapTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="shedule-consulting-left">
                <h2 className="title">
                  Vamos fortalecer <br /> seu compliance
                </h2>

                <p className="disc">
                  Agende uma conversa para entender como sanções e PEP podem apoiar decisões mais
                  seguras com regras e trilhas no seu onboarding.
                </p>

                <div className="check-wrapper">
                  <p className="top">O que está incluso</p>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Mapeamento do seu fluxo e pontos de controle</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Definição de regras e rotas de revisão</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Orientação para integração e acompanhamento</p>
                      </div>
                    </div>
                  </div>

                  <p className="call">
                    Fale com a gente em: <a href="/contato">Contato</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 mt_sm--30">
              <form action="#" className="consulting-form">
                <p>Agendar uma conversa</p>

                <div className="input-half-wrapper">
                  <div className="single">
                    <input type="text" placeholder="Nome" required />
                  </div>
                  <div className="single">
                    <input type="text" placeholder="Sobrenome" required />
                  </div>
                </div>

                <div className="input-half-wrapper">
                  <div className="single">
                    <input type="text" placeholder="Email corporativo" required />
                  </div>
                  <div className="single">
                    <input type="text" placeholder="Telefone" />
                  </div>
                </div>

                <input type="text" placeholder="Empresa" />
                <textarea
                  placeholder="Escreva sua mensagem"
                  required
                  defaultValue=""
                />

                <button type="submit" className="rts-btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* shedule a consultation end */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}