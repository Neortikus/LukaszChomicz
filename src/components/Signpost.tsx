import { Link } from "@/i18n/navigation";
import type { SignpostArm } from "@/content/types";

/**
 * Navigation drawn as a Beskid trail signpost. Each arm carries a real trail
 * marking (white-colour-white). Arms alternate left and right on wide screens
 * and all point right on narrow ones.
 */
export function Signpost({ label, arms }: { label: string; arms: SignpostArm[] }) {
  return (
    <nav className="signpost" aria-label={label}>
      <p className="signpost__label">{label}</p>
      <span className="signpost__cap" aria-hidden="true" />
      <span className="signpost__pole" aria-hidden="true" />
      <ul className="signpost__arms">
        {arms.map((arm, i) => (
          <li className="signpost__arm" key={arm.href}>
            <Link href={arm.href} className={`plate${i % 2 === 1 ? " plate--left" : ""}`}>
              <span className="plate__inner">
                <span aria-hidden="true" className={`trail trail--${arm.trail}`} />
                <span className="plate__text">
                  <span className="plate__label">{arm.label}</span>
                  <span className="plate__detail">{arm.detail}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
