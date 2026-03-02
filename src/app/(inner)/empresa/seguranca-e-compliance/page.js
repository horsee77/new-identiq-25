// SLUG: /empresa/seguranca-e-compliance
// sem hífen

"use client";

import React from "react";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";
import Accordion from "react-bootstrap/Accordion";
import { Icon } from "@iconify/react";

function page() {
  return (
    <>
      <HeaderTwo />

      {/* why choose us banner area  */}
      <div className="banner-why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-inner-why-choose-us">
                <h1 className="title">Segurança e compliance com evidências no fluxo</h1>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-4">
              <div className="thumbnail-banner-choose-us jarallax" data-speed=".8">
                <img src="assets/images/banner/06.webp" className="jarallax-img" alt="banner" />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="thumbnail-banner-choose-us jarallax" data-speed=".8">
                <img src="assets/images/banner/07.webp" className="jarallax-img" alt="banner" />
              </div>
            </div>

            <div className="col-lg-9 mt--50">
              <div className="why-choose-intro-disc">
                <p>
                  A Identiq organiza segurança e compliance dentro do seu fluxo. Você controla acesso,
                  protege integrações, registra trilhas e mantém evidências por caso para auditoria,
                  revisão e governança. Tudo com decisões consistentes para reduzir risco operacional
                  sem travar conversão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us banner area end */}

      {/* luminos solution key */}
      <div className="luminos-solution-key-feature mt--50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="luminos-main-solutioin-key">
                <h3 className="title">Segurança e compliance na Identiq inclui</h3>

                <div className="check-wrapper">
                  <div className="single-check">
                    <Icon icon="mdi:account-key-outline" width="22" height="22" />
                    <p>Controle de acesso por papéis e ambientes</p>
                  </div>
                  <div className="single-check">
                    <Icon icon="mdi:lock-check-outline" width="22" height="22" />
                    <p>Proteção de integrações e assinatura de webhooks</p>
                  </div>
                  <div className="single-check">
                    <Icon icon="mdi:timeline-check-outline" width="22" height="22" />
                    <p>Trilhas e evidências por caso para auditoria</p>
                  </div>
                  <div className="single-check">
                    <Icon icon="mdi:scale-balance" width="22" height="22" />
                    <p>Regras por risco para decisões consistentes</p>
                  </div>
                </div>

                <div className="tag-wrapper">
                  <div className="single-tag">
                    <span>Governança</span>
                  </div>
                  <div className="single-tag">
                    <span>Auditoria</span>
                  </div>
                  <div className="single-tag">
                    <span>Rastreabilidade</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="thumbnail-main-wrapper-choose-us">
                <img src="assets/images/service/09.webp" alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* luminos solution key end */}

      {/* working process area why choose us */}
      <div className="why-choose-us-working-process rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pr--50">
              <div className="why-choose-process-left pb--50">
                <div className="text-left-title-bg-white">
                  <h2 className="title">Controles que viram evidência</h2>
                  <p>
                    Segurança não é só bloqueio. É controle, rastreio e consistência. A Identiq ajuda
                    a padronizar decisões e registrar trilhas para auditoria e governança.
                  </p>
                </div>
              </div>

              <div className="thumbnail-working-process">
                <img src="assets/images/service/10.webp" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-working-process-choose-us wow fadeInUp">
                <h5 className="title">Governança de acesso</h5>
                <p>
                  Defina permissões por papel e ambiente para reduzir risco operacional e manter
                  controle sobre ações críticas.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Acesso</span>
                  </div>
                  <div className="single">
                    <span>Permissões</span>
                  </div>
                  <div className="single">
                    <span>Ambientes</span>
                  </div>
                </div>
              </div>

              <div className="single-working-process-choose-us wow fadeInUp" data-wow-delay=".2s">
                <h5 className="title">Integridade de integrações</h5>
                <p>
                  Proteja comunicação com assinatura de webhooks e padrões para garantir que eventos e
                  decisões são autênticos e rastreáveis.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>API</span>
                  </div>
                  <div className="single">
                    <span>Webhooks</span>
                  </div>
                  <div className="single">
                    <span>Integridade</span>
                  </div>
                </div>
              </div>

              <div className="single-working-process-choose-us wow fadeInUp" data-wow-delay=".4s">
                <h5 className="title">Trilhas e auditoria por caso</h5>
                <p>
                  Registre eventos, decisões e reprocessos para investigação rápida, revisões internas
                  e auditorias com evidências por caso.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Trilhas</span>
                  </div>
                  <div className="single">
                    <span>Evidências</span>
                  </div>
                  <div className="single">
                    <span>Auditoria</span>
                  </div>
                </div>
              </div>

              <div className="single-working-process-choose-us wow fadeInUp" data-wow-delay=".6s">
                <h5 className="title">Compliance no fluxo</h5>
                <p>
                  Aplique regras por risco e rotas de decisão para manter consistência, reduzir fraude
                  e apoiar compliance sem travar usuários legítimos.
                </p>
                <div className="tag-wrapper">
                  <div className="single">
                    <span>Regras</span>
                  </div>
                  <div className="single">
                    <span>Risco</span>
                  </div>
                  <div className="single">
                    <span>Decisão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* working process area why choose us end */}

      {/* why choose us faq area start */}
      <div className="why-choose-us-faq-area rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="faq-why-choose-left-accordion">
                <h2 className="title">Perguntas frequentes</h2>
                <p>
                  Aqui está o que normalmente perguntam sobre segurança, governança e trilhas na Identiq.
                </p>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Como a Identiq protege integrações e webhooks</Accordion.Header>
                    <Accordion.Body>
                      Você pode validar eventos recebidos com assinatura e manter rastreabilidade por ids
                      de referência, garantindo integridade do fluxo e evidências por caso.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>O que entra na trilha de auditoria</Accordion.Header>
                    <Accordion.Body>
                      Eventos do fluxo, decisões, mudanças de estado e reprocessos podem ser registrados para
                      consulta posterior, revisão interna e auditorias externas.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Posso definir permissões e acesso por time</Accordion.Header>
                    <Accordion.Body>
                      Sim. É possível organizar acessos por papéis e ambientes para reduzir risco operacional e
                      controlar ações críticas na operação.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Como equilibrar segurança e conversão</Accordion.Header>
                    <Accordion.Body>
                      Com regras por risco e jornadas por perfil, você aplica validações só quando necessário,
                      reduzindo falso positivo e mantendo aprovação rápida para usuários legítimos.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="why-choose-faq-thumbnail">
                <img src="assets/images/why-choose-us/01.webp" alt="why" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us faq area end */}

      {/* compliance em “cards” (mantém o bloco de pricing, mas vira compliance) */}
      <div className="why-choose-pricing-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="single-pricing-wrapper-choose">
                    <div className="pricing-head">
                      <span className="pre">Operação</span>
                      <div className="pricing-area">
                        <h2 className="title">
                          <Icon icon="mdi:account-key-outline" width="44" height="44" />
                        </h2>
                        <span className="time">Acesso e governança</span>
                      </div>
                      <p>Controle de permissões e ações críticas</p>
                    </div>

                    <a href="/contato" className="rts-btn btn-border btn-bold">
                      Falar com especialista
                      <img src="assets/images/service/icons/13.svg" alt="arrow" />
                    </a>

                    <div className="body">
                      <div className="check-single">
                        <Icon icon="mdi:shield-lock-outline" width="20" height="20" />
                        <p>Papéis e permissões por time</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:layers-outline" width="20" height="20" />
                        <p>Separação por ambientes</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:clipboard-check-outline" width="20" height="20" />
                        <p>Rotas e decisões consistentes</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:timeline-check-outline" width="20" height="20" />
                        <p>Registro de eventos críticos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="single-pricing-wrapper-choose">
                    <div className="pricing-head">
                      <span className="pre">Auditoria</span>
                      <div className="pricing-area">
                        <h2 className="title">
                          <Icon icon="mdi:timeline-check-outline" width="44" height="44" />
                        </h2>
                        <span className="time">Trilhas e evidências</span>
                      </div>
                      <p>Histórico por caso pronto para revisão</p>
                    </div>

                    <a href="/solucoes/auditoria" className="rts-btn btn-border btn-bold">
                      Ver auditoria e trilhas
                      <img src="assets/images/service/icons/13.svg" alt="arrow" />
                    </a>

                    <div className="body">
                      <div className="check-single">
                        <Icon icon="mdi:identifier" width="20" height="20" />
                        <p>Rastreio por ids de referência</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:file-document-outline" width="20" height="20" />
                        <p>Evidências e contexto por caso</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:refresh" width="20" height="20" />
                        <p>Reprocesso controlado</p>
                      </div>
                      <div className="check-single">
                        <Icon icon="mdi:scale-balance" width="20" height="20" />
                        <p>Base para compliance e governança</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* lado direito vira “pilares” */}
            <div className="col-lg-6 pl--100 pl_md--15 pl_sm--10 pt_md--30 pt_sm--30">
              <div className="faq-why-choose-left-accordion">
                <h2 className="title">
                  Compliance no fluxo <br /> sem fricção
                </h2>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Como manter evidências sem travar o usuário</Accordion.Header>
                    <Accordion.Body>
                      Você registra o que importa por evento e por decisão. Com regras por risco, aplica
                      validações quando necessário e mantém trilhas para auditoria.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Como reduzir risco operacional</Accordion.Header>
                    <Accordion.Body>
                      Com governança de acesso, trilhas por caso e rotas consistentes para aprovar, revisar
                      ou bloquear conforme sua política.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Como integrar com segurança</Accordion.Header>
                    <Accordion.Body>
                      Use assinatura de webhooks, ids de referência e padrões de reprocesso para garantir
                      integridade e rastreabilidade do fluxo.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us pricing area end */}

      <CtaOne />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;