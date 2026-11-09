import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services">
      <h2>What we build for clients</h2>
      <p className="lead">Tell us the problem. We’ll scope it, build it and keep it running.</p>
      <div className="services">
        {services.map((s) => (
          <div className="service" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
