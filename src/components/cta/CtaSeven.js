"use client";

import { useEffect } from "react";
import AOS from "aos";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import "aos/dist/aos.css";

function CtaFour() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* rts call to action area start */}
      <div className="rts-call-to-action-area-about rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2
                className="title"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Fale com um especialista
              </h2>

              <p
                className="disc"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Agende uma conversa para entender como a Identiq pode reduzir fraudes, aumentar
                aprovações e apoiar compliance com verificação, risco e trilhas.
              </p>

              <Link
                href="/contato"
                className="rts-btn btn-primary"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Agendar agora
                <ReactSVG src="/assets/images/service/icons/13.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* rts call to action area end */}
    </div>
  );
}

export default CtaFour;