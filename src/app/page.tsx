import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { QouteSection } from "@/app/_components/qoute";
import { ELECTION_DATE, INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Americans for Neighborhood Change",
  description:
    "A student-led campaign to elect Georgetown students to Advisory Neighborhood Commission seats in Washington, D.C., on November 3, 2026.",
  alternates: { canonical: "/" },
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [INSTAGRAM_URL],
    description:
      "A student-led campaign to elect Georgetown students to Advisory Neighborhood Commission seats in Washington, D.C.",
  };
  const electionSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Washington, D.C. Advisory Neighborhood Commission election",
    startDate: `${ELECTION_DATE}T00:00:00-04:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Washington, D.C.",
      address: { "@type": "PostalAddress", addressLocality: "Washington" },
    },
    organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/how-to-vote`,
  };

  return (
    <main>
      <div className="sr-only">
        Americans for Neighborhood Change is a student-led campaign to elect
        Georgetown students to Advisory Neighborhood Commission seats in
        Washington, D.C., on November 3, 2026.
      </div>
      <div className="mb-8 w-full">
        <Container>
          <Intro />
        </Container>
      </div>
      <div className="bg-primary py-16 text-background">
        <Container>
          <QouteSection />
        </Container>
      </div>
      <div className="pt-4 md:py-16">
        <Container>
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </Container>
      </div>
      <div className="bg-primary md:py-16 py-8 text-background">
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, electionSchema]),
        }}
      />
    </main>
  );
}
