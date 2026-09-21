import type { Project } from "@/data/content";

export function Details({ project }: { project: Project }) {
  return (
    <div
      className={`project-text relative z-2 ${project.reverse ? "text-right" : ""}`}
    >
      <div className="bignum display text-[clamp(64px,9vw,130px)] leading-[.8] text-accent transition-transform duration-700">
        {project.n}
      </div>
      <h3 className="display mt-4.5 text-[clamp(28px,3.4vw,44px)]">
        {project.title}
      </h3>
      <div className="tag-row mt-4.5 flex flex-wrap gap-2.25">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6.5 flex flex-col gap-5">
        <div>
          <div className="spec-label">Role</div>
          <div className="push mt-1.25 max-w-[40ch] text-[17px] text-(--ink-soft)">
            {project.role}
          </div>
        </div>
        <div>
          <div className="spec-label">Stack</div>
          <div className="tag-row mt-2.25 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="spec-label">What I built</div>
          <ul className="push mt-2 flex max-w-[44ch] list-none flex-col gap-1.75 p-0 text-left text-[17px] text-(--ink-soft)">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
