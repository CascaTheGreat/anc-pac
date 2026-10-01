import ANCLogo from "@/app/_components/logo";

export function Intro() {
  return (
    <section className="md:py-2 py-2">
      <div data-home-logo className="flex items-center justify-center">
        <ANCLogo height={115} width={200} />
      </div>
      <div
        className="grid gap-12 md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24"
        id="intro"
      >
        <div className="relative flex h-[20rem] items-center justify-center sm:h-[24rem] md:h-auto md:min-h-[38rem]">
          <img
            src="/assets/students.png"
            alt="Students Walking"
            className="relative z-10 max-h-full max-w-full object-contain"
          />
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary transform rotate-6 h-[200px] m-auto"></div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="max-w-xl text-4xl leading-[0.98] tracking-tight text-primary md:text-5xl lg:text-6xl">
            It's time for Hoyas to start winning local offices.
          </h1>
          <h2 className="mt-8 text-md leading-none text-primary md:text-2xl">
            Join the fight.
          </h2>
          <form
            className="mt-5 space-y-2.5"
            action="https://api.staticforms.dev/submit"
            method="POST"
          >
            <input type="hidden" name="subject" value="ANC Form submission" />
            <input
              type="hidden"
              name="apiKey"
              value="sf_268a7dac1e8a1be516b3c7d2"
            />
            <input type="hidden" name="redirectTo" value="/" />
            <div className="grid gap-2.5 sm:grid-cols-2">
              <label className="sr-only" htmlFor="first-name">
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                className="h-[4.25rem] w-full rounded-2xl border border-primary/20 bg-white px-4 text-lg text-text placeholder:text-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <label className="sr-only" htmlFor="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                className="h-[4.25rem] w-full rounded-2xl border border-primary/20 bg-white px-4 text-lg text-text placeholder:text-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="h-[4.25rem] w-full rounded-2xl border border-primary/20 bg-white px-4 text-lg text-text placeholder:text-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="grid gap-2.5 sm:grid-cols-[1.35fr_0.85fr]">
              <label className="sr-only" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                className="h-[4.25rem] w-full rounded-2xl border border-primary/20 bg-white px-4 text-lg text-text placeholder:text-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <label className="sr-only" htmlFor="zip-code">
                Zip Code
              </label>
              <input
                id="zip-code"
                name="zipCode"
                type="text"
                inputMode="numeric"
                placeholder="Zip Code"
                autoComplete="postal-code"
                className="h-[4.25rem] w-full rounded-2xl border border-primary/20 bg-white px-4 text-lg text-text placeholder:text-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <label className="flex items-center gap-3 pt-2 text-lg font-bold text-text">
              <input
                type="checkbox"
                name="volunteer"
                className="h-6 w-6 rounded border-primary/25 text-primary focus:ring-primary"
              />
              I want to volunteer!
            </label>
            <label className="flex items-start gap-3 pt-1 text-sm leading-tight text-text/80">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 h-6 w-6 shrink-0 rounded border-primary/25 text-primary focus:ring-primary"
              />
              <span>
                By submitting this form and signing up for texts, you consent to
                receive donation asks and informational messages from Americans
                for Neighborhood Cohesion. Msg &amp; data rates may apply. Msg
                frequency varies. Unsubscribe at any time by replying STOP.
                Reply HELP for help. Privacy Policy &amp; Terms.
              </span>
            </label>
            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="inline-flex min-w-56 items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign Up <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
