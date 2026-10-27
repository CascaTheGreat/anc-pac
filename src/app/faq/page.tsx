import Container from "@/app/_components/container";
import { IssueCard } from "@/app/_components/issue-card";
import { faqs, LAST_UPDATED, SITE_NAME } from "@/lib/site";

export const metadata = {
  title:
    "FAQ: Georgetown Student Voters and ANC 2E | Americans for Neighborhood Change",
  description:
    "Answers about voting, international student eligibility, Advisory Neighborhood Commissions, and the Georgetown student campaign for ANC 2E.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Frequently Asked Questions",
    dateModified: LAST_UPDATED,
    url: "https://www.anc.fyi/faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

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
        <p className="mt-4 text-lg text-primary max-w-6xl mx-auto">
          {SITE_NAME} is a student-led campaign to elect Georgetown students to
          Advisory Neighborhood Commission seats in Washington, D.C., on
          November 3, 2026.
        </p>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
