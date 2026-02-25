"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

function ServiceSix() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  const solucoes = [
    {
      icon: "mdi:account-check-outline",
      title: "KYC e onboarding",
      href: "/kyc",
      delay: 100,
    },
    {
      icon: "mdi:card-account-details-outline",
      title: "Validação de documentos",
      href: "/documentos",
      delay: 300,
    },
    {
      icon: "mdi:camera-account",
      title: "Biometria e prova de vida",
      href: "/solucoes/biometria",
      delay: 500,
    },
    {
      icon: "mdi:face-recognition",
      title: "Face scan e match",
      href: "/solucoes/facescan",
      delay: 700,
    },
    {
      icon: "mdi:chart-line",
      title: "Score e risco",
      href: "/solucoes/risco",
      delay: 100,
    },
    {
      icon: "mdi:credit-card-remove-outline",
      title: "Prevenção de chargeback",
      href: "/solucoes/chargeback",
      delay: 300,
    },
    {
      icon: "mdi:cellphone-key",
      title: "Device fingerprinting",
      href: "/solucoes/devicefingerprint",
      delay: 500,
    },
    {
      icon: "mdi:radar",
      title: "Monitoramento contínuo",
      href: "/solucoes/monitoramento",
      delay: 700,
    },
    {
      icon: "mdi:shield-search-outline",
      title: "AML e screening",
      href: "/solucoes/aml",
      delay: 100,
    },
    {
      icon: "mdi:account-tie-outline",
      title: "Sanções e PEP",
      href: "/solucoes/sancoes",
      delay: 300,
    },
    {
      icon: "mdi:timeline-check-outline",
      title: "Auditoria e trilhas",
      href: "/solucoes/auditoria",
      delay: 500,
    },
    {
      icon: "mdi:clipboard-check-outline",
      title: "Políticas e regras",
      href: "/solucoes/politicas",
      delay: 700,
    },
  ];

  return (
    <>
      {/* service area start */}
      <div className="gap-service-area rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center-inner-with-sub">
                <span>Soluções</span>
                <h2 className="title">Verificação, antifraude e compliance</h2>
                <p className="disc">
                  Construa jornadas seguras com menos fricção. Decisões em tempo real, regras
                  configuráveis e trilhas para auditoria.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--50">
            {solucoes.map((s, idx) => (
              <div
                key={`${s.title}-${idx}`}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={s.delay}
                data-aos-duration="1000"
              >
                <div className="single-service-area-4 in-about-page">
                  <div className="icon">
                    <Icon icon={s.icon} width="44" height="44" />
                  </div>

                  <div className="title-area">
                    <Link href={s.href}>
                      <h3 className="title animated fadeIn">{s.title}</h3>
                      <img
                        className="injectable"
                        src="../assets/images/service/icons/21.svg"
                        alt="icosn"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* service area end */}
    </>
  );
}

export default ServiceSix;