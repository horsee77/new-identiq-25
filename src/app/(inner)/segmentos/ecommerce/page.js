// SLUG: /segmentos/ecommerce
// sem hífen

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Ecommerce from "@/components/feature/ecommerce";
import MoreSolutions from "@/components/service-component/MoreSolution";

export default function Home() {
  return (
    <div className="#">
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
                    <h1 className="title">Identiq para e commerce</h1>
                    <p className="disc">
                      Reduza chargeback, diminua fraude e melhore conversão com decisões em tempo real
                      no checkout e no ciclo de vida do cliente.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      No e commerce, o risco aparece em segundos. A Identiq ajuda sua operação a avaliar
                      sinais de compra, dispositivo e comportamento para decidir quando aprovar,
                      revisar ou bloquear sem travar bons clientes.
                    </p>
                    <p className="disc">
                      Use score e regras por valor, perfil e canal para reduzir falso positivo e manter
                      conversão. Device fingerprinting ajuda a identificar tentativas repetidas e abuso,
                      evitando múltiplas compras suspeitas com o mesmo aparelho.
                    </p>
                    <p className="disc">
                      Com trilhas e auditoria, você ganha visibilidade do motivo da decisão, melhora a
                      governança e reduz disputas com registros e evidências por caso.
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
                  <img className="jarallax-img" src="assets/images/service/07.webp" alt="service" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <img className="jarallax-img" src="assets/images/service/08.webp" alt="service" />
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
                      Principais casos de uso em e commerce incluem prevenção de chargeback, bloqueio de
                      abuso, controle de tentativas, validação para compras de alto valor e verificação
                      adicional quando o risco exigir.
                    </p>
                    <p className="disc">
                      Combine device fingerprinting, score e risco, políticas e regras e monitoramento
                      contínuo para reduzir perdas e manter uma experiência rápida para compradores
                      legítimos.
                    </p>
                    <p className="disc">
                      A integração via API e webhooks permite inserir a decisão no seu checkout e nos
                      seus fluxos internos, com resposta em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreSolutions />
      <Ecommerce />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Fale com um especialista</h2>
                <p className="disc">
                  Agende uma conversa para reduzir chargeback e aumentar conversão com decisões de risco
                  em tempo real no seu e commerce.
                </p>
                <a href="/contato" className="rts-btn btn-primary wow fadeInUp" data-wow-delay=".5s">
                  Ver soluções
                  <img className="injectable" src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
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