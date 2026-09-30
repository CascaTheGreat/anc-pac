import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { QouteSection } from "@/app/_components/qoute";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className=" md:py-8 mb-8">
        <Container>
          <Intro />
        </Container>
      </div>
      <div className="bg-primary py-16 text-background">
        <Container>
          <QouteSection />
        </Container>
      </div>
      <div className="py-16">
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
      <div className="bg-primary py-16 text-background">
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </div>
    </main>
  );
}
