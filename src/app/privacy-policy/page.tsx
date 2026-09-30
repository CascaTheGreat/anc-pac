import Container from "@/app/_components/container";

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="mb-8 text-5xl text-primary md:text-7xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text">
            We do not share mobile contact information with third parties or
            affiliates for marketing or promotional purposes. Information may be
            shared with subcontractors in support services, such as customer
            service. All other categories exclude text messaging originator
            opt-in data and consent; this information will not be shared with
            any third parties.
          </p>
        </div>
      </Container>
    </main>
  );
}
