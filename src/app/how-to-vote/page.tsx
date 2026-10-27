import Container from "@/app/_components/container";
import { VotingQuiz } from "@/app/_components/voting-quiz";
import { ELECTION_DATE, LAST_UPDATED, SITE_NAME } from "@/lib/site";

export const metadata = {
  title:
    "How to Vote in the 2026 D.C. ANC Election | Americans for Neighborhood Change",
  description:
    "Make a voting plan for the November 3, 2026 D.C. Advisory Neighborhood Commission election, including Georgetown student voters.",
  alternates: { canonical: "/how-to-vote" },
};

export default function HowToVotePage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <VotingQuiz />
          <p className="mt-8 text-sm text-text/70">
            Last updated October 27, 2026. Confirm current registration and
            ballot requirements with the D.C. Board of Elections.
          </p>
        </div>
      </Container>
    </main>
  );
}
