// SLUG: /servicos/customizacao
// sem hífen

"use client";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaFour from "@/components/cta/CtaFour";
import { Icon } from "@iconify/react";

function Page() {
  return (
    <>
      <HeaderTwo />

      {/* service single banner area start */}
      <div className="career-single-banner-area rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner">
                <span className="pre">Serviços</span>
                <h1 className="title">Customização de fluxos</h1>
                <h3 className="title">
                  Ajuste regras e etapas <span>do seu jeito</span>
                </h3>

                <div className="single-career-wrapper">
                  <div className="single">
                    <h5 className="title">Foco</h5>
                    <span>Jornadas, regras e critérios</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Formato</h5>
                    <span>Configuração guiada</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Entrega</h5>
                    <span>Fluxo otimizado e consistente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service single banner area end */}

      {/* service single bottom main start */}
      <div className="career-single-bottom-main-start">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-6  rts-section-gap">
              <div className="left-career-single">
                <h2 className="title">Sobre</h2>
                <p>
                  A customização da Identiq permite adaptar o fluxo ao seu cenário. Você define regras
                  por risco, canais e perfis e escolhe quando aplicar validações como documentos,
                  biometria, face scan e match e device fingerprinting, mantendo fricção mínima.
                </p>

                <h2 className="title">O que entregamos</h2>

                <h4 className="title">Jornadas por perfil e canal</h4>
                <p>
                  Criamos variações do fluxo para diferentes públicos, produtos e canais, com níveis de
                  exigência configuráveis para cada cenário.
                </p>

                <h6 className="title">Regras e limites</h6>
                <p>
                  Definimos critérios por valor, comportamento e risco, com rotas claras para aprovar,
                  revisar ou bloquear, reduzindo inconsistência e retrabalho.
                </p>

                <h6 className="title">Redução de falso positivo</h6>
                <p>
                  Ajustamos thresholds e combinações de sinais para evitar bloqueios desnecessários e
                  aumentar aprovações com controle.
                </p>

                <h6 className="title">Fluxo de revisão manual</h6>
                <p>
                  Quando necessário, estruturamos rotas de revisão com trilhas e evidências para
                  auditoria, garantindo governança e rastreabilidade.
                </p>

                <h6 className="title">Teste e iteração</h6>
                <p>
                  Rodamos ajustes contínuos com base em performance, aprendizados e métricas para manter
                  o fluxo sempre eficiente.
                </p>

                <h2 className="title mt--35">Para quem</h2>
                <p>
                  Operações que precisam adaptar o nível de segurança sem perder conversão, com regras
                  claras e rotas consistentes para o time.
                </p>

                <h2 className="title mt--35">O que você precisa ter</h2>
                <p className="mb--15">Cenários de risco e exceções do seu fluxo</p>
                <p className="mb--15">Definição de quando revisar manualmente</p>
                <p className="mb--15">Métricas atuais de aprovação, fraude e chargeback</p>

                <h2 className="title mt--35">Por que fazer com a Identiq</h2>
                <p>
                  Porque você ganha um fluxo configurado para sua realidade, com ajustes finos para
                  reduzir falso positivo e manter governança com trilhas.
                </p>
              </div>
            </div>

            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10">
              <div className="apply-right-area-sticky">
                <div className="sticky-inner">
                  <div className="apply-now-card">
                    <span className="pre">Pronto para customizar seu fluxo</span>
                    <a href="/contato" className="rts-btn btn-primary">
                      Falar com a Identiq
                    </a>
                    <p>
                      A gente entende seu cenário e ajusta regras e jornadas para reduzir fricção e
                      aumentar aprovações com segurança.
                    </p>
                    <p>
                      * Ao enviar, você concorda com nossa <br />
                      <a href="/privacy-policy">Política de Privacidade ↗</a>
                    </p>
                  </div>

                  <div className="apply-bottom-wrapper">
                    <h3 className="title">Benefícios</h3>
                    <div className="benefits-wrapper-card">
                      <div className="single">
                        <Icon icon="mdi:clipboard-check-outline" width="28" height="28" />
                        <p>Regras configuráveis por cenário</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:account-multiple-check-outline" width="28" height="28" />
                        <p>Fluxos por perfil e canal</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:filter-check-outline" width="28" height="28" />
                        <p>Menos falso positivo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:chart-line" width="28" height="28" />
                        <p>Mais aprovações com controle</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:shield-check-outline" width="28" height="28" />
                        <p>Menos fraude e abuso</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:account-search-outline" width="28" height="28" />
                        <p>Rotas de revisão quando necessário</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:timeline-check-outline" width="28" height="28" />
                        <p>Trilhas para auditoria</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clock-fast" width="28" height="28" />
                        <p>Decisão em tempo real</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:radar" width="28" height="28" />
                        <p>Melhoria contínua por métricas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:api" width="28" height="28" />
                        <p>Integração simples no fluxo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* service single bottom main end */}

      <CtaFour />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default Page;