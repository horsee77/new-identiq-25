import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* área 404 */}
      <div className="rts-coming-soon-area rts-section-gap d-flex align-items-center h-100-vh">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-not-found-main">
                <h1 className="title">404</h1>
                <h3 className="para">Página não encontrada</h3>
                <p>
                  Desculpe, a página que você está procurando foi movida,
                  redirecionada ou removida permanentemente.
                </p>
                <Link href="/" className="rts-btn btn-primary">
                  Voltar para a home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fim área 404 */}
    </>
  );
}