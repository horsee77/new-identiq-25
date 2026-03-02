"use client";

import Image from "next/image";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [Chargeback, setChargeback] = useState(null);
  const [Secure, setSecure] = useState(null);
  const [Shopping, setShopping] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch("/assets/lottie/chargeback.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setChargeback(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar animação:", error);
        if (alive) setChargeback(null);
      });

    fetch("/assets/lottie/securepayment.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setSecure(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar animação:", error);
        if (alive) setSecure(null);
      });

    fetch("/assets/lottie/Shopping.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setShopping(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar animação:", error);
        if (alive) setShopping(null);
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
                <h1 className="title">Prevenção de chargeback para reduzir perdas</h1>
                <p className="disc">
                  Identifique risco antes da compra e diminua contestação depois. A Identiq ajuda sua
                  empresa a bloquear tentativas suspeitas, reduzir fraude e proteger receita com
                  decisões em tempo real.
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
                  {Chargeback ? (
                    <Lottie
                      animationData={Chargeback}
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
                    {Secure ? (
                      <Lottie
                        animationData={Secure}
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
                  <h2 className="title">Reduza contestação com decisões em tempo real</h2>
                  <p>
                    A prevenção começa antes da transação. Você combina sinais do cliente, do
                    dispositivo e do comportamento para decidir quando aprovar, revisar ou bloquear,
                    reduzindo chargeback sem travar bons compradores.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:shopping-cart" width="20" height="20" />
                          <p>Análise de risco no checkout</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:sliders-horizontal" width="20" height="20" />
                          <p>Regras e limites configuráveis por valor e perfil</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:shield-check" width="20" height="20" />
                          <p>Decisão para aprovar, revisar ou bloquear</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:webhook" width="20" height="20" />
                          <p>Integração via API e webhooks</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:file-search" width="20" height="20" />
                          <p>Trilhas e registros para auditoria</p>
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
                  <h2 className="title">Menos perdas e mais conversão</h2>
                  <p>
                    Evite falso positivo com regras por cenário e revisão quando necessário. Com uma
                    política bem definida, você reduz bloqueios desnecessários e mantém o funil de
                    compra saudável.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:filter" width="20" height="20" />
                          <p>Políticas por canal, produto e valor</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:user-round-search" width="20" height="20" />
                          <p>Revisão manual para casos específicos</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:chart-no-axes-column" width="20" height="20" />
                          <p>Ajustes contínuos por performance</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:shield-alert" width="20" height="20" />
                          <p>Redução de chargeback e fraude</p>
                        </div>
                        <div className="single-check">
                          <Icon className="check-icon" icon="lucide:badge-check" width="20" height="20" />
                          <p>Mais aprovações com controle de risco</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                <div className="thumbnail-consultancy jarallax">
                  <Image
                    className="jarallax-img"
                    src="/assets/images/chargeback/chargeback-01.png"
                    alt="consultancy"
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
      </div>

      {/* industry service area start */}
      <div className="industry-serviuce-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-industry-thumbnail">
                <div className="thumbnail-left left-small">
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
                    {Shopping ? (
                      <Lottie
                        animationData={Shopping}
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
                  Benefícios da <br /> prevenção de chargeback
                </h2>

                <p className="more">
                  Proteja receita, reduza perdas e melhore a experiência do cliente com decisões
                  rápidas e regras claras.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:shield-x" width="20" height="20" />
                        <p>Mais chargeback e menos prejuízo</p>
                      </div>
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:badge-check" width="20" height="20" />
                        <p>Mais conversão com menos bloqueios</p>
                      </div>
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:timer" width="20" height="20" />
                        <p>Decisão em tempo real no checkout</p>
                      </div>
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:file-search" width="20" height="20" />
                        <p>Políticas e trilhas para auditoria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* industry service area end */}

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}