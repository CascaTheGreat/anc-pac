export function QouteSection() {
  return (
    <section id="qoute">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-4 sm:gap-y-12  gap-y-12 md:gap-y-32 items-center">
        <h1 className="max-w-xl text-4xl leading-[1.2] tracking-tight text-background md:text-5xl lg:text-6xl">
          <span className="text-secondary">“ </span>
          Students have to be active in protecting their college experience.
          <span className="text-secondary"> ”</span>
        </h1>
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/w2NGOcI7_u4?si=-Jn0GKBec9G0tDYg&amp;controls=0&rel=0&playsinline=0"
            title="ANC Launch Video"
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
