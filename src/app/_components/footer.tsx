import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import InstagramIcon from "./instagram-icon";
import TikTokIcon from "./tiktok-icon";

export function Footer() {
  return (
    <footer className="border-t-4 border-secondary bg-primary text-background">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 py-14 lg:flex-row">
          <div className="lg:w-1/2">
            <p
              className="mb-5 text-2xl font-bold uppercase leading-none tracking-tight text-secondary"
              style={{ fontFamily: '"parisplus-std", sans-serif' }}
            >
              Stronger together.
            </p>
            <div className="border-l-4 border-secondary pl-4 text-sm">
              <p>© 2026 Americans For Neighborhood Change</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/anc.fyi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-secondary"
              >
                <InstagramIcon props={{ className: "w-6 h-6" }} />
              </a>
              <a
                href="https://www.tiktok.com/@anc.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-secondary"
              >
                <TikTokIcon props={{ className: "w-6 h-6" }} />
              </a>
            </div>
          </div>
          <div className=" text-sm font-bold uppercase tracking-widest lg:pt-1 flex flex-col items-end">
            <a
              href="/privacy-policy"
              className="underline decoration-secondary decoration-2 hover:text-secondary"
            >
              Privacy Policy
            </a>
            <br />
            <p className="mb-4 max-w-xl text-sm leading-relaxed text-background text-end">
              ANC is a student-led, non-partisan PAC that works to support
              Georgetown University students and their interests in the
              political process. ANC is not affiliated with Georgetown
              University.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
