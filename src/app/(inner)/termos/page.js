"use client";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaFour from "@/components/cta/CtaFour";

export default function Home() {
  return (
    <div>
      <HeaderTwo />

      <>
        <div className="container-large">
          {/* banner */}
          <div
            className="service-single-area-banner bg_image jarallax"
            data-jarallax="1.5"
          ></div>
        </div>

        <div className="service-area-details-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="top">
                    <h1 className="title">Termos e Condições</h1>
                    <p className="disc">
                      Estes Termos e Condições regulam o acesso e o uso da plataforma
                      Identiq, suas funcionalidades, integrações, soluções de
                      validação, autenticação, prevenção a fraudes e serviços
                      relacionados.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      Ao acessar, contratar ou utilizar a Identiq, o usuário, cliente
                      ou contratante declara que leu, compreendeu e concorda com as
                      disposições aqui previstas, bem como com a legislação aplicável,
                      incluindo normas relacionadas à privacidade, proteção de dados,
                      segurança da informação e prevenção à fraude.
                    </p>

                    <p className="disc">
                      A Identiq disponibiliza uma infraestrutura tecnológica voltada à
                      verificação de identidade, autenticação de usuários, validação de
                      informações, fortalecimento de processos de onboarding digital,
                      aumento de segurança operacional e apoio a rotinas de compliance.
                      O uso da plataforma deverá ocorrer sempre para fins legítimos,
                      autorizados e em conformidade com a legislação vigente.
                    </p>

                    <p className="disc">
                      O cliente é responsável por garantir que possui base legal,
                      autorização e finalidade adequada para tratar os dados inseridos
                      ou processados por meio da plataforma, comprometendo-se a utilizar
                      a solução de forma ética, segura e compatível com as normas
                      internas, regulatórias e contratuais aplicáveis ao seu negócio.
                    </p>
                  </div>
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
                  <div className="mid-content pt--0">
                    <h3 className="title-sm">1. Objeto</h3>
                    <p className="disc">
                      A Identiq oferece soluções digitais para validação de identidade,
                      autenticação, checagem de informações, apoio a processos de
                      segurança, prevenção a fraudes e melhoria da confiança em fluxos
                      digitais. As funcionalidades contratadas poderão variar conforme o
                      plano, proposta comercial, integrações ativas e escopo técnico
                      definido entre as partes.
                    </p>

                    <h3 className="title-sm">2. Aceite e uso da plataforma</h3>
                    <p className="disc">
                      O uso da plataforma implica aceitação integral destes Termos e
                      Condições. O cliente compromete-se a utilizar a Identiq apenas
                      para finalidades lícitas, legítimas e compatíveis com seu
                      relacionamento com titulares, usuários finais, parceiros ou
                      terceiros envolvidos em seus fluxos operacionais.
                    </p>

                    <h3 className="title-sm">3. Responsabilidades do cliente</h3>
                    <p className="disc">
                      O cliente é integralmente responsável pela veracidade das
                      informações fornecidas, pela configuração de seus fluxos, pela
                      correta utilização das funcionalidades contratadas e pelo
                      cumprimento das obrigações legais relacionadas ao tratamento de
                      dados pessoais, coleta de consentimento quando aplicável, dever de
                      informação, retenção de evidências e segurança de acessos
                      internos.
                    </p>

                    <h3 className="title-sm">4. Privacidade e proteção de dados</h3>
                    <p className="disc">
                      A Identiq adota medidas técnicas e administrativas adequadas para
                      proteção de dados e segurança da informação. O tratamento de dados
                      realizado no contexto da plataforma observará a legislação
                      aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais
                      (LGPD), respeitando princípios de finalidade, necessidade,
                      adequação, segurança e transparência, conforme a natureza de cada
                      operação.
                    </p>

                    <h3 className="title-sm">5. Segurança e prevenção a fraudes</h3>
                    <p className="disc">
                      A Identiq poderá utilizar mecanismos automatizados, regras de
                      validação, cruzamento de sinais, análise de risco, verificação de
                      consistência e outros recursos técnicos para apoiar a autenticação
                      e a prevenção a fraudes. Tais mecanismos têm caráter de apoio à
                      decisão e não substituem, por si só, a análise operacional,
                      jurídica, regulatória ou comercial do cliente.
                    </p>

                    <h3 className="title-sm">6. Limitações de uso</h3>
                    <p className="disc">
                      É vedado utilizar a plataforma para finalidades ilícitas,
                      discriminatórias, abusivas, fraudulentas ou que violem direitos de
                      terceiros. Também é proibido tentar contornar mecanismos de
                      segurança, copiar, reproduzir, desmontar, explorar indevidamente
                      ou interferir na infraestrutura, APIs, integrações, códigos ou
                      funcionalidades da Identiq sem autorização expressa.
                    </p>

                    <h3 className="title-sm">7. Disponibilidade e continuidade</h3>
                    <p className="disc">
                      A Identiq envidará esforços para manter a plataforma disponível,
                      segura e estável, podendo realizar manutenções preventivas,
                      corretivas, evolutivas ou emergenciais sempre que necessário.
                      Eventuais indisponibilidades temporárias, limitações técnicas,
                      falhas de terceiros, interrupções de integração ou fatores externos
                      poderão impactar o funcionamento parcial ou total da solução.
                    </p>

                    <h3 className="title-sm">8. Propriedade intelectual</h3>
                    <p className="disc">
                      Todos os direitos relacionados à marca Identiq, à plataforma, aos
                      sistemas, interfaces, fluxos, bases tecnológicas, conteúdos,
                      materiais e recursos disponibilizados permanecem de titularidade da
                      Identiq ou de seus respectivos licenciantes, sendo vedado qualquer
                      uso indevido, reprodução não autorizada ou exploração fora dos
                      limites contratuais.
                    </p>

                    <h3 className="title-sm">9. Limitação de responsabilidade</h3>
                    <p className="disc">
                      A Identiq não garante resultado absoluto, eliminação integral de
                      riscos ou prevenção total contra fraudes, uma vez que decisões
                      operacionais dependem de contexto, políticas do cliente, fontes de
                      dados, integrações, qualidade das informações recebidas e fatores
                      externos. A responsabilidade da Identiq observará os limites
                      previstos em contrato e na legislação aplicável.
                    </p>

                    <h3 className="title-sm">10. Suspensão e encerramento</h3>
                    <p className="disc">
                      A Identiq poderá suspender ou restringir o acesso à plataforma em
                      caso de uso indevido, violação destes Termos, inadimplência,
                      risco à segurança, exigência legal ou necessidade técnica
                      relevante. O encerramento da relação comercial seguirá as
                      condições contratuais pactuadas entre as partes.
                    </p>

                    <h3 className="title-sm">11. Atualizações dos termos</h3>
                    <p className="disc">
                      Estes Termos e Condições poderão ser atualizados a qualquer tempo
                      para refletir melhorias da plataforma, alterações legais,
                      regulatórias, operacionais ou de segurança. A versão vigente será
                      aquela publicada nos canais oficiais da Identiq ou disponibilizada
                      ao cliente por meio adequado.
                    </p>

                    <h3 className="title-sm">12. Disposições finais</h3>
                    <p className="disc">
                      Ao utilizar a Identiq, o cliente reconhece que a plataforma atua
                      como solução estratégica para reforço de confiança, segurança,
                      conformidade e eficiência em jornadas digitais. Permanecendo
                      qualquer dúvida sobre estes Termos, recomenda-se contato com a
                      equipe responsável antes da continuidade do uso.
                    </p>

                    <p className="disc">
                      A Identiq oferece uma base tecnológica robusta para apoiar
                      empresas em seus desafios de identidade, autenticação e segurança,
                      com foco em eficiência operacional, rastreabilidade, confiança
                      digital e redução de riscos em processos críticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CtaFour />
      </>

      <FooterOne />
      <BackToTop />
    </div>
  );
}