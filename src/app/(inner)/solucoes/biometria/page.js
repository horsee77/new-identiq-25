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
                    Biometria e prova de vida para impedir fraude
                  </h1>

                  <p
                    className="disc"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    Confirme que existe uma pessoa real no processo e reduza tentativas com identidade
                    falsa. A Identiq aplica biometria e prova de vida para aumentar segurança sem travar
                    usuários legítimos.
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
                    alt="Biometria e prova de vida"
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
                    alt="Fluxo com biometria"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>

              <div className="col-lg-6 pt_md--50 mt_sm--30">
                <div className="career-right-two-wrapper">
                  <h2 className="title">
                    Biometria e <br /> prova de vida no seu fluxo
                  </h2>

                  <p>
                    Adicione uma camada de segurança quando o risco exigir. Você define quando aplicar
                    biometria e prova de vida e recebe o resultado para aprovar, revisar ou reprovar.
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
                          <p>Captura do rosto no onboarding</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Prova de vida para confirmar pessoa real</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Face match quando necessário</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Regras configuráveis por perfil e canal</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Resultado entregue por API e webhooks</p>
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
                  <h2 className="title">Passo a passo da verificação</h2>
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
                        alt="Início do fluxo"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Início do fluxo</h4>
                      <p>O usuário inicia a verificação no onboarding.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/04.webp"
                        alt="Prova de vida"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Prova de vida</h4>
                      <p>Confirma que existe uma pessoa real no processo.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/05.webp"
                        alt="Face match"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Face match</h4>
                      <p>Comparação quando seu fluxo exigir.</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                  </div>

                  <div className="single-consulting-one">
                    <div className="thumbnail">
                      <Image
                        src="/assets/images/consultancy/06.webp"
                        alt="Decisão"
                        width={520}
                        height={360}
                      />
                    </div>
                    <div className="right-area">
                      <h4 className="title">Decisão</h4>
                      <p>Resultado para aprovar, revisar ou reprovar.</p>
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
                    Vamos aumentar <br /> a segurança do seu fluxo
                  </h2>

                  <p className="disc">
                    Agende uma conversa para entender como biometria e prova de vida podem reduzir
                    fraude e manter uma experiência rápida para usuários legítimos.
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
                          <p>Recomendação de quando aplicar biometria</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Definição de regras por cenário e risco</p>
                        </div>

                        <div className="single-check">
                          <Image
                            src="/assets/images/service/01.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p>Orientação para integração e acompanhamento</p>
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