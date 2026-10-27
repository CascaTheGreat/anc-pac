import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: "Volunteer in Georgetown | Americans for Neighborhood Change",
  description:
    "Join the student-led campaign working for fair representation in Georgetown's Advisory Neighborhood Commission.",
  alternates: { canonical: "/volunteer" },
};

export default function VolunteerPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-primary">
            {SITE_NAME} is a student-led campaign to elect Georgetown students
            to Advisory Neighborhood Commission seats in Washington, D.C., on
            November 3, 2026.
          </p>
          <h1 className="mb-8 text-5xl text-primary md:text-7xl">Volunteer</h1>
          <p className="mb-6 text-xl leading-relaxed">
            Help us reach students and neighbors before Election Day. Sign up on
            the home page, share our positions, and talk with people in your
            community about why fair representation in ANC 2E matters.
          </p>
          <a
            href="/#intro"
            className="w-full inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-primary/90"
          >
            Sign up to volunteer
          </a>
        </article>
      </Container>
    </main>
  );
}
