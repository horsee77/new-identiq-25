"use client";

import Image from "next/image";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

function FaqOne() {
  return (
    <div>
      {/* commercial faq area */}
      <div className="professional-faq-area rts-section-gap position-relative">
        <div className="shape-top">
          <Image
            loading="lazy"
            src="/assets/images/video/shape/01.png"
            alt="Elemento decorativo"
            className="wow move-right"
            data-wow-offset={120}
            width={200}
            height={200}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center-title-bg-white">
                <h2 className="title" style={{ fontSize: 40 }}>
                  Perguntas frequentes
                </h2>
                <p>
                  Tudo o que você precisa saber sobre a Identiq e como nossa plataforma
                  ajuda sua empresa com verificação de identidade, prevenção a fraudes e
                  compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--80">
            <div className="col-lg-12">
              <div className="accordion-container-one">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>O que é a Identiq</Accordion.Header>
                    <Accordion.Body>
                      A Identiq é uma plataforma de verificação de identidade e prevenção a
                      fraudes. Ela ajuda empresas a validar usuários com rapidez e segurança,
                      apoiando processos de KYC, biometria e compliance.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Quais soluções a Identiq oferece</Accordion.Header>
                    <Accordion.Body>
                      KYC e onboarding, validação de documentos, biometria e prova de vida,
                      face match, score e regras de risco, monitoramento contínuo e suporte a
                      rotinas de compliance.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Para quais tipos de empresas a Identiq é indicada</Accordion.Header>
                    <Accordion.Body>
                      Fintechs, e commerce, marketplaces, bancos e instituições, cripto e web3,
                      seguros e qualquer operação digital que precisa validar usuários e reduzir
                      fraude no cadastro e nas transações.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Como funciona o KYC na prática</Accordion.Header>
                    <Accordion.Body>
                      O usuário envia os dados e documentos, a plataforma valida autenticidade e
                      consistência, executa verificações e regras e retorna uma decisão como aprovado,
                      revisão manual ou rejeitado de acordo com sua política.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>O que é prova de vida e para que serve</Accordion.Header>
                    <Accordion.Body>
                      Prova de vida confirma que há uma pessoa real realizando o processo, ajudando a
                      evitar tentativas com fotos, vídeos ou identidades falsas. Ela é usada junto com
                      face match para aumentar segurança.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Como a Identiq ajuda a reduzir fraude sem aumentar fricção</Accordion.Header>
                    <Accordion.Body>
                      Com decisões em tempo real, fluxos configuráveis e regras inteligentes que evitam
                      travar usuários legítimos. Você escolhe quando aprovar automaticamente, quando
                      revisar e quando reprovar.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>A plataforma permite personalizar regras e fluxos</Accordion.Header>
                    <Accordion.Body>
                      Sim. Você pode configurar regras por perfil, produto, canal ou valor e criar
                      jornadas diferentes para cada cenário. Também é possível ajustar níveis de
                      exigência para equilibrar conversão e risco.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Como é a integração com a Identiq</Accordion.Header>
                    <Accordion.Body>
                      A integração é feita via API e webhooks. Sua aplicação envia as informações,
                      acompanha o status do processo e recebe o resultado para tomar a decisão no seu
                      fluxo de cadastro ou transação.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header>Quanto tempo leva para integrar</Accordion.Header>
                    <Accordion.Body>
                      Depende do seu fluxo e escopo. Em geral, a primeira integração pode ser feita
                      rapidamente, e depois você evolui com ajustes de regras, telas e etapas conforme
                      sua necessidade.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header>Existe dashboard e trilha de auditoria</Accordion.Header>
                    <Accordion.Body>
                      Sim. Você consegue acompanhar resultados, taxas de aprovação, eventos de risco e
                      manter trilhas para auditoria e conformidade, facilitando governança e revisões.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>A Identiq é compatível com LGPD</Accordion.Header>
                    <Accordion.Body>
                      A Identiq foi desenhada para apoiar boas práticas de privacidade e segurança,
                      incluindo controles de acesso, registros e governança. A adequação final depende
                      também da forma como sua empresa configura e usa os dados.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>Como é calculado o preço</Accordion.Header>
                    <Accordion.Body>
                      O modelo costuma variar conforme volume de verificações, módulos utilizados e
                      necessidades de configuração e suporte. Fale com a Identiq para receber uma
                      proposta alinhada ao seu cenário.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="12">
                    <Accordion.Header>Como começar com a Identiq</Accordion.Header>
                    <Accordion.Body>
                      Você pode solicitar uma demonstração, alinhar seu caso de uso e iniciar a
                      integração via API. Após isso, configuramos os fluxos e regras para seu
                      onboarding e processos de risco.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="row mt--80">
            <div className="col-lg-12 text-center">
              <p>
                Ainda tem alguma dúvida{" "}
                <Link href="/free-consultation" style={{ color: "var(--color-primary)" }}>
                  Fale com a gente
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* commercial faq area end */}
    </div>
  );
}

export default FaqOne;