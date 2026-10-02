import Image from "next/image";
export function QouteSection() {
  return (
    <section id="qoute">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-4 sm:gap-y-12  gap-y-20 md:gap-y-32 items-center">
        <h1 className="max-w-xl text-4xl leading-[1.2] tracking-tight text-background md:text-5xl lg:text-6xl">
          <span className="text-secondary">“ </span>
          Students must work together to build a campus that works for everyone.
          <span className="text-secondary"> ”</span>
        </h1>
        <Image src="/assets/protest.jpg" alt="Quote" width={500} height={300} />
        {/*<iframe
          width="672"
          height="378"
          src="https://www.youtube.com/embed/FnHMY0wTnLE"
          title="Joe Biden yells SODA"
          className="w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>*/}
      </div>
    </section>
  );
}
