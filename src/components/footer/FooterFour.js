import Image from "next/image";
import Link from "next/link";

function FooterOne() {
  return (
    <div>
      {/* rts footer area start */}
      <div className="rts-footer-area rts-section-gapTop pb--80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="logo-area">
                <Link href="/" className="logo">
                  <Image
                    src="/assets/images/logo/logo-1.svg"
                    alt="Identiq"
                    width={160}
                    height={40}
                  />
                </Link>

                <p className="disc">
                  Identiq é uma plataforma de verificação de identidade e prevenção a fraudes
                  que ajuda empresas a aprovar clientes com segurança e compliance.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="single-nav-area-footer">
                    <p className="parent">Soluções</p>
                    <ul>
                      <li>
                        <Link href="/solucoes/kyc">KYC e Onboarding</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/documentos">Validação de Documentos</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/biometria">Biometria e Prova de Vida</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/risco">Score e Risco</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/monitoramento">Monitoramento Contínuo</Link>
                      </li>
                      <li>
                        <Link href="/solucoes/aml">AML e Screening</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="single-nav-area-footer">
                    <p className="parent">Empresa</p>
                    <ul>
                      <li>
                        <Link href="/empresa/sobre">Sobre</Link>
                      </li>
                      <li>
                        <Link href="/empresa/carreiras">Carreiras</Link>
                      </li>
                      <li>
                        <Link href="/cases">Cases</Link>
                      </li>
                      <li>
                        <Link href="/blog">Conteúdo</Link>
                      </li>
                      <li>
                        <Link href="/docs">Documentação</Link>
                      </li>
                      <li>
                        <Link href="/contato">Contato</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="single-nav-area-footer">
                    <p className="parent">Segmentos</p>
                    <ul>
                      <li>
                        <Link href="/segmentos/fintech">Fintechs</Link>
                      </li>
                      <li>
                        <Link href="/segmentos/ecommerce">E-commerce</Link>
                      </li>
                      <li>
                        <Link href="/segmentos/marketplace">Marketplaces</Link>
                      </li>
                      <li>
                        <Link href="/segmentos/bancos">Bancos e Instituições</Link>
                      </li>
                      <li>
                        <Link href="/segmentos/cripto">Cripto e Web3</Link>
                      </li>
                      <li>
                        <Link href="/segmentos/seguros">Seguros</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="single-nav-area-footer">
                    <p className="parent">Legal</p>
                    <ul>
                      <li>
                        <Link href="/termos">Termos</Link>
                      </li>
                      <li>
                        <Link href="/privacidade">Privacidade</Link>
                      </li>
                      <li>
                        <Link href="/cookies">Cookies</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/seguranca">Segurança</Link>
                      </li>
                      <li>
                        <Link href="/contato">Contato</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts footer area end */}

      {/* rts copyright area start */}
      <div className="rts-copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-wrapper">
                <p>© 2026 Identiq. Todos os direitos reservados.</p>

                <div className="social-copyright-area">
                  <ul>
                    <li>
                      <Link href="#" aria-label="Visite nosso Facebook">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="Visite nosso Twitter">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="Visite nosso Youtube">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="Visite nosso Linkedin">
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts copyright area end */}
    </div>
  );
}

export default FooterOne;