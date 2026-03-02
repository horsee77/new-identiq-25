"use client";

import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactSVG } from "react-svg";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Não foi possível enviar. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <div className="#">
      <HeaderTwo />

      <>
        {/* contact banner areas start */}
        <div className="contact-page-banner jarallax bg_iamge"></div>
        {/* contact banner areas end */}

        {/* contact area form wrapper start */}
        <div className="contact-area-form-wrapper rts-section-gapTop">
          <div className="container-contact">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center-title-bg-white">
                  <h2 className="title">Fale com a Identiq</h2>
                  <p>Preencha o formulário e a gente retorna o mais rápido possível.</p>
                </div>
              </div>

              <div className="col-lg-12">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form"
                  id="contact-form"
                >
                  <div className="half-input-wrapper">
                    <div className="single">
                      <label htmlFor="name">Nome</label>
                      <input
                        type="text"
                        id="name"
                        name="first_name"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="single">
                      <label htmlFor="last">Sobrenome</label>
                      <input
                        type="text"
                        id="last"
                        name="last_name"
                        placeholder="Seu sobrenome"
                        required
                      />
                    </div>
                  </div>

                  <div className="single">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="voce@empresa.com"
                      required
                    />
                  </div>

                  <div className="single">
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+55 (11) 90000-0000"
                    />
                  </div>

                  <div className="single">
                    <label htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div className="single">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Conte rapidamente o que você precisa..."
                      required
                    />
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      name="agree"
                      required
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Você concorda com nossa política de privacidade.
                    </label>
                  </div>

                  <button type="submit" className="rts-btn btn-primary">
                    Enviar mensagem
                    <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* contact area form wrapper end */}

        <div className="rts-google-map-area rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="google-map-wrapper">
                  <iframe
                    src="https://www.google.com/maps?q=-23.117652,-46.556097&z=15&output=embed"
                    width={600}
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Identiq"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* rts location area start */}
        <div className="rts-location-contact-area pt--70">
          <div className="container">
            <div className="row section-seperator-b pb--90 g-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-location-area-contact">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot" />
                  </div>
                  <p>WhatsApp</p>
                  <span>Atendimento rápido pelo WhatsApp.</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-location-area-contact">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot" />
                  </div>
                  <p>Email</p>
                  <span>Envie sua mensagem e retornamos em seguida.</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-location-area-contact">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot" />
                  </div>
                  <p>Escritório</p>
                  <span>Atibaia SP por agendamento.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts location area end */}
      </>

      <FooterOne />
      <BackToTop />
    </div>
  );
}