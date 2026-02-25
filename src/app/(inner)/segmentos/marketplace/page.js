// SLUG: /segmentos/marketplace
// sem hífen

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Marketplace from "@/components/feature/marketplace"; // use aqui o componente de benefícios do marketplace (se quiser renomear depois)
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
                    <h1 className="title">Identiq para marketplace</h1>
                    <p className="disc">
                      Valide compradores e sellers, reduza abuso e mantenha governança com regras e
                      trilhas para auditoria em toda a operação.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Em marketplaces, o risco existe dos dois lados. A Identiq ajuda sua operação a
                      validar identidade no onboarding, detectar contas suspeitas e reduzir tentativas
                      repetidas com sinais de dispositivo e comportamento.
                    </p>
                    <p className="disc">
                      Use políticas por perfil e categoria para definir quando exigir validação de
                      documentos, biometria ou face scan e match. Com score e risco, você decide em
                      tempo real quando aprovar, revisar ou bloquear, reduzindo fraude sem travar o
                      crescimento do seller.
                    </p>
                    <p className="disc">
                      Com trilhas e auditoria, você mantém histórico do caso, decisões e evidências para
                      disputas, chargeback e governança, com integração via API e webhooks.
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
                      Principais casos de uso em marketplace incluem onboarding de seller, prevenção de
                      abuso, validação para categorias sensíveis, redução de contas falsas e controle de
                      tentativas e recorrência por dispositivo.
                    </p>
                    <p className="disc">
                      Combine documentos, biometria, face scan e match, device fingerprinting e score e
                      risco para reduzir fraudes e melhorar a qualidade da base.
                    </p>
                    <p className="disc">
                      O monitoramento contínuo ajuda a detectar mudanças de padrão no ciclo de vida do
                      seller e do comprador, acionando alertas e revisão quando necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Marketplace />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para validar compradores e sellers, reduzir abuso e manter
                  governança com trilhas e regras no seu marketplace.
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