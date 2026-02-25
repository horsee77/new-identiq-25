"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Icon } from "@iconify/react";

export default function MoreSolutions() {
  const segments = [
    {
      icon: "mdi:chart-line",
      title: "Fintechs",
      description: "Onboarding seguro, menos fraude e decisões rápidas para crescer com confiança.",
      href: "/segmentos/fintech",
    },
    {
      icon: "mdi:cart-outline",
      title: "E-commerce",
      description: "Reduza chargeback e aumente conversão com risco em tempo real no checkout.",
      href: "/segmentos/ecommerce",
    },
    {
      icon: "mdi:storefront-outline",
      title: "Marketplaces",
      description: "Valide compradores e sellers com regras, risco e trilhas para auditoria.",
      href: "/segmentos/marketplace",
    },
    {
      icon: "mdi:bank-outline",
      title: "Bancos e Instituições",
      description: "KYC, AML e governança com trilhas para compliance no ciclo completo.",
      href: "/segmentos/bancos",
    },
    {
      icon: "mdi:currency-btc",
      title: "Cripto e Web3",
      description: "Verificação e compliance para reduzir abuso e manter experiência rápida.",
      href: "/segmentos/cripto",
    },
    {
      icon: "mdi:shield-home-outline",
      title: "Seguros",
      description: "Menos fraude na contratação com validações, score de risco e auditoria.",
      href: "/segmentos/seguros",
    },
  ];

  return (
    <div className="rts-solution-area rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-center-style-two">
              <h2 className="title">Segmentos</h2>
            </div>
          </div>
        </div>

        <div className="row g-5 mt--30">
          <div className="float-right-style">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3.8}
              spaceBetween={30}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 25 },
                768: { slidesPerView: 2, spaceBetween: 25 },
                980: { slidesPerView: 3, spaceBetween: 25 },
                1280: { slidesPerView: 3.8, spaceBetween: 25 },
              }}
              className="mySwiper-service-inenr"
            >
              {segments.map((segment) => (
                <SwiperSlide key={segment.href}>
                  <div className="single-service-style-two">
                    <div className="inner">
                      <div className="icon">
                        <Icon icon={segment.icon} width="40" height="40" />
                      </div>

                      <div className="bottom">
                        <Link href={segment.href}>
                          <h3 className="title animated fadeIn">
                            {segment.title}
                            <Image
                              src="/assets/images/service/icons/13.svg"
                              alt="seta"
                              width={18}
                              height={18}
                            />
                          </h3>
                          <p className="disc">{segment.description}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}