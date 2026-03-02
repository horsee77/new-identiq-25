// SLUG: /solucoes/devicefingerprint
// sem hífen

"use client";

import Image from "next/image";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [docAnim, setDocAnim] = useState(null);
  const [flowAnim, setFlowAnim] = useState(null);
  const [verification, setVerify] = useState(null);
  const [compliance, setCompliance] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch("/assets/lottie/Fingerprint.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setDocAnim(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar Lottie documents:", error);
      });

    fetch("/assets/lottie/SecureLogin.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setFlowAnim(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar Lottie flow:", error);
      });

    fetch("/assets/lottie/datasecurity.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setVerify(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar Lottie verification:", error);
      });

    fetch("/assets/lottie/security.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setCompliance(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar Lottie compliance:", error);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div>
      <HeaderTwo />

      <div className="rts-career-banner-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career-banner-wrapper">
                <h1 className="title">Device fingerprinting para identificar tentativas suspeitas</h1>
                <p className="disc">
                  Reconheça padrões de dispositivo e comportamento para reduzir fraude e evitar
                  múltiplas tentativas com o mesmo aparelho. A Identiq ajuda sua empresa a detectar
                  risco no onboarding e nas transações com decisões em tempo real.
                </p>
                <a href="/contato" className="rts-btn btn-primary btn-bold">
                  Falar com especialista
                </a>
              </div>
            </div>

            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 pt_md--30 pt_sm--30">
              <div className="thumbnail-top jarallax thumbnail-consultancy" data-speed=".85">
                <div
                  className="jarallax-img"
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {docAnim ? (
                    <Lottie
                      animationData={docAnim}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-one-industry">
        <div className="consultancy-bottom rts-section-gap career-two-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                <div className="thumbnail-consultancy jarallax">
                  <div
                    className="jarallax-img"
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {flowAnim ? (
                      <Lottie
                        animationData={flowAnim}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%" }} />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="career-right-two-wrapper">
                  <h2 className="title">Detecte risco antes do prejuízo</h2>
                  <p>
                    Device fingerprinting cria uma identificação do dispositivo para detectar
                    repetição de tentativas, padrões suspeitos e comportamentos inconsistentes.
                    Você usa esses sinais para aprovar, revisar ou bloquear com mais precisão.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Identificação do dispositivo e sessão</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Detecção de tentativas repetidas e padrões</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Sinais para score e regras de risco</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Decisão em tempo real no fluxo</p>
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

        <div className="consultancy-bottom rts-section-gapBottom career-two-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="career-right-two-wrapper">
                  <h2 className="title">Regras para bloquear abuso sem travar bons usuários</h2>
                  <p>
                    Ajuste políticas por cenário e risco. Combine device fingerprinting com KYC,
                    biometria e score para reduzir falso positivo e manter conversão.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Limites de tentativas por dispositivo</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Regras por canal, valor e perfil</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Listas de bloqueio e revisão</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Monitoramento e ajustes contínuos</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Trilhas e evidências para auditoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                <div className="thumbnail-consultancy jarallax">
                  <div
                    className="jarallax-img"
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {verification ? (
                      <Lottie
                        animationData={verification}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%" }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="industry-serviuce-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-industry-thumbnail">
                <div className="thumbnail-consultancy jarallax">
                  <div
                    className="jarallax-img"
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {compliance ? (
                      <Lottie
                        animationData={compliance}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%" }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-right-two-wrapper industry">
                <h2 className="title">
                  Benefícios do <br /> device fingerprinting
                </h2>

                <p className="more">
                  Identifique abuso, reduza fraude e melhore a decisão de risco com sinais de
                  dispositivo e comportamento.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Menos fraude e menos tentativas repetidas</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Mais precisão no score e nas regras</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Bloqueio de abuso sem travar conversão</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Trilhas e governança para auditoria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}