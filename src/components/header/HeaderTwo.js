"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import Nav from "./Nav";
import SideBar from "./SideBar";

function HeaderOne() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleBackgroundClick = () => {
    setSearchVisible(false);
  };

  return (
    <div>
      <header className="header-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-wrapper-1">
                <Link href="/" className="logo-area">
                  <Image
                    src="/assets/images/logo/logo-1.svg"
                    alt="Identiq"
                    width={160}
                    height={40}
                  />
                </Link>

                <Nav />

                <div className="button-area-right-header">
                  <Link href="/contato" className="rts-btn btn-border">
                    Entrar em contato
                    <ReactSVG src="/assets/images/service/icons/13.svg" />
                  </Link>

                  <button
                    type="button"
                    className="menu-btn-toggle"
                    onClick={toggleSidebar}
                    aria-label="Abrir menu lateral"
                  >
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y={14} width={20} height={2} fill="#1F1F25" />
                      <rect y={7} width={20} height={2} fill="#1F1F25" />
                      <rect width={20} height={2} fill="#1F1F25" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className={`header-style-one header--sticky ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-wrapper-1">
                <Link href="/" className="logo-area">
                  <Image
                    src="/assets/images/logo/logo-1.svg"
                    alt="Identiq"
                    width={160}
                    height={40}
                  />
                </Link>

                <Nav />

                <div className="button-area-right-header">
                  <Link href="/contato" className="rts-btn btn-border">
                    Entrar em contato
                    <ReactSVG src="/assets/images/service/icons/13.svg" />
                  </Link>

                  <button
                    id="menu-btn"
                    type="button"
                    className="menu-btn-toggle"
                    onClick={toggleSidebar}
                    aria-label="Abrir menu lateral"
                  >
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y={14} width={20} height={2} fill="#1F1F25" />
                      <rect y={7} width={20} height={2} fill="#1F1F25" />
                      <rect width={20} height={2} fill="#1F1F25" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="anywhere-home"
        className={isSearchVisible ? "bgshow" : ""}
        onClick={handleBackgroundClick}
      />

      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default HeaderOne;