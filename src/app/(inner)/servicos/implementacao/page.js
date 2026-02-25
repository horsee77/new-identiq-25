// SLUG: /servicos/implementacao
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
                <h1 className="title">Implementação e integrações</h1>
                <h3 className="title">
                  Coloque em produção <span>sem fricção</span>
                </h3>

                <div className="single-career-wrapper">
                  <div className="single">
                    <h5 className="title">Foco</h5>
                    <span>API, webhooks e fluxos</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Formato</h5>
                    <span>Integração guiada por especialistas</span>
                  </div>
                  <div className="single">
                    <h5 className="title">Entrega</h5>
                    <span>Go live com métricas e trilhas</span>
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
                  A implementação da Identiq acelera seu go live com segurança e previsibilidade. A
                  gente conecta sua aplicação à API e webhooks, configura jornadas e garante que as
                  decisões voltem para o seu fluxo em tempo real.
                </p>

                <h2 className="title">O que entregamos</h2>

                <h4 className="title">Integração via API e webhooks</h4>
                <p>
                  Conectamos endpoints, eventos e retornos para que seu sistema receba status e
                  resultados e siga o fluxo de cadastro ou transação sem travar.
                </p>

                <h6 className="title">Configuração do fluxo</h6>
                <p>
                  Ajustamos etapas conforme sua política de risco: documentos, biometria, face scan e
                  match, device fingerprinting e score e risco quando necessário.
                </p>

                <h6 className="title">Regras e rotas de decisão</h6>
                <p>
                  Configuramos aprovar, revisar ou bloquear com critérios por perfil, canal e produto,
                  reduzindo falso positivo e melhorando consistência.
                </p>

                <h6 className="title">Trilhas e auditoria</h6>
                <p>
                  Habilitamos registros e evidências por caso para auditoria e governança, com
                  rastreabilidade de eventos, decisões e reprocessos.
                </p>

                <h6 className="title">Go live e acompanhamento</h6>
                <p>
                  Subimos em produção com checklist, testes e monitoramento inicial, garantindo que
                  métricas e alertas estejam funcionando desde o primeiro dia.
                </p>

                <h2 className="title mt--35">Para quem</h2>
                <p>
                  Times técnicos e de risco que querem implementar rápido, com governança, métricas e
                  previsibilidade de operação.
                </p>

                <h2 className="title mt--35">O que você precisa ter</h2>
                <p className="mb--15">Acesso ao ambiente de desenvolvimento e staging</p>
                <p className="mb--15">Definição do fluxo e eventos que devem disparar validações</p>
                <p className="mb--15">Pontos de decisão no seu sistema (aprovar, revisar, bloquear)</p>

                <h2 className="title mt--35">Por que fazer com a Identiq</h2>
                <p>
                  Porque você integra com menos retrabalho. A implementação já nasce com regras, trilhas
                  e métricas para evoluir com segurança e melhoria contínua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10">
              <div className="apply-right-area-sticky">
                <div className="sticky-inner">
                  <div className="apply-now-card">
                    <span className="pre">Pronto para integrar e colocar em produção</span>
                    <a href="/contato" className="rts-btn btn-primary">
                      Falar com a Identiq
                    </a>
                    <p>
                      A gente alinha seu fluxo e acelera o go live com integração guiada por
                      especialistas.
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
                        <Icon icon="mdi:api" width="28" height="28" />
                        <p>Integração via API e webhooks</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:rocket-launch-outline" width="28" height="28" />
                        <p>Go live mais rápido</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:check-decagram-outline" width="28" height="28" />
                        <p>Checklist e testes de fluxo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clipboard-check-outline" width="28" height="28" />
                        <p>Regras e rotas configuráveis</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:clock-fast" width="28" height="28" />
                        <p>Decisão em tempo real</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:timeline-check-outline" width="28" height="28" />
                        <p>Trilhas para auditoria</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:radar" width="28" height="28" />
                        <p>Monitoramento inicial</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:shield-check-outline" width="28" height="28" />
                        <p>Mais segurança no fluxo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:filter-check-outline" width="28" height="28" />
                        <p>Menos falso positivo</p>
                      </div>
                      <div className="single">
                        <Icon icon="mdi:chart-line" width="28" height="28" />
                        <p>Mais aprovações com controle</p>
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