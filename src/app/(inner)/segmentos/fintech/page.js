// SLUG: /segmentos/fintech
// sem hífen

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Fintech from "@/components/feature/Fintechs"; // use o FeatureTwo de fintech que você já fez
import MoreSolutions from "@/components/service-component/MoreSolution"; // seu carrossel de segmentos

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
                    <h1 className="title">Identiq para fintechs</h1>
                    <p className="disc">
                      Onboarding seguro, decisões em tempo real e compliance com trilhas. Reduza fraude
                      e aumente aprovações com verificação e risco configuráveis.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Fintechs precisam crescer rápido sem perder controle. A Identiq ajuda sua operação
                      a validar identidade, aplicar biometria quando necessário e tomar decisões com
                      score e regras para aprovar, revisar ou reprovar com consistência.
                    </p>
                    <p className="disc">
                      Você configura políticas por perfil, canal e produto para reduzir falso positivo e
                      manter uma jornada rápida. Com API e webhooks, o resultado volta para seu sistema
                      em tempo real para seguir o fluxo de cadastro e transação.
                    </p>
                    <p className="disc">
                      Além do onboarding, o monitoramento contínuo ajuda a detectar mudanças de padrão,
                      tentativas repetidas e sinais suspeitos ao longo do tempo, mantendo trilhas para
                      auditoria e governança.
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
                      Principais casos de uso em fintechs incluem abertura de conta, aumento de limite,
                      cadastro de beneficiários, validação de identidade em operações sensíveis e redução
                      de fraude em transações.
                    </p>
                    <p className="disc">
                      Combine KYC, documentos, biometria, face scan e match, device fingerprinting e score
                      de risco para ter decisões mais precisas e menos perda operacional.
                    </p>
                    <p className="disc">
                      Com trilhas e auditoria, seu time ganha visibilidade do que aconteceu em cada caso
                      e mantém evidências para governança e compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Fintech />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para entender como a Identiq pode reduzir fraude e aumentar
                  aprovações no seu onboarding com políticas e regras configuráveis.
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