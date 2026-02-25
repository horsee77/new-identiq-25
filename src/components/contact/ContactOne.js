import Image from "next/image";

function ContactOne() {
  return (
    <div>
      {/* contact area start */}
      <div className="contact-area-start rts-section-gap bg_color-dark-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-footer-5">
                <h2 className="title">Let’s get in touch</h2>
              </div>
            </div>
          </div>

          <div className="row mt--80">
            <div className="col-lg-12">
              <div className="thumbnail-map">
                <Image
                  src="/assets/images/contact/01.webp"
                  alt="Mapa com localizações de contato"
                  width={1600}
                  height={900}
                />

                <div className="map-tool-tip-single">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip={`California USA,\nMid Hourse #25`}
                    tabIndex={0}
                    aria-label="Localização Califórnia"
                  >
                    <span />
                  </button>
                </div>

                <div className="map-tool-tip-single two">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip={`Dubai USA,\nMid Hourse #25`}
                    tabIndex={0}
                    aria-label="Localização Dubai"
                  >
                    <span />
                  </button>
                </div>

                <div className="map-tool-tip-single three">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip="Los Angeles"
                    tabIndex={0}
                    aria-label="Localização Los Angeles"
                  >
                    <span />
                  </button>
                </div>

                <div className="map-tool-tip-single four">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip={`Dubai DU,\nMid Hourse #25`}
                    tabIndex={0}
                    aria-label="Localização Dubai DU"
                  >
                    <span />
                  </button>
                </div>

                <div className="map-tool-tip-single five">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip={`Japan USA,\nMid Hourse #25`}
                    tabIndex={0}
                    aria-label="Localização Japão"
                  >
                    <span />
                  </button>
                </div>

                <div className="map-tool-tip-single six">
                  <button
                    type="button"
                    className="map-tooltip"
                    data-tooltip={`Korea USA,\nMid Hourse #25`}
                    tabIndex={0}
                    aria-label="Localização Coreia"
                  >
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="map-location-area">
                <div className="location-single">
                  <h3 className="title">London</h3>
                  <a href="tel:+10808009090" className="number">
                    +1 080 800 90 90
                  </a>
                  <a className="mail" href="mailto:hey.london@luminos.co">
                    hey.london@luminos.co
                  </a>
                </div>

                <div className="location-single">
                  <h3 className="title">Los Angeles</h3>
                  <a href="tel:+10808009090" className="number">
                    +1 080 800 90 90
                  </a>
                  <a className="mail" href="mailto:hey.la@luminos.co">
                    hey.la@luminos.co
                  </a>
                </div>

                <div className="location-single">
                  <h3 className="title">Dubai</h3>
                  <a href="tel:+10808009090" className="number">
                    +1 080 800 90 90
                  </a>
                  <a className="mail" href="mailto:hey.dubai@luminos.co">
                    hey.dubai@luminos.co
                  </a>
                </div>

                <div className="location-single">
                  <h3 className="title">Tokyo</h3>
                  <a href="tel:+10808009090" className="number">
                    +1 080 800 90 90
                  </a>
                  <a className="mail" href="mailto:hey.tokyo@luminos.co">
                    hey.tokyo@luminos.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
    </div>
  );
}

export default ContactOne;