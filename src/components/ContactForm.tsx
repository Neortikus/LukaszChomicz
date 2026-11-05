"use client";

import { useState } from "react";
import type { Content } from "@/content/types";
import { site } from "@/content/site";

/**
 * Sends the form through Web3Forms (https://web3forms.com) to the address the
 * access key was created for. The key is public by design; set it in Vercel as
 * NEXT_PUBLIC_WEB3FORMS_KEY. Without it the form falls back to a mailto link.
 */
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ f }: { f: Content["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!KEY) {
      const body = `${data.message}\n\n${data.name}\n${data.email}\n${data.phone ?? ""}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${f.subjectPrefix}: ${data.topic}`)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: KEY,
          subject: `${f.subjectPrefix}: ${data.topic}`,
          from_name: "lukaszchomicz.pl",
          replyto: data.email,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>{f.sentTitle}</h3>
        <p>{f.sentBody}</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <input type="checkbox" name="botcheck" className="cform__trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="cform__row">
        <label>
          <span>{f.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{f.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="cform__row">
        <label>
          <span>{f.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{f.topic}</span>
          <select name="topic" defaultValue={f.topics[0]}>
            {f.topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>{f.message}</span>
        <textarea name="message" rows={6} required placeholder={f.messageHint} />
      </label>
      <label className="cform__consent">
        <input type="checkbox" name="consent" value="tak" required />
        <span>{f.consent}</span>
      </label>
      <div className="cta-row">
        <button type="submit" className="btn btn--accent" disabled={status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
      {status === "error" && (
        <p className="cform__error" role="alert">
          {f.error} <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}
    </form>
  );
}
