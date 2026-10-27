import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import { issues, SITE_NAME, SITE_URL } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const issue = issues.find((entry) => entry.slug === slug);

  if (!issue) return {};

  return {
    title: `${issue.name} | ${SITE_NAME}`,
    description: issue.content,
    alternates: { canonical: `/issues/${issue.slug}` },
  };
}

export default async function IssuePage({ params }: Params) {
  const { slug } = await params;
  const issue = issues.find((entry) => entry.slug === slug);

  if (!issue) notFound();

  const issueSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: issue.name,
    description: issue.content,
    url: `${SITE_URL}/issues/${issue.slug}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <main className="py-12 md:py-20">
      <Container>
        <article className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-wide text-primary">
            <a href="/issues" className="underline">
              Issues
            </a>{" "}
            / Georgetown ANC 2E
          </p>
          <h1 className="mb-8 text-5xl text-primary md:text-7xl">
            {issue.name}
          </h1>
          <p className="text-xl leading-relaxed">{issue.content}</p>
        </article>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(issueSchema) }}
      />
    </main>
  );
}
