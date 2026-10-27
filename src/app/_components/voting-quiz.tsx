"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type RegistrationStatus = "registered" | "unregistered" | null;
type MailBallotStatus = "has-ballot" | "no-ballot" | null;
type HousingStatus = "on-campus" | "off-campus" | null;

const dormOptions = [
  {
    id: "southwest-quad",
    label: "Southwest Quad",
    district: "2E04 - West Campus",
  },
  { id: "vil-a", label: "Village A", district: "2E04 - West Campus" },
  { id: "new-south", label: "New South", district: "2E04 - West Campus" },
  { id: "vcw", label: "Village C West", district: "2E04 - West Campus" },
  { id: "vce", label: "Village C East", district: "2E08 - East Campus" },
  { id: "vil-b", label: "Village B", district: "2E08 - East Campus" },
  { id: "arrupe", label: "Arrupe", district: "2E08 - East Campus" },
  {
    id: "byrnes-hayden-henle",
    label: "Byrnes/Hayden/Henle",
    district: "2E08 - East Campus",
  },
  {
    id: "townhouses-between-37th-and-36th",
    label: "Townhouses between 37th & 36th St",
    district: "2E08 - East Campus",
  },
  { id: "nevils-lxr", label: "Nevils/LXR", district: "2E05" },
  { id: "darnall", label: "Darnall", district: "2E02" },
  { id: "burleith", label: "Burleith", district: "2E01" },
  {
    id: "other-georgetown-townhouses",
    label: "Other Georgetown townhouses",
    district: "2E03",
  },
] as const;

const offCampusDormIds = new Set([
  "townhouses-between-37th-and-36th",
  "burleith",
  "other-georgetown-townhouses",
]);

const answerClasses =
  "flex min-h-16 w-full items-center justify-between rounded-lg border-2 border-primary bg-background px-5 py-4 text-left text-base font-bold text-primary transition hover:-translate-y-0.5 hover:bg-secondary hover:text-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent";

const trackQuizEvent = (
  eventName: string,
  parameters: Record<string, string>,
) => {
  sendGAEvent("event", eventName, parameters);
};

