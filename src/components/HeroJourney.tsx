import type { SignpostArm, Trail } from "@/content/types";

/**
 * Trails drawn over the dawn photo (2600 x 1196). Coordinates are in the
 * photo's own pixels and the SVG uses the same "slice" fit as the image,
 * so every route meets the real summit on any screen.
 */
const SUMMIT = { x: 1443, y: 325 };

const routes: Record<Trail, string> = {
  // long, even approach from the west
  red: "M1300,1196 C1290,1040 1240,900 1260,760 C1280,620 1250,520 1310,440 C1360,380 1410,340 1443,325",
  // through the valley, the whole team together
  blue: "M1480,1196 C1470,1080 1520,980 1480,860 C1440,740 1500,640 1460,540 C1440,460 1440,390 1443,325",
  // switchbacks, narrowing with distance
  yellow: "M1680,1196 L1709,1146 L1619,1096 L1683,1046 L1600,996 L1657,946 L1581,896 L1631,846 L1562,796 L1606,745 L1542,695 L1580,645 L1523,595 L1554,545 L1504,495 L1528,445 L1500,395 L1443,325",
  // the steep, direct line
  black: "M1900,1196 L1800,1000 L1700,800 L1600,610 L1520,470 L1443,325",
  // along the eastern ridge, with the view
  green: "M2150,1196 C2120,1040 2000,930 1920,800 C1840,660 1750,520 1670,440 C1590,375 1510,340 1443,325",
};

const order: Trail[] = ["red", "blue", "yellow", "black", "green"];

export function HeroJourney({ arms, summit }: { arms: SignpostArm[]; summit: string }) {
  const byTrail = new Map(arms.map((a) => [a.trail, a]));
  const used = order.filter((t) => byTrail.has(t));

  return (
    <svg
      className="journey"
      viewBox="0 0 2600 1196"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="j-fade" gradientUnits="userSpaceOnUse" x1="0" y1="1196" x2="0" y2="300">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.22" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="0.7" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.6" />
        </linearGradient>
        <mask id="j-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="2600" height="1196">
          <rect width="2600" height="1196" fill="url(#j-fade)" />
        </mask>
        <filter id="j-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <radialGradient id="j-summit">
          <stop offset="0" stopColor="#f3c680" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f3c680" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g mask="url(#j-mask)">
        {used.map((t) => (
          <g key={t} className={`jroute jroute--${t}`}>
            <path className="jroute__glow" d={routes[t]} filter="url(#j-glow)" />
            <path className="jroute__line" d={routes[t]} pathLength={1} />
          </g>
        ))}
      </g>

      <circle cx={SUMMIT.x} cy={SUMMIT.y} r="60" fill="url(#j-summit)" className="jsummit__halo" />
      <circle cx={SUMMIT.x} cy={SUMMIT.y} r="7" className="jsummit__dot" />
      <text x={SUMMIT.x + 34} y={SUMMIT.y - 26} className="jsummit__label">
        {summit}
      </text>

    </svg>
  );
}
