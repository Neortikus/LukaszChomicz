import type { EventInfo } from "@/content/types";
import { Bullets } from "./Blocks";

export function EventCard({ e, full }: { e: EventInfo; full?: boolean }) {
  return (
    <li className="event" id={e.slug}>
      <div className="event__date">
        <strong>{e.dates}</strong>
        <span>{e.place}</span>
      </div>
      <div className="event__body">
        <h3>{e.title}</h3>
        <p>{e.lede}</p>
        {full && (
          <>
            <dl className="facts">
              {e.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <div style={{ marginTop: 20 }}>
              <Bullets points={e.points} />
            </div>
          </>
        )}
        <div className="cta-row">
          <a
            className="btn"
            href={e.cta.href}
            {...(e.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {e.cta.label}
          </a>
        </div>
      </div>
    </li>
  );
}
