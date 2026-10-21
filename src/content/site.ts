/** Contact data and links shared by both language versions. Edit here, not in components. */
export const site = {
  url: "https://lukaszchomicz.pl",
  name: "Łukasz Chomicz",
  phone: "+48 781 236 157",
  phoneHref: "tel:+48781236157",
  email: "biuro@lukaszchomicz.pl",
  calendly: "https://calendly.com/lchomicz/30min",
  company: "Linkaris Sp. z o.o.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lukaszchomicz/" },
    { label: "YouTube", href: "https://www.youtube.com/@Neortikus" },
  ],
} as const;

export function mailto(subject?: string) {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}
