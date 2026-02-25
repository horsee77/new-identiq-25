// SLUG: /servicos/treinamento
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
                <h1 className="title">Treinamento e onboarding</h1>
                <h3 className="title">
                  Time alinhado <span>e operação segura</span>
                </h3>

                <div className="single-career-wrapper">
                  <div className="single">
                    <h5 className="title">Foco</h5>
                    <span>Operação, risco e compliance</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Formato</h5>
                    <span>Workshops e sessões guiadas</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Entrega</h5>
                    <span>Playbooks e boas práticas</span>
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
                  O treinamento da Identiq prepara seu time para operar o fluxo com confiança. A gente
                  ensina como interpretar decisões, usar trilhas para auditoria, ajustar regras e
                  manter consistência no dia a dia, sem depender de tentativa e erro.
                </p>

                <h2 className="title">O que entregamos</h2>

                <h4 className="title">Onboarding do time</h4>
                <p>
                  Apresentação do fluxo, eventos, status e como as decisões voltam por API e webhooks,
                  com exemplos práticos para operação e time técnico.
                </p>

                <h6 className="title">Leitura de risco e decisões</h6>
                <p>
                  Treinamos o time para entender aprovar, revisar e bloquear, incluindo interpretação
                  de sinais, consistência e redução de falso positivo.
                </p>

                <h6 className="title">Trilhas e auditoria</h6>
                <p>
                  Como consultar histórico, evidências e eventos por caso para auditoria, governança e
                  investigação interna.
                </p>

                <h6 className="title">Boas práticas de revisão</h6>
                <p>
                  Orientação para revisão manual, critérios de escalonamento e padronização de decisões
                  para reduzir inconsistência.
                </p>

                <h6 className="title">Playbook e rotina</h6>
                <p>
                  Entregamos um playbook com regras, rotas, métricas e um modelo de rotina para
                  acompanhamento e melhoria contínua.
                </p>

                <h2 className="title mt--35">Para quem</h2>
                <p>
                  Times de risco, operação, compliance e tecnologia que precisam operar com velocidade,
                  consistência e governança.
                </p>

                <h2 className="title mt--35">O que você precisa ter</h2>
                <p className="mb--15">Lista de pessoas e papéis (risco, compliance, tech, operação)</p>
                <p className="mb--15">Fluxo atual e metas (aprovação, fraude, chargeback)</p>
                <p className="mb--15">Principais dúvidas e casos recorrentes da operação</p>

                <h2 className="title mt--35">Por que fazer com a Identiq</h2>
                <p>
                  Porque um time bem treinado reduz erros, acelera decisões e melhora performance do
                  fluxo com governança e trilhas, sem retrabalho.
                </p>
              </div>
            </div>

            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10">
              <div className="apply-right-area-sticky">
                <div className="sticky-inner">
                  <div className="apply-now-card">
                    <span className="pre">Pronto para treinar seu time</span>
                    <a href="/contato" className="rts-btn btn-primary">
                      Falar com a Identiq
                    </a>
                    <p>
                      A gente organiza o onboarding, treina operação e tech e entrega playbooks para
                      manter consistência e evolução contínua.
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
                        <Icon icon="mdi:school-outline" width="28" height="28" />
                        <p>Onboarding rápido do time</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clipboard-check-outline" width="28" height="28" />
                        <p>Playbooks e padrões claros</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:account-multiple-check-outline" width="28" height="28" />
                        <p>Operação mais consistente</p>
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
                        <Icon icon="mdi:timeline-check-outline" width="28" height="28" />
                        <p>Uso correto de trilhas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:api" width="28" height="28" />
                        <p>Alinhamento tech e operação</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:chart-line" width="28" height="28" />
                        <p>Melhoria contínua por métricas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clock-fast" width="28" height="28" />
                        <p>Decisões mais rápidas</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:scale-balance" width="28" height="28" />
                        <p>Apoio ao compliance</p>
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