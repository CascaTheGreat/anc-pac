import Image from "next/image";
import Container from "@/app/_components/container";

const endorsements = [
  {
    id: 1,
    image: "",
    alt: "Jack Hill endorsement",
    name: `Jack Hill`,
    race: "SMD Seat 2E 08",
    link: "https://google.com",
  },
];

export default function EndorsementsPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-5xl text-primary md:text-7xl">
            Endorsements
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {endorsements.map((endorsement) => (
              <div
                key={endorsement.id}
                className="relative aspect-square overflow-hidden rounded-3xl border-2 border-primary"
              >
                <Image
                  src={endorsement.image}
                  alt={endorsement.alt}
                  fill
                  sizes="(min-width: 768px) 31vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background p-5 px-8 border-t-2 border-secondary">
                  <h2 className="text-2xl font-bold text-primary">
                    {endorsement.name}
                  </h2>
                  <p className="text-sm text-text">{endorsement.race}</p>
                  <a
                    href={endorsement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${endorsement.name} endorsement`}
                    className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-2xl leading-none text-background transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
