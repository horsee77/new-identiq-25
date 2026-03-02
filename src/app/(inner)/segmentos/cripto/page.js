// SLUG: /segmentos/cripto
// sem hífen

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Cripto from "@/components/feature/cripto"; // componente de benefícios de cripto e web3
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
                    <h1 className="title">Identiq para cripto e web3</h1>
                    <p className="disc">
                      Verificação e compliance para reduzir abuso, melhorar decisões e manter
                      experiência rápida para usuários legítimos.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Produtos cripto e web3 sofrem com abuso, múltiplas contas e tentativas repetidas.
                      A Identiq ajuda sua operação a validar identidade no onboarding e aplicar regras
                      por risco para aprovar, revisar ou bloquear com consistência.
                    </p>
                    <p className="disc">
                      Use device fingerprinting e score e risco para detectar recorrência, padrões
                      suspeitos e mudanças de comportamento. Quando necessário, aplique validação de
                      documentos, biometria e face scan e match para elevar o nível de segurança em
                      fluxos sensíveis.
                    </p>
                    <p className="disc">
                      Para compliance, combine AML, screening e trilhas para auditoria. Com API e
                      webhooks, as decisões voltam para o seu sistema em tempo real, sem travar a
                      jornada.
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
                      Principais casos de uso em cripto e web3 incluem onboarding de usuários, prevenção
                      de múltiplas contas, redução de abuso em campanhas, validações adicionais para
                      operações de maior risco e monitoramento contínuo de padrões suspeitos.
                    </p>
                    <p className="disc">
                      Combine device fingerprinting, políticas e regras, score e risco e auditoria e
                      trilhas para reduzir falsos positivos e aumentar precisão das decisões.
                    </p>
                    <p className="disc">
                      Com registros e evidências por evento, seu time ganha governança para revisões e
                      investigações internas quando necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Cripto />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para reduzir abuso e melhorar decisões com verificação, risco e
                  trilhas para auditoria no seu produto cripto.
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