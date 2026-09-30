import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-4 border-secondary bg-primary text-background">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 py-14 lg:flex-row">
          <div className="lg:w-1/2">
            <p className="mb-5 font-sans text-2xl font-bold uppercase leading-none tracking-tight text-secondary">
              Stronger together.
            </p>
            <div className="border-l-4 border-secondary pl-4 font-sans text-sm">
              <p>© 2026 Americans For Neighborhood Cohesion</p>
            </div>
          </div>
          <div className="font-sans text-sm font-bold uppercase tracking-widest lg:pt-1">
            <a
              href="/privacy-policy"
              className="underline decoration-secondary decoration-2 hover:text-secondary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
