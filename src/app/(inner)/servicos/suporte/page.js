// SLUG: /servicos/suporte
// sem hífen

"use client";

import BackToTop from "@/components/common/BackToTop";
import FooterFour from "@/components/footer/FooterFour";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaSeven from "@/components/cta/CtaSeven";
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
                <h1 className="title">Suporte e sucesso do cliente</h1>
                <h3 className="title">
                  Operação estável <span>e evolução contínua</span>
                </h3>

                <div className="single-career-wrapper">
                  <div className="single">
                    <h5 className="title">Foco</h5>
                    <span>Atendimento, operação e performance</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Formato</h5>
                    <span>Suporte por canal e acompanhamento</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Entrega</h5>
                    <span>Melhoria contínua com métricas</span>
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
                  O suporte da Identiq acompanha sua operação no dia a dia. A gente ajuda a manter o
                  fluxo estável, ajustar regras, investigar casos e evoluir performance para reduzir
                  fraude e aumentar aprovações com consistência.
                </p>

                <h2 className="title">O que entregamos</h2>

                <h4 className="title">Atendimento e resolução</h4>
                <p>
                  Suporte para dúvidas técnicas e operacionais, com orientação sobre eventos, status,
                  reprocessos e boas práticas de integração.
                </p>

                <h6 className="title">Acompanhamento de performance</h6>
                <p>
                  Revisão de métricas como aprovação, fraude, chargeback e falso positivo para ajustar
                  regras e thresholds com base no que funciona na sua operação.
                </p>

                <h6 className="title">Investigação de casos</h6>
                <p>
                  Apoio em análises com trilhas e evidências por evento para entender o que aconteceu em
                  cada decisão e orientar mudanças no fluxo.
                </p>

                <h6 className="title">Ajustes em regras e jornadas</h6>
                <p>
                  Mudanças controladas em políticas, regras e rotas de decisão para equilibrar conversão
                  e segurança conforme o cenário evolui.
                </p>

                <h6 className="title">Rotina de melhoria contínua</h6>
                <p>
                  Cadência com recomendações e próximos passos para manter seu fluxo sempre otimizado,
                  reduzindo fricção e perdas ao longo do tempo.
                </p>

                <h2 className="title mt--35">Para quem</h2>
                <p>
                  Operações que precisam de estabilidade, velocidade de resposta e evolução contínua do
                  antifraude e compliance.
                </p>

                <h2 className="title mt--35">O que você precisa ter</h2>
                <p className="mb--15">Acesso aos principais KPIs e objetivos do fluxo</p>
                <p className="mb--15">Responsáveis por risco e por integração técnica</p>
                <p className="mb--15">Processo de revisão e aprovação de mudanças</p>

                <h2 className="title mt--35">Por que fazer com a Identiq</h2>
                <p>
                  Porque você não fica sozinho depois do go live. Você tem acompanhamento para manter
                  performance, reduzir incidentes e evoluir regras com base em dados.
                </p>
              </div>
            </div>

            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10">
              <div className="apply-right-area-sticky">
                <div className="sticky-inner">
                  <div className="apply-now-card">
                    <span className="pre">Pronto para evoluir sua operação</span>
                    <a href="/contato" className="rts-btn btn-primary">
                      Falar com a Identiq
                    </a>
                    <p>
                      A gente acompanha sua operação e ajuda a melhorar decisões com ajustes contínuos e
                      suporte rápido.
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
                        <Icon icon="mdi:headset" width="28" height="28" />
                        <p>Suporte rápido e orientado</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:chart-line" width="28" height="28" />
                        <p>Ajustes por performance</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:filter-check-outline" width="28" height="28" />
                        <p>Menos falso positivo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:shield-check-outline" width="28" height="28" />
                        <p>Menos fraude e perdas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clipboard-check-outline" width="28" height="28" />
                        <p>Regras sempre atualizadas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:timeline-check-outline" width="28" height="28" />
                        <p>Investigação com trilhas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:radar" width="28" height="28" />
                        <p>Monitoramento e alertas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clock-fast" width="28" height="28" />
                        <p>Decisão consistente</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:api" width="28" height="28" />
                        <p>Apoio na integração</p>
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

      <CtaSeven />
      <FooterFour />
      <BackToTop />
    </>
  );
}

export default Page;