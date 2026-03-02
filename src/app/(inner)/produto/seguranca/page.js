// SLUG: /produto/seguranca
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
                  <Link className="current" href="/produto/seguranca">
                    Segurança
                  </Link>
                </div>

                <h1
                  className="title wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".4s"
                >
                  Segurança para proteger dados, integrações e decisões
                </h1>

                <p
                  className="disc wow fadeInUp"
                  data-wow-offset={120}
                  data-wow-delay=".6s"
                >
                  Controle acesso, proteja a comunicação e mantenha rastreabilidade. A Identiq ajuda sua
                  operação a aplicar boas práticas de segurança e governança com trilhas e evidências.
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
                    href="/produto/api"
                    className="rts-btn btn-border btn-bold wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Ver API e webhooks
                    <img src="/assets/images/service/icons/13.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="thumbnail-bannr-service-right jarallax">
                <img
                  className="jarallax-img"
                  src="/assets/images/service/04.webp"
                  alt="segurança"
                />
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
                <h2 className="title">Governança e proteção ponta a ponta</h2>
                <p className="disc">
                  Segurança aplicada na plataforma, na integração e nas trilhas do fluxo para reduzir risco
                  operacional e manter controle.
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

      {/* o que dá pra fazer em segurança */}
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
                    icon="mdi:account-key-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Controle de acesso</h3>
                  <p className="disc">
                    Permissões por papel e ambientes para reduzir risco operacional e manter governança na operação.
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
                  <Icon
                    icon="mdi:lock-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Proteção de integrações</h3>
                  <p className="disc">
                    Autenticação e assinatura de webhooks para garantir integridade e reduzir risco de abuso.
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
                  <Icon
                    icon="mdi:timeline-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Trilhas e rastreabilidade</h3>
                  <p className="disc">
                    Eventos e decisões com histórico para auditoria, reprocessos e evidências por caso.
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
                    icon="mdi:shield-check-outline"
                    width="44"
                    height="44"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Boas práticas no fluxo</h3>
                  <p className="disc">
                    Regras e políticas por risco para reduzir fraude, manter consistência e proteger decisões críticas.
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