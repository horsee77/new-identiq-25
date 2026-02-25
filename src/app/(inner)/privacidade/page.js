// SLUG: /privacy-policy
// sem hífen

"use client";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import ServiceSingle from "@/components/banner-service/ServiceSingle";
import CtaFour from "@/components/cta/CtaFour";
import Image from "next/image"

export default function Home() {
  return (
    <div className="#">
      <HeaderTwo />
      <ServiceSingle />

      <div>
        <div className="service-area-details-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="top">
                    <h1 className="title">Política de privacidade</h1>
                    <p className="disc">
                      A Identiq leva privacidade e segurança a sério. Esta política explica como coletamos,
                      usamos, compartilhamos e protegemos dados em nossos sites, produtos e integrações.
                    </p>
                  </div>

                  <div className="mid-content">
                    <p className="disc">
                      A Identiq oferece soluções de verificação, risco e compliance. Dependendo do seu uso,
                      podemos tratar dados enviados por você, pela sua empresa ou por usuários finais durante
                      o onboarding e outros eventos do fluxo. Quando atuamos como operador, tratamos dados em
                      nome do cliente. Quando atuamos como controlador, decidimos como e por que os dados são
                      tratados para fins específicos desta política.
                    </p>

                    <p className="disc">
                      Esta política se aplica aos nossos sites, páginas e formulários, e também ao uso dos
                      nossos produtos, APIs e webhooks. Se você estiver usando a Identiq por meio de um cliente
                      (por exemplo, uma fintech, marketplace ou e commerce), a política de privacidade desse
                      cliente também pode se aplicar.
                    </p>

                    <p className="disc">
                      Ao utilizar nossos serviços, você concorda com os termos desta política. Se você não
                      concordar, recomendamos não utilizar nossos sites e serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* imagens */}
        <div className="service-image-mid-iamge-jarallax-area">
          <div className="container-large">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <Image className="jarallax-img" src="/assets/images/service/07.webp" alt="service" width={1200} height={800}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <Image className="jarallax-img" src="/assets/images/service/08.webp" alt="service" width={1200} height={800} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* conteúdo 2 */}
        <div className="service-area-details-wrapper border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="mid-content">
                    <p className="disc">
                      <strong>1. Quais dados coletamos</strong>
                      <br />
                      Podemos coletar dados fornecidos diretamente por você ou pelo cliente que integra a
                      Identiq, como nome, email, telefone, dados cadastrais e dados de uso. Em fluxos de
                      verificação e antifraude, o cliente pode enviar dados adicionais para validação, como
                      informações de documento, biometria e sinais de dispositivo e comportamento, sempre
                      conforme a finalidade do fluxo e a base legal aplicável.
                    </p>

                    <p className="disc">
                      <strong>2. Como usamos os dados</strong>
                      <br />
                      Usamos dados para operar e melhorar nossos serviços, atender solicitações, oferecer
                      suporte, prevenir fraude e abuso, manter segurança, cumprir obrigações legais e gerar
                      evidências e trilhas para auditoria quando configurado no fluxo. Também podemos usar
                      dados de contato para comunicação operacional e comercial quando houver consentimento
                      ou outra base legal válida.
                    </p>

                    <p className="disc">
                      <strong>3. Compartilhamento de dados</strong>
                      <br />
                      Podemos compartilhar dados com prestadores que nos ajudam a operar o serviço, como
                      infraestrutura, armazenamento, monitoramento e comunicação, sempre com contratos e
                      medidas de segurança. Em fluxos operados para um cliente, o cliente é quem define as
                      regras do processo e recebe os resultados via API e webhooks. Não vendemos dados.
                    </p>

                    <p className="disc">
                      <strong>4. Retenção e descarte</strong>
                      <br />
                      Mantemos dados apenas pelo tempo necessário para as finalidades descritas nesta política,
                      para cumprir obrigações legais ou para atender necessidades de auditoria e segurança.
                      Quando não forem mais necessários, descartamos ou anonimizamos de forma segura, conforme
                      nossas rotinas e exigências contratuais.
                    </p>

                    <p className="disc">
                      <strong>5. Segurança da informação</strong>
                      <br />
                      Adotamos controles de segurança para proteger dados contra acesso não autorizado, perda,
                      uso indevido e alteração. Isso inclui medidas técnicas e organizacionais, controle de
                      acesso, registros e trilhas quando aplicável, e boas práticas em integrações e operações.
                      Nenhum sistema é 100% seguro, mas trabalhamos continuamente para reduzir riscos.
                    </p>

                    <p className="disc">
                      <strong>6. Cookies e tecnologias semelhantes</strong>
                      <br />
                      Podemos usar cookies e tecnologias semelhantes para funcionamento do site, métricas,
                      melhoria de experiência e segurança. Você pode gerenciar cookies no navegador. Alguns
                      cookies são essenciais para funcionamento correto do site.
                    </p>

                    <p className="disc">
                      <strong>7. Direitos do titular</strong>
                      <br />
                      Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, exclusão,
                      portabilidade, informação sobre compartilhamento e revisão de decisões automatizadas,
                      conforme aplicável. Em fluxos operados para um cliente, a solicitação pode precisar ser
                      direcionada ao cliente controlador do dado.
                    </p>

                    <p className="disc">
                      <strong>8. Transferência internacional</strong>
                      <br />
                      Dependendo da infraestrutura e dos provedores utilizados, dados podem ser tratados fora
                      do Brasil. Nesses casos, adotamos medidas e contratos para proteção adequada, conforme
                      exigido pela legislação aplicável.
                    </p>

                    <p className="disc">
                      <strong>9. Crianças e adolescentes</strong>
                      <br />
                      Nossos serviços não são direcionados a crianças. Caso você acredite que dados de menores
                      foram enviados de forma indevida, entre em contato para que possamos avaliar e tomar as
                      medidas necessárias.
                    </p>

                    <p className="disc">
                      <strong>10. Alterações desta política</strong>
                      <br />
                      Podemos atualizar esta política para refletir mudanças no serviço, legais ou operacionais.
                      Quando isso ocorrer, atualizaremos esta página. Recomendamos revisar periodicamente.
                    </p>

                    <p className="disc">
                      <strong>11. Contato</strong>
                      <br />
                      Para dúvidas, solicitações de privacidade ou exercício de direitos, fale com a Identiq em{" "}
                      <a href="/contato">Contato</a>.
                    </p>

                    <p className="disc">
                      <strong>Última atualização</strong>
                      <br />
                      2026 02 24
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaFour />
      <FooterOne />
      <BackToTop />
    </div>
  );
}