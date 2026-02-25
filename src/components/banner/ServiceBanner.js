import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServiceBanner() {
  return (
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
                <Link className="current" href="/solucoes">
                  Soluções
                </Link>
              </div>

              <h1
                className="title wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                Veja como a Identiq ajuda sua operação a aprovar com segurança
              </h1>

              <p
                className="disc wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                Verificação de identidade, antifraude e compliance com decisões
                em tempo real, regras configuráveis e trilhas para auditoria.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="thumbnail-bannr-service-right jarallax">
              <Image
                className="jarallax-img"
                src="/assets/images/service/04.webp"
                alt="Service banner"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="shape-area-start">
        <Image
          src="/assets/images/banner/06.png"
          alt="Service banner shape 1"
          className="one wow move-right"
          width={395}
          height={800}
        />
        <Image
          src="/assets/images/banner/07.png"
          alt="Service banner shape 2"
          className="two wow move-left"
          width={200}
          height={800}
        />
      </div>
    </div>
  );
}

export default ServiceBanner;