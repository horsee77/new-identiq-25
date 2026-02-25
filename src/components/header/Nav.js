"use client";

import Link from "next/link";
import { ReactSVG } from "react-svg";

function Nav() {
  return (
    <div>
      <div className="nav-area">
        <nav>
          <ul>
            {/* HOME */}
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            {/* SOLUÇÕES (dropdown / megamenu simples) */}
            <li className="has-dropdown position-static with-megamenu">
              <Link className="nav-link" href="/solucoes">
                Soluções
                <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>

              <div className="submenu">
                <div className="container">
                  <div className="row">
                    {/* Verificação de Identidade */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="parent-top-industry">
                          <p>Verificação de Identidade</p>
                        </li>

                        <li>
                          <Link href="/solucoes/kyc">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            KYC e Onboarding
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/documentos">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Validação de Documentos
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/biometria">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Biometria e Prova de Vida
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/facescan">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Face Scan e Match
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Antifraude */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="parent-top-industry">
                          <p>Antifraude</p>
                        </li>

                        <li>
                          <Link href="/solucoes/risco">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Score e Risco
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/chargeback">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Prevenção de Chargeback
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/device-fingerprint">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Device Fingerprinting
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/monitoramento">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Monitoramento Contínuo
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Compliance */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav">
                        <li className="parent-top-industry">
                          <p>Compliance</p>
                        </li>

                        <li>
                          <Link href="/solucoes/aml">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            AML e Screening
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/sancoes-pep">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Sanções e PEP
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/auditoria">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Auditoria e Trilhas
                          </Link>
                        </li>

                        <li>
                          <Link href="/solucoes/politicas">
                            <i className="fa-sharp fa-regular fa-chevron-right" />
                            Políticas e Regras
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Para quem */}
                    <div className="col-lg-3">
                      <ul className="single-menu parent-nav industry-signle-menu">
                        <li className="parent-top-industry">
                          <p>Para quem</p>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/fintech">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            Fintechs
                          </Link>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/ecommerce">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            E-commerce
                          </Link>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/marketplace">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            Marketplaces
                          </Link>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/bancos">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            Bancos e Instituições
                          </Link>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/cripto">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            Cripto e Web3
                          </Link>
                        </li>

                        <li>
                          <Link className="industries" href="/segmentos/seguros">
                            <ReactSVG src="/assets/images/icons/arrow-right.svg" />
                            Seguros
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* SERVIÇOS (dropdown simples) */}
            <li className="has-dropdown">
              <Link className="nav-link" href="/servicos">
                Serviços
                <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>

              <ul className="submenu parent-nav with-border">
                <li>
                  <Link href="/servicos/consultoria">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Consultoria de Risco e Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/implementacao">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Implementação e Integrações
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/customizacao">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Customização de Fluxos
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/suporte">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Suporte e Sucesso do Cliente
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/treinamento">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Treinamento e Onboarding
                  </Link>
                </li>
              </ul>
            </li>

            {/* PRODUTO */}
            <li className="has-dropdown">
              <Link className="nav-link" href="/produto">
                Produto
                <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>

              <ul className="submenu parent-nav with-border">
                <li>
                  <Link href="/produto/plataforma">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Plataforma
                  </Link>
                </li>
                <li>
                  <Link href="/produto/api">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    API e Webhooks
                  </Link>
                </li>
                <li>
                  <Link href="/produto/workflows">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Workflows e Regras
                  </Link>
                </li>
                <li>
                  <Link href="/produto/seguranca">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Segurança
                  </Link>
                </li>
              </ul>
            </li>

            {/* RECURSOS */}
            <li className="has-dropdown">
              <Link className="nav-link" href="/recursos">
                Recursos <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>

              <ul className="submenu parent-nav with-border">
                <li>
                  <Link href="/news">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>

            {/* EMPRESA */}
            <li className="has-dropdown">
              <Link className="nav-link" href="/empresa">
                Empresa <i className="fa-duotone fa-regular fa-chevron-down" />
              </Link>

              <ul className="submenu parent-nav with-border">
                <li>
                  <Link href="/empresa/sobre">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Sobre a Identiq
                  </Link>
                </li>
                <li>
                  <Link href="/empresa/seguranca-e-compliance">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Segurança e Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/contato">
                    <i className="fa-sharp fa-regular fa-chevron-right" />
                    Contato
                  </Link>
                </li>
              </ul>
            </li>

            {/* CTA */}
            <li>
              <Link className="nav-link" href="/contato">
                Fale com a Identiq
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;