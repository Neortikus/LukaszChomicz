import type { IconName } from "@/content/types";

/** Line icons matching the brand board: Rozwój, Kierunek, Świadomość, Ludzie, Działanie, Rezultaty. */
const paths: Record<IconName, React.ReactNode> = {
  rozwoj: (
    <>
      <path d="M2 19 9 8l4 6 2.5-3.5L22 19Z" />
      <path d="m7.2 10.8 1.8 1.4 1.6-1.6" />
    </>
  ),
  kierunek: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2" />
    </>
  ),
  swiadomosc: (
    <>
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M2 17h20M12 4v3M4.6 8.6l2.1 2.1M19.4 8.6l-2.1 2.1M2.5 13.5h2M19.5 13.5h2" />
    </>
  ),
  ludzie: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="5" cy="10" r="2.2" />
      <path d="M1.5 19a3.8 3.8 0 0 1 4.2-3.8" />
      <circle cx="19" cy="10" r="2.2" />
      <path d="M22.5 19a3.8 3.8 0 0 0-4.2-3.8" />
    </>
  ),
  dzialanie: (
    <>
      <path d="M17 3c3 0 3 4 0 4H8c-3.5 0-3.5 5 0 5h8c3.5 0 3.5 5 0 5H6" />
      <path d="M8 21 5 17l3-3" />
    </>
  ),
  rezultaty: (
    <>
      <path d="M2 21 9.5 9l3.5 5 2-3 7 10Z" />
      <path d="M15 11V3l4 1.5-4 1.5" />
    </>
  ),
};

export function Icon({ name, size = 32 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
