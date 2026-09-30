import Image from "next/image";
import Container from "@/app/_components/container";
import { type Issue, IssueCard } from "@/app/_components/issue-card";

const issues: Issue[] = [
  {
    id: 1,
    name: "Create a more equitable conduct system.",
    content:
      "The student conduct system has increasingly been weaponized to target students and undermine their ability to grow as individuals.",
  },
  {
    id: 2,
    name: "Rebuilding campus culture",
    content: "Protecting student privacy.",
  },
];

export default function IssuesPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="mb-10 text-5xl text-primary md:text-7xl">Issues</h1>
        </div>
        <div className="grid grid-cols-1 max-w-6xl mx-auto">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </Container>
    </main>
  );
}
