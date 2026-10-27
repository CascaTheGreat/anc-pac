import Container from "@/app/_components/container";
import { IssueCard } from "@/app/_components/issue-card";
import { issues } from "@/lib/site";

export const metadata = {
  title: "Georgetown ANC 2E Issues | Americans for Neighborhood Change",
  description:
    "Our positions on student renters, neighborhood enforcement, campus culture, fair representation, and conduct in Georgetown's ANC 2E.",
  alternates: { canonical: "/issues" },
};

export default function IssuesPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-0 text-5xl text-primary md:text-7xl">Issues</h1>
          <p className="mb-10 max-w-4xl text-xl leading-relaxed">
            We are running to give students a fair voice in ANC 2E and to build
            a better neighborhood for students and longtime residents.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1">
          {issues.map((issue) => (
            <div key={issue.id} className="group">
              <IssueCard issue={issue} />
              <a
                href={`/issues/${issue.slug}`}
                className="mb-4 inline-block px-0 text-sm font-bold text-primary underline md:px-6"
              >
                Read the full position
              </a>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
