"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";

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

      <>
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
                    Auditoria e trilhas para decisões com evidências
                  </h1>

                  <p
                    className="disc"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    Registre eventos, decisões e resultados para apoiar compliance e governança. A
                    Identiq ajuda sua operação a manter trilhas claras, reduzir inconsistências e
                    facilitar auditorias com histórico e evidências.
                  </p>

                  <Link
                    href="/contato"
                    className="rts-btn btn-primary btn-bold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    Falar com especialista
                  </Link>
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
                    alt="Auditoria e trilhas"
                    width={1200}
                    height={800}
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
                    alt="Fluxo auditável"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>

              <div className="col-lg-6 pt_md--50 mt_sm--30">
                <div className="career-right-two-wrapper">
                  <h2 className="title">
                    Trilha completa <br /> do seu fluxo
                  </h2>

                  <p>
                    Centralize histórico do usuário, eventos do onboarding e decisões de risco em um
                    fluxo auditável. Você define o que registrar e como consultar, mantendo evidências
                    para revisão interna e auditorias externas.
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
                          <p>Registro de eventos e decisões</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Histórico de alterações e reprocessos</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Evidências e contexto por caso</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Consultas por API e rastreabilidade</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Trilhas para governança e compliance</p>
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
                  <h2 className="title">Passo a passo da trilha</h2>
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
                        alt="Eventos"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Eventos</h4>
                      <p>Eventos do fluxo são registrados com contexto.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/04.webp"
                        alt="Decisões"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Decisões</h4>
                      <p>Resultados de regras e análises são armazenados.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/05.webp"
                        alt="Evidências"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Evidências</h4>
                      <p>Registro de evidências para cada caso quando necessário.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/06.webp"
                        alt="Consulta"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Consulta</h4>
                      <p>Histórico disponível para auditoria e governança.</p>
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
      </>
      
      <>
        {/* shedule a consultation start */}
        <div className="shedule-a-consultation rts-section-gapTop">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="shedule-consulting-left">
                  <h2 className="title">
                    Vamos organizar <br /> suas trilhas
                  </h2>

                  <p className="disc">
                    Agende uma conversa para entender como auditoria e trilhas podem apoiar compliance,
                    governança e revisões com histórico e evidências.
                  </p>

                  <div className="check-wrapper">
                    <p className="top">O que está incluso</p>

                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Mapeamento do que registrar no seu fluxo</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Definição de acesso e consulta de histórico</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Orientação para integração e governança</p>
                        </div>
                      </div>
                    </div>

                    <p className="call">
                      Fale com a gente em: <Link href="/contato">Contato</Link>
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
                      <input type="email" placeholder="Email corporativo" required />
                    </div>
                    <div className="single">
                      <input type="text" placeholder="Telefone" />
                    </div>
                  </div>

                  <input type="text" placeholder="Empresa" />
                  <textarea
                    name="mensagem"
                    id="mensagem"
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
      </>

      <FooterOne />
      <BackToTop />
    </div>
  );
}