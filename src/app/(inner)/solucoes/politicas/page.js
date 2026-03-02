// SLUG: /solucoes/politicas
// sem hífen

"use client";

import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";

export default function Home() {
  const [office, setOffice] = useState(null);
  const consultationForm = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    let alive = true;

    fetch("/assets/lottie/cardchecklist.json")
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
      source: "pagina politicas",
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
                  Políticas e regras para decisões consistentes
                </h1>

                <p
                  className="disc"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Defina critérios claros para aprovar, revisar ou reprovar. A Identiq ajuda sua
                  operação a configurar regras por perfil, canal e produto para reduzir fraude,
                  diminuir falso positivo e manter controle com trilhas.
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
                  src="/assets/images/politica/politica-01.png"
                  alt="Configuração de políticas"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="col-lg-6 pt_md--50 mt_sm--30">
              <div className="career-right-two-wrapper">
                <h2 className="title">
                  Controle por <br /> regras e rotas
                </h2>

                <p>
                  Configure políticas para diferentes cenários e direcione cada caso para a rota
                  correta. Você define limites, exceções e critérios para manter conversão com
                  segurança e consistência no time.
                </p>

                <div className="check-wrapper-main">
                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:sliders-horizontal" width="20" height="20" />
                        <p>Regras por perfil, canal e produto</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:gauge" width="20" height="20" />
                        <p>Limites e critérios por nível de risco</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:git-branch-plus" width="20" height="20" />
                        <p>Rotas de aprovação, revisão e bloqueio</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:shield-check" width="20" height="20" />
                        <p>Exceções e casos especiais com governança</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:plug-zap" width="20" height="20" />
                        <p>Integração via API e webhooks</p>
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
                <h2 className="title">Passo a passo da política</h2>
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
                      src="/assets/images/politica/poli-1.jpg"
                      alt="Definição de critérios"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Definição</h4>
                    <p>Você define critérios e objetivos do fluxo.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/politica/poli-2.jpg"
                      alt="Configuração de regras"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Configuração</h4>
                    <p>Regras e limites por cenário e risco.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/politica/poli-3.jpg"
                      alt="Rotas de decisão"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Rotas</h4>
                    <p>Aprovar, revisar ou bloquear com consistência.</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="time-line-circle" />
                  </div>
                </div>

                <div className="single-consulting-one">
                  <div className="thumbnail">
                    <Image
                      src="/assets/images/politica/poli-4.jpg"
                      alt="Ajustes e melhoria contínua"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="right-area">
                    <h4 className="title">Ajustes</h4>
                    <p>Melhoria contínua com métricas e trilhas.</p>
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
                  Vamos definir <br /> suas regras
                </h2>

                <p className="disc">
                  Agende uma conversa para desenhar políticas por cenário, reduzir falso positivo e
                  melhorar decisões com segurança e trilhas.
                </p>

                <div className="check-wrapper">
                  <p className="top">O que está incluso</p>

                  <div className="single-wrapper">
                    <div className="check-wrapper">
                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:map" width="20" height="20" />
                        <p>Mapeamento do seu fluxo e do apetite a risco</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:git-branch-plus" width="20" height="20" />
                        <p>Definição de rotas e critérios por cenário</p>
                      </div>

                      <div className="single-check">
                        <Icon className="check-icon" icon="lucide:plug-zap" width="20" height="20" />
                        <p>Orientação para integração e acompanhamento</p>
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