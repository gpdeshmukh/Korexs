import { useState } from "react";
import { FORM_ENDPOINT, EMAIL } from "../config.js";
import { interests } from "../data/content.js";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("Sending…");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("Thanks, we’ve received your inquiry and will contact you soon.");
      } else {
        setStatus(`Could not send. Please email ${EMAIL} instead.`);
      }
    } catch {
      setStatus(`Could not send. Please email ${EMAIL} instead.`);
    }
  }

  return (
    <section id="contact">
      <h2>Start a project</h2>
      <p className="lead">
        Tell us about your business and what you need. We’ll reply by phone or email.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="interest">I’m interested in</label>
          <select id="interest" name="interest">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message">Tell us more</label>
          <textarea id="message" name="message" />
        </div>
        <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="btn" type="submit">Send inquiry</button>
        <p id="msg" role="status">{status}</p>
      </form>
    </section>
  );
}
