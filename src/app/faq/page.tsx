import Container from "@/app/_components/container";
import { IssueCard, type Issue } from "@/app/_components/issue-card";

const faqs: Issue[] = [
  {
    id: 6,
    name: "How do I vote?",
    content:
      "Visit our How to Vote page for a quick guide that helps you find the information you need to make your voting plan.",
  },
  {
    id: 8,
    name: "Why should I vote in a local election?",
    content:
      "Voting in ANC elections lets students control the bodies that make huge decisions about their college experience, like SNAPS and off-campus housing. Electing Hoyas to local positions is a key part of protecting the college experience.",
  },
  {
    id: 3,
    name: "What is an Advisory Neighborhood Commission?",
    content:
      "An Advisory Neighborhood Commission, or ANC, is a local body that advises the D.C. government on issues affecting its neighborhood. Commissioners represent single-member districts and help residents raise concerns about matters such as housing, sanitation, public safety, and neighborhood services.",
  },
  {
    id: 7,
    name: "Can international students vote?",
    content:
      "International students can participate in local elections, so long as they have lived in DC for 30 days and aren't voting in another state. We can only accept donations from US citizens or permanent residents, but we welcome volunteers from all backgrounds.",
  },
  {
    id: 5,
    name: "How can I get involved?",
    content:
      "You can volunteer, talk with your neighbors about the issues, and help make sure students participate in local elections. Every conversation and every vote helps build a neighborhood where residents are represented fairly.",
  },
  {
    id: 4,
    name: "What issues does the campaign support?",
    content:
      "We support better resources for student renters, fair and transparent neighborhood enforcement, common-sense trash enforcement, a stronger campus culture, a fair electoral process, and a more equitable conduct system. You can read more about each position on our Issues page.",
  },
  {
    id: 2,
    name: "Why are students a focus of this campaign?",
    content:
      "Students make up a significant part of the neighborhood, but their voices are often divided and underrepresented. We want students to be treated as neighbors and included in a fair, constructive process alongside everyone else who calls Georgetown home.",
  },
  {
    id: 1,
    name: "What is Americans for Neighborhood Change?",
    content:
      "Americans for Neighborhood Change is a local, DC-based Political Action Committee advocating for student voices. We believe people who live here should have a meaningful say in the decisions that affect their daily lives, and that students should be included in the decision-making process.",
  },
];

export const metadata = {
  title: "FAQ | Americans for Neighborhood Change",
  description: "Answers to frequently asked questions about our campaign.",
};

export default function FAQPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-5xl text-primary md:text-7xl">FAQ</h1>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1">
          {faqs.map((faq) => (
            <IssueCard key={faq.id} issue={faq} />
          ))}
        </div>
      </Container>
    </main>
  );
}
