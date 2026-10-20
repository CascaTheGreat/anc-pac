import Container from "@/app/_components/container";
import { VotingQuiz } from "@/app/_components/voting-quiz";

export const metadata = {
  title: "How to Vote | Americans for Neighborhood Change",
  description: "Find your voting plan in a few quick questions.",
};

export default function HowToVotePage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <VotingQuiz />
        </div>
      </Container>
    </main>
  );
}
