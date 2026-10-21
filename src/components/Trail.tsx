import type { Trail as TrailColour } from "@/content/types";

export function Trail({
  colour,
  size,
}: {
  colour: TrailColour;
  size?: "sm" | "lg";
}) {
  return (
    <span
      aria-hidden="true"
      className={`trail trail--${colour}${size ? ` trail--${size}` : ""}`}
    />
  );
}
