import Image from "next/image";
import Link from "next/link";

function Wedo() {
  return (
    <div>
      {/* what we do area start */}
      <div className="what-we-do-area-start rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="what-we-do-wrapper-about">
                <p className="disc">
                  A Identiq é uma plataforma de verificação de identidade, antifraude e compliance para
                  operações digitais. Ajudamos empresas a aprovar com segurança, reduzir fraude e manter
                  governança com regras, trilhas e decisões em tempo real.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--40 g-5">
            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-offset={120}
              data-wow-delay=".2s"
            >
              <div className="what-we-do-main-wrapper">
                <h5 className="title">O que fazemos</h5>
                <p className="disc">
                  Unimos KYC, documentos, biometria, face match, risco, monitoramento e auditoria para
                  criar jornadas seguras com menos fricção.
                </p>

                <Link href="/contato" className="rts-btn btn-border btn-bold">
                  Falar com a Identiq
                  <Image
                    src="/assets/images/service/icons/13.svg"
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-offset={120}
              data-wow-delay=".6s"
            >
              <div className="what-we-do-main-wrapper">
                <h5 className="title">Soluções</h5>
                <p className="disc">
                  Explore nossas soluções de onboarding, antifraude e compliance para fintechs, e
                  commerce, marketplaces, bancos, cripto e seguros.
                </p>

                <Link href="/solucoes" className="rts-btn btn-border btn-bold">
                  Ver soluções
                  <Image
                    src="/assets/images/service/icons/13.svg"
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what we do area end */}
    </div>
  );
}

export default Wedo;