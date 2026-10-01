"use client";
import { useState } from "react";
type Issue = {
  id: number;
  name: string;
  content: string;
};

function IssueCard({ issue }: { issue: Issue }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="group flex flex-col justify-end overflow-hidden transition-transform duration-200">
      <div className="flex w-full flex-row items-center justify-between border-t-4 border-secondary bg-background p-6 sm:p-8">
        <div>
          <h2 className="mb-3 text-3xl leading-none text-primary sm:text-4xl">
            {issue.name}
          </h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          aria-expanded={isExpanded}
          aria-label={
            isExpanded ? `Collapse ${issue.name}` : `Expand ${issue.name}`
          }
          className="flex size-12 shrink-0 items-center justify-center rounded-full text-secondary transition-colors  focus:outline-none focus-visible:ring-2 "
        >
          <span
            aria-hidden="true"
            className={`size-3 origin-center border-b-2 border-r-2 border-secondary transition-transform duration-200 ${
              isExpanded ? "rotate-[225deg]" : "rotate-45"
            }`}
          />
        </button>
      </div>
      {isExpanded && (
        <div className="issue-body-reveal p-6 pt-0 px-8">
          <p className="max-w-full leading-relaxed text-xl">{issue.content}</p>
        </div>
      )}
    </div>
  );
}

export { IssueCard, type Issue };
