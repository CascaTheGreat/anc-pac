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
    name: "Protect student privacy.",
    content:
      "Georgetown has shown repeated disregard for student privacy. The recent license plate scanning initiative has raised concerns about the collection and use of student data, especially when the University threatents student's ability to register for classes and cooercing consent. Students' personal information should be protected and not used for purposes other than those for which it was collected. Recent data breaches have only further eroded trust in the University's commitment to protecting student information.",
  },
  {
    id: 3,
    name: "Rebuild campus culture.",
    content:
      "Programs like SNAP have supressed campus culture and created an environment where students can't be college students. We must work to rebuild a culture that supports and encourages student growth and development, not punish them for minor infractions.",
  },
  {
    id: 4,
    name: "Create a fair electoral process.",
    content:
      "Students are split between five SMD seats in an effort to dilute their voices. Despite making 45% of the population in the ANC, they often hold less than 25% of the seats. This removes valuable opportunities for students to raise concerns in proper channels and defuse conflicts before they happen. We support redistricting to ensure fair representation, with at least three student majority districts to approach fair representation.",
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
