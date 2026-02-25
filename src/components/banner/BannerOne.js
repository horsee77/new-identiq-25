"use client";
import Image from "next/image"
import { useEffect } from "react";
import Rellax from "rellax";
import AOS from "aos";
import { ReactSVG } from 'react-svg';
import "aos/dist/aos.css";
import Link from "next/link"
function BannerOne() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: -1 });
        }
    }, []);
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="rts-banner-area-start">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-5">
                            <div className="banner-wrapper-one">
                                <span className="pre-title" data-aos="fade-up" data-aos-duration="1000">Conheça a Identiq</span>
                                <h1 className="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    Verificação de identidade <br /> para <span>negócios </span>em crescimento
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="500">
                                    Ajudamos empresas com verificação de identidade e prevenção a fraudes para se manterem à frente na era digital
                                </p>
                                <Link
                                    href="/solucoes"
                                    className="rts-btn btn-primary" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"
                                >
                                    Ver soluções
                                    <ReactSVG
                                        className="injectable"
                                        src="/assets/images/banner/01.svg"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-7">
                            <div className="right-clippath-wrapper d-flex">
                                <div
                                    className="left-image mt--120 mt_sm--70 jara-mask-1"
                                    data-speed=".7"
                                >
                                    <Image
                                        loading="lazy"
                                        className="jarallax-img rellax"
                                        src="/assets/images/banner/08.webp"
                                        alt="banner"
                                        width={1200}
                                        height={800}
                                    />
                                </div>
                                <div
                                    className="left-image jara-mask-1"
                                    data-speed=".7"
                                >
                                    <Image
                                        loading="lazy"
                                        className="jarallax-img rellax"
                                        src="/assets/images/banner/09.webp"
                                        alt="banner"
                                        width={1200}
                                        height={800}
                                    />
                                </div>
                                <div className="shape-image">
                                    <Image
                                        loading="lazy"
                                        src="/assets/images/banner/shape/01.png"
                                        alt="shape"
                                        className="one wow move-left"
                                        width={200}
                                        height={800}
                                    />
                                    <Image
                                        loading="lazy"
                                        src="/assets/images/banner/shape/02.png"
                                        alt="shape"
                                        className="two wow move-left"
                                        width={299}
                                        height={800}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerOne;
