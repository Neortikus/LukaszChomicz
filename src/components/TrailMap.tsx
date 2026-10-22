import { Link } from "@/i18n/navigation";
import type { SignpostArm, Trail } from "@/content/types";

/**
 * Horizontal mountain panorama: five marked trails start at the bottom and
 * reach the same summit, each by a different route. Trailheads under the
 * drawing are the links; hovering one highlights its route.
 */

// Trail start x (viewBox 1200 wide) matches the centre of its trailhead column.
const routes: Record<Trail, { x: number; d: string }> = {
  // Mentoring: long, even traverse along the western ridge
  red: { x: 120, d: "M120,560 C220,500 300,440 380,395 C460,350 520,300 560,262 C610,216 650,176 690,140 C730,108 760,88 780,80" },
  // Training: through the valley, then together up the shoulder
  blue: { x: 360, d: "M360,560 C400,502 480,490 500,432 C520,380 470,350 520,318 C580,282 620,300 650,250 C680,200 720,190 745,140 C760,110 772,92 780,80" },
  // Mountain networking: switchbacks
  yellow: { x: 600, d: "M600,560 L688,516 L612,472 L700,428 L632,384 L718,340 L668,294 L744,244 L714,192 L768,136 L780,80" },
  // Interim manager: shortest and steepest
  black: { x: 840, d: "M840,560 L818,410 L804,262 L780,80" },
  // Speaking: along the eastern ridge with the view
  green: { x: 1080, d: "M1080,560 C1050,490 990,452 962,396 C934,340 992,300 942,246 C896,200 830,150 780,80" },
};

const order: Trail[] = ["red", "blue", "yellow", "black", "green"];

export function TrailMap({ label, summit, arms }: { label: string; summit: string; arms: SignpostArm[] }) {
  const byTrail = new Map(arms.map((a) => [a.trail, a]));
  const used = order.filter((t) => byTrail.has(t));

  return (
    <nav className="trailmap" aria-label={label}>
      <div className="trailmap__scene">
        <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="tm-massif" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5b536c" />
              <stop offset="1" stopColor="#2b2534" />
            </linearGradient>
            <linearGradient id="tm-back" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8e5ba6" stopOpacity="0.55" />
              <stop offset="1" stopColor="#704080" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="tm-sun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#f3c680" stopOpacity="0.9" />
              <stop offset="1" stopColor="#f3c680" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="960" cy="150" r="150" fill="url(#tm-sun)" />
          <circle cx="960" cy="150" r="26" fill="#f3c680" opacity="0.85" />

          {/* far ridges */}
          <path
            d="M0,560 L0,300 C90,270 170,210 260,196 C330,186 380,150 430,138 C500,122 540,170 600,176 C660,182 700,150 760,150 C860,150 930,120 1010,110 C1080,100 1140,140 1200,160 L1200,560 Z"
            fill="url(#tm-back)"
          />
          {/* main massif with the summit */}
          <path
            d="M0,560 L0,430 C110,396 220,344 330,312 C430,282 520,232 600,180 C670,134 730,94 780,80 C826,92 880,128 938,170 C1016,222 1104,262 1200,296 L1200,560 Z"
            fill="url(#tm-massif)"
          />
          {/* snow and light on the summit */}
          <path d="M748,104 L780,80 L812,100 L796,104 L784,96 L768,110 Z" fill="#ede5f0" opacity="0.8" />
          {/* forest foreground */}
          <path
            d="M0,560 L0,508 C140,486 280,528 420,506 C560,484 700,530 840,508 C980,486 1100,526 1200,500 L1200,560 Z"
            fill="#211d29"
          />

          {used.map((t) => (
            <g key={t} className={`route route--${t}`}>
              <path className="route__base" d={routes[t].d} pathLength={1} />
              <path className="route__color" d={routes[t].d} pathLength={1} />
              <circle className="route__start" cx={routes[t].x} cy={548} r={7} />
            </g>
          ))}

          {/* summit flag */}
          <g className="summit">
            <line x1="780" y1="80" x2="780" y2="34" />
            <path d="M780,34 L812,44 L780,54 Z" />
          </g>
          <text className="summit__label" x="826" y="62">
            {summit}
          </text>
        </svg>
      </div>

      <ul className="trailheads">
        {used.map((t) => {
          const a = byTrail.get(t)!;
          return (
            <li key={t}>
              <Link href={a.href} className={`trailhead trailhead--${t}`} data-trail={t}>
                <span aria-hidden="true" className={`trail trail--${t}`} />
                <span className="trailhead__label">{a.label}</span>
                <span className="trailhead__detail">{a.detail}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
