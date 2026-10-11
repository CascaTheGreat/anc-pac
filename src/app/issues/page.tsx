import Image from "next/image";
import Container from "@/app/_components/container";
import { type Issue, IssueCard } from "@/app/_components/issue-card";

const issues: Issue[] = [
  {
    id: 6,
    name: "Better Support for Student Renters",
    content:
      "Students living off campus should not have to navigate confusing systems alone when landlords fail to address serious maintenance or housing problems. We support programs to connect renters with the correct D.C. agencies and existing tenant resources, create clearer information about how to document and report unresolved problems, and use the ANC to follow up on recurring housing concerns affecting Georgetown residents.",
  },
  {
    id: 2,
    name: "Fair & Transparent Neighborhood Enforcement",
    content:
      "Students should understand the rules they are expected to follow and have confidence that neighborhood enforcement is consistent and transparent. Clearer SNAP reporting procedures, greater transparency around enforcement decisions, and meaningful opportunities for student input should be built into the system to ensure that students are treated fairly and equitably.",
  },
  {
    id: 5,
    name: "Common-Sense Trash Enforcement",
    content:
      "Keeping Georgetown clean matters, but minor mistakes should not automatically result in disproportionate penalties. We support clearer sanitation rules and a warning-first approach to minor, first-time violations while supporting stronger enforcement for repeated or serious problems.",
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
  {
    id: 1,
    name: "Create a more equitable conduct system.",
    content:
      "The student conduct system has increasingly been weaponized to target students and undermine their ability to grow as individuals.",
  },
];

export default function IssuesPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
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
