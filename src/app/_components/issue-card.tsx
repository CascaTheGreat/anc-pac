import type { ExpandableContent } from "@/lib/site";

function IssueCard({ issue }: { issue: ExpandableContent }) {
  return (
    <details className="group flex flex-col justify-end overflow-hidden transition-transform duration-200">
      <summary className="flex w-full cursor-pointer list-none flex-row items-center justify-between border-t-4 border-secondary bg-background px-0 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-6">
        <h2 className="mb-0 pr-4 text-3xl leading-none text-primary sm:text-4xl">
          {issue.name}
        </h2>
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full text-secondary"
        >
          <span
            aria-hidden="true"
            className="size-3 origin-center rotate-45 border-b-2 border-r-2 border-secondary transition-transform duration-200 group-open:rotate-[225deg]"
          />
        </span>
      </summary>
      <div className="issue-body-reveal px-0 pb-4 pt-0 md:px-6 md:pb-6">
        <p className="max-w-full leading-relaxed text-xl">{issue.content}</p>
      </div>
    </details>
  );
}

export { IssueCard };
