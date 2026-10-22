import type { SignpostArm, Trail } from "@/content/types";

/**
 * Trails drawn over the dawn photo (2600 x 1196). Coordinates are in the
 * photo's own pixels and the SVG uses the same "slice" fit as the image,
 * so every route meets the real summit on any screen.
 */
const SUMMIT = { x: 1436, y: 322 };

/*
 * Routes start on the mountain's own lower slopes, just above the tree tops
 * of the foreground forest (y about 455), and climb the visible face.
 */
const routes: Record<Trail, string> = {
  // long, even approach from the west, then along the ridge
  red: "M1165,446 C1190,428 1205,404 1232,384 C1272,360 1322,349 1362,339 C1396,331 1420,325 1436,322",
  // up the western gully
  blue: "M1272,456 C1292,432 1318,414 1340,394 C1364,372 1390,352 1410,339 C1422,331 1430,326 1436,322",
  // the steep, direct line
  black: "M1430,458 L1433,410 L1434,365 L1436,322",
  // switchbacks on the eastern face
  yellow: "M1575,458 L1590,448 L1532,437 L1567,427 L1516,417 L1545,406 L1500,396 L1522,386 L1483,375 L1500,365 L1466,355 L1477,344 L1458,334 L1436,322",
  // along the eastern ridge, with the view
  green: "M1730,452 C1700,426 1668,402 1630,382 C1580,360 1522,346 1482,334 C1460,328 1446,324 1436,322",
};

const order: Trail[] = ["red", "blue", "black", "yellow", "green"];

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
        <linearGradient id="j-fade" gradientUnits="userSpaceOnUse" x1="0" y1="470" x2="0" y2="315">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.2" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="j-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="2600" height="1196">
          <rect width="2600" height="1196" fill="url(#j-fade)" />
        </mask>
        <filter id="j-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <radialGradient id="j-summit">
          <stop offset="0" stopColor="#f3c680" stopOpacity="0.55" />
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

      <circle cx={SUMMIT.x} cy={SUMMIT.y} r="40" fill="url(#j-summit)" className="jsummit__halo" />
      <circle cx={SUMMIT.x} cy={SUMMIT.y} r="5" className="jsummit__dot" />
      <text x={SUMMIT.x + 26} y={SUMMIT.y - 22} className="jsummit__label">
        {summit}
      </text>

    </svg>
  );
}
