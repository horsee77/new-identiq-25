// SLUG: /servicos/consultoria
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
                <h1 className="title">Consultoria de risco e compliance</h1>
                <h3 className="title">
                  Diagnóstico e plano <span>para seu fluxo</span>
                </h3>

                <div className="single-career-wrapper">
                  <div className="single">
                    <h5 className="title">Foco</h5>
                    <span>Risco, antifraude e compliance</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Formato</h5>
                    <span>Remoto ou presencial por agenda</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Entrega</h5>
                    <span>Regras, rotas e recomendações</span>
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
                  A consultoria da Identiq ajuda sua operação a equilibrar conversão e segurança. A
                  gente mapeia seu fluxo, identifica pontos de risco e define políticas claras para
                  aprovar, revisar ou bloquear com consistência, mantendo trilhas e governança.
                </p>

                <h2 className="title">O que entregamos</h2>

                <h4 className="title">Diagnóstico do fluxo</h4>
                <p>
                  Revisamos onboarding e etapas críticas para entender onde ocorrem fraudes, quais são
                  os gargalos e quais sinais valem mais para seu contexto.
                </p>

                <h6 className="title">Políticas e regras por risco</h6>
                <p>
                  Definimos critérios por perfil, canal e produto. Você ganha rotas de decisão para
                  aprovar, revisar ou bloquear, reduzindo falso positivo e melhorando aprovação.
                </p>

                <h6 className="title">Estratégia de validações</h6>
                <p>
                  Recomendamos quando aplicar documentos, biometria, face scan e match, device
                  fingerprinting e monitoramento contínuo, sempre com foco em fricção mínima.
                </p>

                <h6 className="title">Trilhas e auditoria</h6>
                <p>
                  Estruturamos como registrar eventos e decisões para facilitar auditoria, governança e
                  revisões internas, com evidências por caso.
                </p>

                <h6 className="title">Plano de implementação</h6>
                <p>
                  Você recebe um plano de ação por prioridade, com etapas, responsáveis e métricas para
                  acompanhar melhoria contínua.
                </p>

                <h2 className="title mt--35">Para quem</h2>
                <p>
                  Fintechs, e commerce, marketplaces, bancos, cripto e seguros que precisam reduzir
                  fraude, aumentar aprovações e ganhar consistência operacional.
                </p>

                <h2 className="title mt--35">O que você precisa ter</h2>
                <p className="mb--15">Objetivo do fluxo e principais KPIs (aprovação, fraude, chargeback)</p>
                <p className="mb--15">Descrição do onboarding e etapas críticas</p>
                <p className="mb--15">Histórico de casos e padrões suspeitos mais comuns</p>

                <h2 className="title mt--35">Por que fazer com a Identiq</h2>
                <p>
                  Porque você não ganha só recomendações. Você ganha políticas aplicáveis, rotas de
                  decisão e um plano prático para integrar, medir e evoluir com trilhas.
                </p>
              </div>
            </div>

            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10">
              <div className="apply-right-area-sticky">
                <div className="sticky-inner">
                  <div className="apply-now-card">
                    <span className="pre">Pronto para organizar seu risco e compliance</span>
                    <a href="/contato" className="rts-btn btn-primary">
                      Falar com a Identiq
                    </a>
                    <p>
                      A gente entende seu cenário e indica o caminho mais rápido para melhorar decisões
                      com segurança e governança.
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
                        <Icon icon="mdi:chart-line" width="28" height="28" />
                        <p>Mais aprovações com controle</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:shield-check-outline" width="28" height="28" />
                        <p>Menos fraude e menos perdas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:filter-check-outline" width="28" height="28" />
                        <p>Menos falso positivo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clipboard-check-outline" width="28" height="28" />
                        <p>Regras claras e aplicáveis</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:timeline-check-outline" width="28" height="28" />
                        <p>Trilhas para auditoria</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:api" width="28" height="28" />
                        <p>Integração e operação simples</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clock-fast" width="28" height="28" />
                        <p>Decisão em tempo real</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:radar" width="28" height="28" />
                        <p>Monitoramento contínuo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:scale-balance" width="28" height="28" />
                        <p>Apoio ao compliance</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:account-check-outline" width="28" height="28" />
                        <p>Onboarding mais seguro</p>
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