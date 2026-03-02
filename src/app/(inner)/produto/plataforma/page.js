// SLUG: /produto/plataforma
// sem hífen

"use client";

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaFour from "@/components/cta/CtaFour";
import MoreSolutions from "@/components/service-component/MoreSolution";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Home() {
   const [Chargeback, setChargeback] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch("/assets/lottie/Datacenter.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setChargeback(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar animação:", error);
        if (alive) setChargeback(null);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div>
      <HeaderTwo />

      {/* banner */}
      <div className="rts-service-banner-area ptb--80 position-relative">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 mb_md--30 mb_sm--30">
              <div className="service-banner-content-wrapper">
                <div
                  className="bread-plug wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".2s"
                >
                  <Link href="/">Home</Link>
                  <i className="fa-regular fa-chevron-right" />
                  <Link href="/produto/plataforma">Produto</Link>
                  <i className="fa-regular fa-chevron-right" />
                  <Link className="current" href="/produto/plataforma">
                    Plataforma
                  </Link>
                </div>

                <h1
                  className="title wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".4s"
                >
                  Plataforma Identiq para verificação, risco e compliance
                </h1>

                <p
                  className="disc wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".6s"
                >
                  Configure jornadas, regras e decisões em um só lugar. Acompanhe trilhas, evidências e
                  performance do fluxo com visão completa da operação.
                </p>

                <div className="d-flex gap-3 mt--30">
                  <Link
                    href="/contato"
                    className="rts-btn btn-primary wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Falar com especialista
                    <Image
                      className="injectable"
                      src="/assets/images/service/icons/13.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>

                  <Link
                    href="/produto/api"
                    className="rts-btn btn-border btn-bold wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Ver API e webhooks
                    <Image
                      src="/assets/images/service/icons/13.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="thumbnail-bannr-service-right jarallax">
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

        <div className="shape-area-start">
          <Image
            src="/assets/images/banner/06.png"
            alt="Shape"
            className="one wow move-right"
            width={300}
            height={120}
          />
          <Image
            src="/assets/images/banner/07.png"
            alt="Shape"
            className="two wow move-left"
            width={200}
            height={120}
          />
        </div>
      </div>

      {/* cards de navegação do produto */}
      <div className="gap-service-area rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-inner-with-sub">
                <span>Produto</span>
                <h2 className="title">O painel que controla o fluxo</h2>
                <p className="disc">
                  Configure, acompanhe e evolua decisões com regras por risco, trilhas para auditoria e
                  visibilidade ponta a ponta.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--50">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="single-service-area-4 in-about-page">
                <div className="icon">
                  <Icon icon="mdi:view-dashboard-outline" width="44" height="44" />
                </div>
                <div className="title-area">
                  <Link href="/produto/plataforma">
                    <h3 className="title animated fadeIn">Plataforma</h3>
                    <Image
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="single-service-area-4 in-about-page">
                <div className="icon">
                  <Icon icon="mdi:api" width="44" height="44" />
                </div>
                <div className="title-area">
                  <Link href="/produto/api">
                    <h3 className="title animated fadeIn">API e webhooks</h3>
                    <Image
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="single-service-area-4 in-about-page">
                <div className="icon">
                  <Icon icon="mdi:clipboard-check-outline" width="44" height="44" />
                </div>
                <div className="title-area">
                  <Link href="/produto/workflows">
                    <h3 className="title animated fadeIn">Workflows e regras</h3>
                    <Image
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="single-service-area-4 in-about-page">
                <div className="icon">
                  <Icon icon="mdi:shield-check-outline" width="44" height="44" />
                </div>
                <div className="title-area">
                  <Link href="/produto/seguranca">
                    <h3 className="title animated fadeIn">Segurança</h3>
                    <Image
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="Arrow"
                      width={18}
                      height={18}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* o que dá pra fazer na plataforma */}
      <div className="rts-service-provide-area rts-section-gap">
        <div className="container-s-float">
          <div className="row">
            <div className="col-lg-12">
              {/* item 1 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <Icon
                    icon="mdi:clipboard-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Configurar regras e rotas</h3>
                  <p className="disc">
                    Defina critérios por risco, perfil e canal para aprovar, revisar ou bloquear com
                    consistência.
                  </p>
                </div>
                <Link href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas">
                  <span className="visually-hidden">Ir para Auditoria e trilhas</span>
                </Link>
              </div>

              {/* item 2 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <Icon
                    icon="mdi:timeline-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Trilhas e evidências por caso</h3>
                  <p className="disc">
                    Acompanhe eventos, decisões e reprocessos com histórico para auditoria e governança.
                  </p>
                </div>
                <Link href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas">
                  <span className="visually-hidden">Ir para Auditoria e trilhas</span>
                </Link>
              </div>

              {/* item 3 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <Icon
                    icon="mdi:account-search-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Revisão manual quando necessário</h3>
                  <p className="disc">
                    Direcione casos específicos para revisão com contexto e evidências para decisão
                    rápida.
                  </p>
                </div>
                <Link href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas">
                  <span className="visually-hidden">Ir para Auditoria e trilhas</span>
                </Link>
              </div>

              {/* item 4 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <Icon
                    icon="mdi:chart-line"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Performance do fluxo</h3>
                  <p className="disc">
                    Visibilidade de resultados para ajustar regras e reduzir falso positivo com melhoria
                    contínua.
                  </p>
                </div>
                <Link href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas">
                  <span className="visually-hidden">Ir para Auditoria e trilhas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* segmentos */}
      <MoreSolutions />

      {/* CTA final */}
      <CtaFour />

      <FooterOne />
      <BackToTop />
    </div>
  );
}