export function VotingQuiz() {
  const [registrationStatus, setRegistrationStatus] =
    useState<RegistrationStatus>(null);
  const [mailBallotStatus, setMailBallotStatus] =
    useState<MailBallotStatus>(null);
  const [housingStatus, setHousingStatus] = useState<HousingStatus>(null);
  const [dorm, setDorm] = useState<(typeof dormOptions)[number] | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  const isComplete =
    (registrationStatus === "unregistered" && dorm !== null) ||
    (registrationStatus === "registered" && mailBallotStatus !== null);
  const showMailBallotQuestion = registrationStatus === "registered";
  const showHousingQuestion =
    registrationStatus === "unregistered" && housingStatus === null;
  const showDormQuestion =
    registrationStatus === "unregistered" &&
    housingStatus !== null &&
    dorm === null;
  const visibleDormOptions =
    housingStatus === "off-campus"
      ? dormOptions.filter((option) => offCampusDormIds.has(option.id))
      : dormOptions.filter((option) => !offCampusDormIds.has(option.id));

  const resetQuiz = () => {
    trackQuizEvent("voting_quiz_restart", {});
    setRegistrationStatus(null);
    setMailBallotStatus(null);
    setHousingStatus(null);
    setDorm(null);
  };

  const chooseRegistrationStatus = (
    status: Exclude<RegistrationStatus, null>,
  ) => {
    trackQuizEvent("voting_quiz_answer", {
      question: "registration_status",
      answer: status,
    });
    setRegistrationStatus(status);
    setMailBallotStatus(null);
    setHousingStatus(null);
    setDorm(null);
  };

  const chooseHousingStatus = (status: Exclude<HousingStatus, null>) => {
    trackQuizEvent("voting_quiz_answer", {
      question: "housing_status",
      answer: status,
    });
    setHousingStatus(status);
    setDorm(null);
  };

  const chooseDorm = (selectedDorm: (typeof dormOptions)[number]) => {
    trackQuizEvent("voting_quiz_answer", {
      question: "dorm",
      answer: selectedDorm.id,
    });
    trackQuizEvent("voting_quiz_complete", {
      registration_status: "unregistered",
      dorm: selectedDorm.id,
      district: selectedDorm.district,
    });
    setDorm(selectedDorm);
  };

  const chooseMailBallotStatus = (status: Exclude<MailBallotStatus, null>) => {
    trackQuizEvent("voting_quiz_answer", {
      question: "mail_ballot_status",
      answer: status,
    });
    trackQuizEvent("voting_quiz_complete", {
      registration_status: "registered",
      mail_ballot_status: status,
    });
    setMailBallotStatus(status);
  };

  const shareQuiz = async () => {
    const shareData = {
      title: "How to Vote",
      text: "Find your voting plan in a few quick questions.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Shared");
        trackQuizEvent("voting_quiz_share", { method: "native_share" });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareMessage("Link copied");
        trackQuizEvent("voting_quiz_share", { method: "clipboard" });
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setShareMessage("Unable to share");
    }
  };

  const AnswerMarker = () => (
    <span
      className="relative flex h-6 w-6 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute h-5 w-5 rounded-full border-2 border-current transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0" />
      <span className="text-2xl font-sans text-primary leading-none opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        ●
      </span>
    </span>
  );

  if (isComplete) {
    return (
      <section
        aria-labelledby="quiz-results-title"
        className="rounded-2xl border-2 border-primary bg-background p-5 shadow-md sm:p-8"
      >
        <div className="flex items-start justify-between gap-4  pb-5">
          <h2
            id="quiz-results-title"
            className="text-4xl text-primary sm:text-5xl"
          >
            You&apos;re ready to vote!
          </h2>
          <button
            type="button"
            onClick={shareQuiz}
            aria-label="Share this voting quiz"
            className="flex shrink-0 items-center gap-2 rounded-full p-2 text-sm font-bold text-primary transition hover:bg-secondary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h8m0 0-3-3m3 3-3 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"
              />
            </svg>
            <span className="hidden sm:inline">{shareMessage || "Share"}</span>
          </button>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-text sm:text-lg">
          {mailBallotStatus === "has-ballot" && (
            <div className="rounded-lg border-2 border-accent p-4 sm:p-5">
              <h3 className="mb-2 text-2xl text-primary">
                Have a mail-in ballot?
              </h3>
              <p>
                Drop it off at <strong>3260 R Street NW</strong> from{" "}
                <strong>October 9 to November 3 at 8:00 PM</strong>.
              </p>
            </div>
          )}
          {registrationStatus === "unregistered" && (
            <div className="rounded-lg border-2 border-secondary p-4 sm:p-5">
              <h3 className="mb-2 text-2xl text-primary">How to register</h3>
              <p>
                <b>Same-day registration is available.</b> You&apos;ll need to
                bring proof of your campus address. We recommend a tuition or
                campus housing statement, bill, or an off-campus lease. If you
                need help, email{" "}
                <a
                  className="font-bold text-accent underline"
                  href="mailto:info@anc.fyi"
                >
                  info@anc.fyi
                </a>
                .
              </p>
            </div>
          )}
          {dorm !== null && (
            <div className="rounded-lg border-2 border-accent p-4 sm:p-5">
              <h3 className="mb-2 text-2xl text-primary">Your ANC district</h3>
              <p>
                Based on your dorm, <strong>{dorm.label}</strong>, you are in
                ANC District <strong>{dorm.district}</strong>.{" "}
                {offCampusDormIds.has(dorm.id) ? (
                  <>
                    When registering, use your{" "}
                    <strong>off-campus address</strong> to vote in the correct
                    district.
                  </>
                ) : (
                  <>
                    When registering, <strong>note your dorm building.</strong>{" "}
                    <br />
                    Your address should look like this:{" "}
                    <strong> 123 {dorm.label}, 3700 O St NW, 20057.</strong>
                  </>
                )}
              </p>
            </div>
          )}

          <div>
            <h3 className="mb-2 text-2xl text-primary">Vote early</h3>
            <p>
              We recommend voting early at{" "}
              <a
                className="font-bold text-accent underline"
                href="https://maps.app.goo.gl/pxo3wZCs5BhHW1DJ6"
              >
                3260 R Street NW
              </a>
              , open <strong>Oct 26 to Nov 1 from 8:30 AM to 7 PM</strong>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-2xl text-primary">Vote on Election Day</h3>
            <p>
              You can also vote on <strong>November 3rd</strong> from{" "}
              <strong>7AM to 8PM</strong> at{" "}
              <a
                className="font-bold text-accent underline"
                href="https://maps.app.goo.gl/pxo3wZCs5BhHW1DJ6"
              >
                3260 R Street NW
              </a>{" "}
              (20 minute walk) or at{" "}
              <a
                className="font-bold text-accent underline"
                href="https://maps.app.goo.gl/UFpptd1fCVvnUX8SA"
              >
                1819 35th Street NW
              </a>{" "}
              (15 minute walk from campus).
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="button"
            onClick={resetQuiz}
            className="mt-4 flex w-full items-center justify-center rounded-full border border-primary bg-background px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-primary transition hover:text-background hover:bg-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start over
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://calendar.google.com/calendar/u/0/r/eventedit?text=%F0%9F%97%B3%EF%B8%8F+Election+Day&dates=20261103T120000Z/20261104T010000Z&details=Get+out+to+vote+today!+&location=1819+35th+St+NW,+Washington,+DC+20007&ctz=America/New_York",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition hover:bg-secondary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Add to calendar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="quiz-question-title"
      className="rounded-2xl border-2 border-primary bg-background p-5 shadow-md sm:p-8"
    >
      <div className="mb-8 flex items-start justify-between gap-4 border-b-2 border-secondary pb-5">
        <h2
          id="quiz-question-title"
          className="text-3xl leading-tight text-primary sm:text-4xl"
        >
          {showHousingQuestion
            ? "Do you live on or off campus?"
            : showDormQuestion
              ? "Which dorm do you live in?"
              : showMailBallotQuestion
                ? "Do you have a mail-in ballot?"
                : "Are you registered to vote in DC?"}
        </h2>

        <button
          type="button"
          onClick={shareQuiz}
          aria-label="Share this voting quiz"
          className="flex shrink-0 items-center gap-2 rounded-full p-2 text-sm font-bold text-primary transition hover:bg-secondary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h8m0 0-3-3m3 3-3 3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"
            />
          </svg>
          <span className="hidden sm:inline">{shareMessage || "Share"}</span>
        </button>
      </div>

      <div className="grid gap-3">
        {showHousingQuestion ? (
          <>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseHousingStatus("on-campus")}
            >
              On campus <AnswerMarker />
            </button>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseHousingStatus("off-campus")}
            >
              Off campus <AnswerMarker />
            </button>
          </>
        ) : showDormQuestion ? (
          visibleDormOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseDorm(option)}
            >
              {option.label} <AnswerMarker />
            </button>
          ))
        ) : !showMailBallotQuestion ? (
          <>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseRegistrationStatus("registered")}
            >
              Yes <AnswerMarker />
            </button>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseRegistrationStatus("unregistered")}
            >
              No — no worries! <AnswerMarker />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseMailBallotStatus("has-ballot")}
            >
              Yes <AnswerMarker />
            </button>
            <button
              type="button"
              className={`${answerClasses} group`}
              onClick={() => chooseMailBallotStatus("no-ballot")}
            >
              No <AnswerMarker />
            </button>
            <button
              type="button"
              onClick={resetQuiz}
              className="mt-2 justify-self-start text-sm font-bold text-accent underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Start over
            </button>
          </>
        )}
      </div>
    </section>
  );
}
