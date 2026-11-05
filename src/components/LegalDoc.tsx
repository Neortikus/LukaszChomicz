import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

/** Tiny renderer for the legal documents kept as Markdown in src/content/legal. */
function inline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|(?<![\w*])_([^_]+)_(?!\w)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[1] !== undefined) out.push(<strong key={k}>{m[1]}</strong>);
    else if (m[2] !== undefined)
      out.push(
        <a key={k} href={m[3]} target="_blank" rel="noopener noreferrer">
          {m[2]}
        </a>,
      );
    else out.push(<em key={k}>{m[4]}</em>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function LegalDoc({ file }: { file: string }) {
  const src = fs.readFileSync(path.join(process.cwd(), "src/content/legal", file), "utf8");
  const blocks = src.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="legal">
      {blocks.map((b, n) => {
        const key = `b${n}`;
        if (/^\*\s\*\s\*$/.test(b)) return <hr key={key} />;
        const heading = b.replace(/^#+\s*/, "");
        if (/^#+\s/.test(b) || /^\*\*[^*]+\*\*$/.test(b)) {
          const t = heading.replace(/^\*\*|\*\*$/g, "");
          return /^§|^\*\*§/.test(heading) || /^§/.test(t) ? <h2 key={key}>{t}</h2> : <h3 key={key}>{t}</h3>;
        }
        const lines = b.split("\n");
        if (lines.every((l) => /^[-*]\s/.test(l))) {
          return (
            <ul key={key}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.replace(/^[-*]\s/, ""), `${key}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={key}>
            {lines.map((l, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {inline(l, `${key}-${j}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
