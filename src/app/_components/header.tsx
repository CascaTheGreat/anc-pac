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

    setShowLogo(false);

    const observer = new IntersectionObserver(([entry]) => {
      setShowLogo(!entry.isIntersecting);
    });

    observer.observe(homeLogo);

    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-secondary bg-background text-background">
      <div className="container relative mx-auto flex min-h-[76px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3">
        <a
          href="/"
          aria-label="Americans for Neighborhood Cohesion home"
          aria-hidden={!showLogo}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${showLogo ? "opacity-100" : "pointer-events-none opacity-0"}`}
          style={{ fontFamily: '"parisplus-std", sans-serif' }}
        >
          <ANCLogo aria-hidden="true" className="h-12 w-auto" />
        </a>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <a
            href="/#intro"
            className="text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Volunteer
          </a>
          <a
            href="/issues"
            className="text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Issues
          </a>
          <a
            href="/endorsements"
            className="text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
          >
            Endorsements
          </a>
        </nav>
        <div className="ml-auto flex flex-row items-center gap-x-4">
          <a
            href="https://vr.dcboe.org/213324797239968?agency_code=12"
            className="text-sm font-bold uppercase tracking-wide text-secondary transition-colors hover:text-accent"
            style={{ fontFamily: '"parisplus-std", sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Today
          </a>
          <a
            href="#stories"
            className="flex h-12 min-w-[132px] items-center justify-center rounded-full bg-secondary px-5 py-1 text-background hover:brightness-95"
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
