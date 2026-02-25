
import Image from "next/image";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
  return (
    <div>
      <HeaderTwo />

      <div className="rts-career-banner-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career-banner-wrapper">
                <h1 className="title">Validação de Documentos para reduzir fraudes no cadastro</h1>
                <p className="disc">
                  Padronize a análise de documentos e dados para evitar inconsistências, reduzir risco
                  e aprovar usuários legítimos com mais segurança. A Identiq apoia seu onboarding com
                  validações e regras configuráveis.
                </p>
                <a href="/contato" className="rts-btn btn-primary btn-bold">
                  Falar com especialista
                </a>
              </div>
            </div>

            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 pt_md--30 pt_sm--30">
              <div className="thumbnail-top jarallax thumbnail-consultancy" data-speed=".85">
                <Image
                  className="jarallax-img"
                  src="/assets/images/industry/10.webp"
                  alt="career"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-one-industry">
        <div className="consultancy-bottom rts-section-gap career-two-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                <div className="thumbnail-consultancy jarallax">
                  <Image
                    className="jarallax-img"
                    src="/assets/images/industry/02.webp"
                    alt="consultancy"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="career-right-two-wrapper">
                  <h2 className="title">Como funciona a validação de documentos</h2>
                  <p>
                    Um fluxo simples para confirmar consistência de informações e identificar
                    tentativas de falsificação no onboarding, com etapas configuráveis por política.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Captura do documento pelo usuário</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Validação de campos e consistência de dados</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Detecção de sinais de fraude e inconsistências</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Regras para aprovar, revisar ou reprovar</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Resultado entregue por API e webhooks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="consultancy-bottom rts-section-gapBottom career-two-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="career-right-two-wrapper">
                  <h2 className="title">Regras configuráveis para cada cenário</h2>
                  <p>
                    Defina exigências por produto, canal e perfil. Ajuste o nível de validação para
                    equilibrar conversão e risco, reduzindo falso positivo e travas desnecessárias.
                  </p>

                  <div className="check-wrapper-main">
                    <div className="single-wrapper">
                      <div className="check-wrapper">
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Fluxos diferentes para baixo e alto risco</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Revisão manual quando necessário</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Trilhas e registros para auditoria</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Integração simples no seu onboarding</p>
                        </div>
                        <div className="single-check">
                          <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                          <p>Combinação com biometria quando preciso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                <div className="thumbnail-consultancy jarallax">
                  <Image
                    className="jarallax-img"
                    src="/assets/images/industry/03.webp"
                    alt="consultancy"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* industry service area start */}
      <div className="industry-serviuce-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career-right-two-wrapper industry">
                <h2 className="title">
                  Benefícios da <br /> validação de documentos
                </h2>
                <p className="more">
                  Melhore decisões no cadastro com validações consistentes e reduza fraudes sem
                  aumentar fricção no onboarding.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Redução de fraude no cadastro</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Aprovações mais rápidas</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Menos falso positivo</p>
                      </div>
                      <div className="single-check">
                        <Image src="/assets/images/service/01.svg" alt="service" width={20} height={20} />
                        <p>Trilhas para auditoria e compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="thumbnail-industry-thumbnail">
                <div className="thumbnail-left left-small">
                  <Image
                    src="/assets/images/industry/06.webp"
                    alt="industry"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="thumbnail-left top">
                  <Image
                    src="/assets/images/industry/07.webp"
                    alt="industry"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* industry service area end */}

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}