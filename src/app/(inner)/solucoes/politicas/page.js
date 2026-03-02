// SLUG: /solucoes/politicas
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
                  Políticas e regras para decisões consistentes
                </h1>

                <p
                  className="disc"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Defina critérios claros para aprovar, revisar ou reprovar. A Identiq ajuda sua
                  operação a configurar regras por perfil, canal e produto para reduzir fraude,
                  diminuir falso positivo e manter controle com trilhas.
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
                  Controle por <br /> regras e rotas
                </h2>

                <p>
                  Configure políticas para diferentes cenários e direcione cada caso para a rota
                  correta. Você define limites, exceções e critérios para manter conversão com
                  segurança e consistência no time.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Regras por perfil, canal e produto</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Limites e critérios por nível de risco</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Rotas de aprovação, revisão e bloqueio</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Exceções e casos especiais com governança</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
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

      <div className="rts-solution-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-style-two">
                <h2 className="title">Passo a passo da política</h2>
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
                    <h4 className="title">Definição</h4>
                    <p>Você define critérios e objetivos do fluxo.</p>
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
                    <h4 className="title">Configuração</h4>
                    <p>Regras e limites por cenário e risco.</p>
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
                    <h4 className="title">Rotas</h4>
                    <p>Aprovar, revisar ou bloquear com consistência.</p>
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
                    <h4 className="title">Ajustes</h4>
                    <p>Melhoria contínua com métricas e trilhas.</p>
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
                  Vamos definir <br /> suas regras
                </h2>

                <p className="disc">
                  Agende uma conversa para desenhar políticas por cenário, reduzir falso positivo e
                  melhorar decisões com segurança e trilhas.
                </p>

                <div className="check-wrapper">
                  <p className="top">O que está incluso</p>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Mapeamento do seu fluxo e do apetite a risco</p>
                      </div>

                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Definição de rotas e critérios por cenário</p>
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