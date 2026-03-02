// SLUG: /segmentos/seguros
// sem hífen

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Seguros from "@/components/feature/seguros"; // componente de benefícios de seguros
import MoreSolutions from "@/components/service-component/MoreSolution";

export default function Home() {
  return (
    <div>
      <HeaderTwo />

      <div>
        <div className="container-large">
          {/* service area start */}
          <div className="service-single-area-banner development-service bg_image jarallax"></div>
          {/* service area end */}
        </div>
      </div>

      <div>
        <div className="service-area-details-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="top">
                    <h1 className="title">Identiq para seguros</h1>
                    <p className="disc">
                      Reduza fraude na contratação e aumente segurança com validações, score de risco e
                      trilhas para auditoria, sem travar a experiência do cliente.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Em seguros, fraudes acontecem na contratação e também em eventos ao longo do
                      ciclo. A Identiq ajuda sua operação a validar identidade, documentos e consistência
                      de dados para reduzir tentativas suspeitas e melhorar decisões.
                    </p>
                    <p className="disc">
                      Use score e risco e políticas por perfil para definir quando exigir biometria,
                      face scan e match e validações adicionais. Com regras claras, você reduz falso
                      positivo e mantém um fluxo rápido para clientes legítimos.
                    </p>
                    <p className="disc">
                      Com trilhas e auditoria, seu time registra decisões e evidências por caso,
                      melhorando governança e facilitando revisões internas quando necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-image-mid-iamge-jarallax-area">
          <div className="container-large">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <Image
                    className="jarallax-img"
                    src="/assets/images/service/07.webp"
                    alt="service"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <Image
                    className="jarallax-img"
                    src="/assets/images/service/08.webp"
                    alt="service"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area-details-wrapper border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="mid-content">
                    <p className="disc">
                      Principais casos de uso em seguros incluem validação no onboarding, checagens para
                      produtos de maior risco, prevenção de abuso, verificação adicional quando houver
                      inconsistência e monitoramento contínuo para detectar mudanças de padrão.
                    </p>
                    <p className="disc">
                      Combine documentos, biometria, score e risco, políticas e regras e auditoria e
                      trilhas para reduzir perda operacional e melhorar consistência.
                    </p>
                    <p className="disc">
                      A integração via API e webhooks permite acionar validações e receber decisões em
                      tempo real no seu sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Seguros />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para reduzir fraude e melhorar decisões com validações e trilhas
                  para auditoria na sua operação de seguros.
                </p>
                <Link
                  href="/contato"
                  className="rts-btn btn-primary wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Ver soluções
                  <Image
                    className="injectable"
                    src="/assets/images/service/icons/13.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>

      <FooterOne />
      <BackToTop />
    </div>
  );
}