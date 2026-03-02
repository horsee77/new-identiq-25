"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Lottie from "lottie-react";

export default function Home() {
  const [office, setOffice] = useState(null);
  const consultationForm = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    let alive = true;

    fetch("/assets/lottie/DocumentSecurity.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setOffice(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar animação:", error);
        if (alive) setOffice(null);
      });

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  const sendConsultationForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(consultationForm.current);

    const payload = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      agree: true,
      source: "pagina auditoria",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem.");
      }

      setStatusMessage("Mensagem enviada com sucesso!");
      consultationForm.current?.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatusMessage("Não foi possível enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeaderTwo />

      <div className="rts-career-banner-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career-banner-wrapper">
                <h1
                  className="title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Auditoria e trilhas para decisões com evidências
                </h1>

                <p
                  className="disc"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Registre eventos, decisões e resultados para apoiar compliance e governança. A
                  Identiq ajuda sua operação a manter trilhas claras, reduzir inconsistências e
                  facilitar auditorias com histórico e evidências.
                </p>

                <Link
                  href="/contato"
                  className="rts-btn btn-primary btn-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Falar com especialista
                </Link>
              </div>
            </div>

            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
              <div
                className="thumbnail-top thumbnail-consultancy"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div
                  className="jarallax-img"
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {office ? (
                    <Lottie
                      animationData={office}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="consultancy-bottom rts-section-gapBottom career-two-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pr--40 pr_md--15 pr_sm--10">
              <div
                className="thumbnail-consultancy"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  className="jarallax-img"
                  src="/assets/images/auditoria/aud-01.png"
                  alt="Fluxo auditável"
                  width={1200}
                  height={800}
                />
              </div>
            </div>

            <div className="col-lg-6 pt_md--50 mt_sm--30">
              <div className="career-right-two-wrapper">
                <h2 className="title">
                  Trilha completa <br /> do seu fluxo
                </h2>

                <p>
                  Centralize histórico do usuário, eventos do onboarding e decisões de risco em um
                  fluxo auditável. Você define o que registrar e como consultar, mantendo evidências
                  para revisão interna e auditorias externas.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:clipboard-list" width="20" height="20" />
                        <p>Registro de eventos e decisões</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:history" width="20" height="20" />
                        <p>Histórico de alterações e reprocessos</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:file-search" width="20" height="20" />
                        <p>Evidências e contexto por caso</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:scan-search" width="20" height="20" />
                        <p>Consultas por API e rastreabilidade</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:shield-check" width="20" height="20" />
                        <p>Trilhas para governança e compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="rts-solution-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-style-two">
                <h2 className="title">Passo a passo da trilha</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-consulting mt--80 mt_sm--30">
          <div className="row">
            <div className="col-lg-12">
              <div className="consulting-step">
                <div className="timeline-line" />

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/auditoria/aud-1.jpg"
                      alt="Eventos"
                      width={520}
                      height={360}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Eventos</h4>
                    <p>Eventos do fluxo são registrados com contexto.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/auditoria/aud-2.jpg"
                      alt="Decisões"
                      width={520}
                      height={360}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Decisões</h4>
                    <p>Resultados de regras e análises são armazenados.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/auditoria/aud-3.jpg"
                      alt="Evidências"
                      width={520}
                      height={360}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Evidências</h4>
                    <p>Registro de evidências para cada caso quando necessário.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/auditoria/aud-4.jpg"
                      alt="Consulta"
                      width={520}
                      height={360}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Consulta</h4>
                    <p>Histórico disponível para auditoria e governança.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shedule-a-consultation rts-section-gapTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="shedule-consulting-left">
                <h2 className="title">
                  Vamos organizar <br /> suas trilhas
                </h2>

                <p className="disc">
                  Agende uma conversa para entender como auditoria e trilhas podem apoiar compliance,
                  governança e revisões com histórico e evidências.
                </p>

                <div className="check-wrapper">
                  <p className="top">O que está incluso</p>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:map" width="20" height="20" />
                        <p>Mapeamento do que registrar no seu fluxo</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:folder-search-2" width="20" height="20" />
                        <p>Definição de acesso e consulta de histórico</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:plug-zap" width="20" height="20" />
                        <p>Orientação para integração e governança</p>
                      </div>
                    </div>
                  </div>

                  <p className="call">
                    Fale com a gente em: <Link href="/contato">Contato</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 mt_sm--30">
              <form
                ref={consultationForm}
                onSubmit={sendConsultationForm}
                className="consulting-form"
              >
                <p>Agendar uma conversa</p>

                <div className="input-half-wrapper">
                  <div className="single">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div className="single">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Sobrenome"
                      required
                    />
                  </div>
                </div>

                <div className="input-half-wrapper">
                  <div className="single">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email corporativo"
                      required
                    />
                  </div>
                  <div className="single">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefone"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                />

                <textarea
                  name="message"
                  id="mensagem"
                  placeholder="Escreva sua mensagem"
                  required
                  defaultValue=""
                />

                <button
                  type="submit"
                  className="rts-btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>

                {statusMessage && (
                  <p style={{ marginTop: "14px" }}>{statusMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}