import Container from "@/app/_components/container";
import { VotingQuiz } from "@/app/_components/voting-quiz";

export const metadata = {
  title: "How to Vote | Americans for Neighborhood Cohesion",
  description: "Find your voting plan in a few quick questions.",
};

export default function HowToVotePage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-5 text-5xl leading-none text-primary md:text-7xl">
            How to vote
          </h1>
          <VotingQuiz />
        </div>
      </Container>
    </main>
  );
}
