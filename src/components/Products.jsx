import { products } from "../data/content.js";

export default function Products() {
  return (
    <section id="products">
      <h2>Our own products</h2>
      <p className="lead">
        Built the way we build for clients: fast, keyboard-first and simple enough for a shop
        owner to learn in minutes.
      </p>
      <div className="products">
        {products.map((p) => (
          <div className="product" key={p.title}>
            <span className={p.live ? "status" : "status soon"}>{p.status}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
