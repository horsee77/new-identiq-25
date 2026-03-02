// SLUG: /produto/api
// sem hífen

"use client";

import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaFour from "@/components/cta/CtaFour";
import MoreSolutions from "@/components/service-component/MoreSolution";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="">
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
                  <Link className="current" href="/produto/api">
                    API e webhooks
                  </Link>
                </div>

                <h1
                  className="title wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".4s"
                >
                  API e webhooks Identiq para decisões em tempo real
                </h1>

                <p
                  className="disc wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".6s"
                >
                  Integre rápido com endpoints e eventos do seu fluxo. Envie dados, receba status e
                  decisões por webhooks e mantenha trilhas para auditoria sem fricção.
                </p>

                <div className="d-flex gap-3 mt--30">
                  <Link
                    href="/contato"
                    className="rts-btn btn-primary wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Falar com especialista
                    <img
                      className="injectable"
                      src="/assets/images/service/icons/13.svg"
                      alt="arrow"
                    />
                  </Link>

                  <Link
                    href="/produto/workflows"
                    className="rts-btn btn-border btn-bold wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Ver workflows e regras
                    <img src="/assets/images/service/icons/13.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="thumbnail-bannr-service-right jarallax">
                <img className="jarallax-img" src="/assets/images/service/04.webp" alt="api" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape-area-start">
          <img
            src="/assets/images/banner/06.png"
            alt="shape"
            className="one wow move-right"
          />
          <img
            src="/assets/images/banner/07.png"
            alt="shape"
            className="two wow move-left"
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
                <h2 className="title">Integração simples e previsível</h2>
                <p className="disc">
                  Dispare validações por evento, receba decisões e registre trilhas. Conecte a Identiq
                  ao seu fluxo com API e webhooks.
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
                    <img
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="arrow"
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
                    <img
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="arrow"
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
                    <img
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="arrow"
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
                    <img
                      className="injectable"
                      src="/assets/images/service/icons/21.svg"
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* o que dá pra fazer na API */}
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
                  <Icon icon="mdi:send-outline" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Enviar eventos do fluxo</h3>
                  <p className="disc">
                    Dispare validações a partir de eventos como cadastro, login, transação e
                    alteração de dados.
                  </p>
                </div>
                <a href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas"></a>
              </div>

              {/* item 2 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <Icon icon="mdi:webhook" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Receber decisões por webhooks</h3>
                  <p className="disc">
                    Receba status e resultado do fluxo para aprovar, revisar ou bloquear sem polling.
                  </p>
                </div>
                <a href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas"></a>
              </div>

              {/* item 3 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <Icon icon="mdi:identifier" width="44" height="44" style={{ color: "#fff" }} />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Idempotência e rastreabilidade</h3>
                  <p className="disc">
                    Garanta consistência com ids de referência, reprocessos controlados e trilhas por
                    caso.
                  </p>
                </div>
                <a href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas"></a>
              </div>

              {/* item 4 */}
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <Icon
                    icon="mdi:lock-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Segurança no transporte</h3>
                  <p className="disc">
                    Proteja integrações com autenticação, assinatura de webhook e controles de acesso
                    conforme sua política.
                  </p>
                </div>
                <a href="/solucoes/auditoria" aria-label="Ir para Auditoria e trilhas"></a>
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