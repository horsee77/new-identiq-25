// SLUG: /segmentos/bancos
// sem hífen

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Bancos from "@/components/feature/bancos"; // componente de benefícios de bancos e instituições
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
                    <h1 className="title">Identiq para bancos e instituições</h1>
                    <p className="disc">
                      KYC, AML e governança com trilhas. Decisões consistentes para reduzir fraude e
                      apoiar compliance no ciclo completo do cliente.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Bancos e instituições precisam de controles fortes, rastreabilidade e políticas
                      bem definidas. A Identiq ajuda sua operação a estruturar jornadas de verificação
                      com regras por risco, integrando validação de documentos, biometria e face scan
                      quando necessário.
                    </p>
                    <p className="disc">
                      Para compliance, use AML, screening e checagens de sanções e PEP, com trilhas e
                      evidências por caso. Você define rotas para aprovação, revisão e bloqueio,
                      mantendo consistência e visibilidade para auditorias.
                    </p>
                    <p className="disc">
                      Com integração via API e webhooks, as decisões voltam para o seu core em tempo
                      real, facilitando abertura de conta, aumento de limite e validações em operações
                      sensíveis.
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
                      Principais casos de uso em bancos e instituições incluem abertura de conta,
                      revalidação de cadastro, validações em transações de maior risco, monitoramento
                      contínuo do cliente e rotas de revisão com trilhas para auditoria.
                    </p>
                    <p className="disc">
                      Combine políticas e regras, auditoria, AML, sanções e PEP e score e risco para
                      fortalecer governança, reduzir exposição e melhorar consistência operacional.
                    </p>
                    <p className="disc">
                      Com registros e evidências, seu time ganha transparência do que aconteceu em cada
                      decisão e reduz tempo de auditoria e investigação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Bancos />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para estruturar KYC, AML e trilhas com regras por risco e decisões
                  em tempo real para sua instituição.
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