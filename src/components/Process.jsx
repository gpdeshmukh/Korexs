import { steps } from "../data/content.js";

export default function Process() {
  return (
    <section>
      <h2>How we work</h2>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="n">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
