// SLUG: /produto/plataforma
// sem hífen

"use client";

import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import MoreSolutions from "@/components/service-component/MoreSolution"; // seu carrossel de segmentos
import CtaFour from "@/components/cta/CtaFour";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="#">
      <HeaderTwo />

      {/* banner */}
      <div className="rts-service-banner-area ptb--80 position-relative">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 mb_md--30 mb_sm--30">
              <div className="service-banner-content-wrapper">
                <div className="bread-plug wow fadeInUp" data-wow-offset={120} data-wow-delay=".2s">
                  <Link href="/">Home</Link>
                  <i className="fa-regular fa-chevron-right" />
                  <Link className="current" href="/produto/plataforma">Produto</Link>
                </div>

                <h1 className="title wow fadeInUp" data-wow-offset={120} data-wow-delay=".4s">
                  Produto Identiq para verificação, risco e compliance
                </h1>

                <p className="disc wow fadeInUp" data-wow-offset={120} data-wow-delay=".6s">
                  Uma plataforma para validar identidades, reduzir fraude e manter trilhas para auditoria,
                  com decisões em tempo real e integração via API e webhooks.
                </p>

                <div className="d-flex gap-3 mt--30">
                  <Link href="/produto/api" className="rts-btn btn-primary wow fadeInUp" data-wow-delay=".7s">
                    Ver API
                    <img className="injectable" src="assets/images/service/icons/13.svg" alt="arrow" />
                  </Link>
                  <Link href="/contato" className="rts-btn btn-border btn-bold wow fadeInUp" data-wow-delay=".8s">
                    Falar com especialista
                    <img src="assets/images/service/icons/13.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="thumbnail-bannr-service-right jarallax">
                <img className="jarallax-img" src="assets/images/service/04.webp" alt="produto" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape-area-start">
          <img src="assets/images/banner/06.png" alt="shape" className="one wow move-right" />
          <img src="assets/images/banner/07.png" alt="shape" className="two wow move-left" />
        </div>
      </div>

      {/* pilares do produto */}
      <div className="gap-service-area rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-inner-with-sub">
                <span>Produto</span>
                <h2 className="title">Tudo em um só lugar</h2>
                <p className="disc">
                  Escolha as soluções, configure regras e acompanhe trilhas para auditoria com visibilidade do fluxo.
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
                    <img className="injectable" src="assets/images/service/icons/21.svg" alt="arrow" />
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
                    <img className="injectable" src="assets/images/service/icons/21.svg" alt="arrow" />
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
                    <img className="injectable" src="assets/images/service/icons/21.svg" alt="arrow" />
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
                    <img className="injectable" src="assets/images/service/icons/21.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* como funciona */}
      <div className="rts-solution-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-style-two">
                <h2 className="title">Como o produto funciona</h2>
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
                    <img src="assets/images/consultancy/03.webp" alt="step" />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Evento do fluxo</h4>
                    <p>Você envia o evento do cadastro ou transação.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <img src="assets/images/consultancy/04.webp" alt="step" />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Validações</h4>
                    <p>Documentos, biometria, face match e sinais do dispositivo.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <img src="assets/images/consultancy/05.webp" alt="step" />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Score e regras</h4>
                    <p>Aplicação de políticas por risco e limites configuráveis.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <img src="assets/images/consultancy/06.webp" alt="step" />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Decisão e trilhas</h4>
                    <p>Aprovar, revisar ou bloquear com registro para auditoria.</p>
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

      {/* segmentos */}
      <MoreSolutions />

      {/* CTA final */}
      <CtaFour />

      <FooterOne />
      <BackToTop />
    </div>
  );
}