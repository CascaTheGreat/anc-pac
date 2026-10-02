"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ANCLogo from "@/app/_components/logo";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showLogo, setShowLogo] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setShowLogo(true);
      return;
    }

    const homeLogo = document.querySelector("[data-home-logo]");

    if (!homeLogo) {
      setShowLogo(true);
      return;
    }

    const showLogoAt = homeLogo.getBoundingClientRect().bottom + window.scrollY;
    const updateLogoVisibility = () => {
      setShowLogo(window.scrollY >= showLogoAt);
    };

    updateLogoVisibility();
    window.addEventListener("scroll", updateLogoVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateLogoVisibility);
  }, [isHomePage]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-secondary bg-background text-background">
      <div className="container relative mx-auto flex min-h-[76px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-3 py-3 sm:px-5">
        <a
          href="/"
          aria-label="Americans for Neighborhood Cohesion home"
          aria-hidden={!showLogo}
          className={`order-first flex basis-full justify-center transition-opacity duration-200 md:absolute md:left-1/2 md:top-1/2 md:order-none md:basis-auto md:-translate-x-1/2 md:-translate-y-1/2 ${showLogo ? "opacity-100" : "pointer-events-none hidden opacity-0"}`}
          style={{ fontFamily: '"parisplus-std", sans-serif' }}
        >
          <ANCLogo aria-hidden="true" className="h-10 w-auto sm:h-12" />
        </a>
        <nav
          aria-label="Primary navigation"
          className="flex basis-full flex-wrap items-center justify-center gap-x-3 gap-y-2 md:basis-auto md:gap-x-5"
        >
          <a
            href="/#intro"
            className="text-xs font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent sm:text-sm"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Volunteer
          </a>
          <a
            href="/issues"
            className="text-xs font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent sm:text-sm"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Issues
          </a>
          <a
            href="/endorsements"
            className="text-xs font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent sm:text-sm"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Endorsements
          </a>
        </nav>
        <div className="ml-0 flex basis-full flex-row items-center justify-center gap-x-2 md:ml-auto md:basis-auto md:justify-start md:gap-x-4">
          <a
            href="https://vr.dcboe.org/213324797239968?agency_code=12"
            className="text-xs font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent sm:text-sm"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Today
          </a>
          <a
            href="#stories"
            className="flex h-10 min-w-[104px] items-center justify-center rounded-full bg-secondary px-3 py-1 text-background hover:brightness-95 sm:h-12 sm:min-w-[132px] sm:px-5"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            <span className="text-sm font-bold uppercase leading-none tracking-wide">
              DONATE
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
