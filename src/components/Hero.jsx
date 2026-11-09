import BillCard from "./BillCard.jsx";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Software that fits the way your business works.</h1>
        <p>
          Korexs is a software company in India. We build web apps, mobile apps and ERPNext
          solutions for clients, and our own billing software for shops, salons and workshops.
        </p>
        <div className="actions">
          <a className="btn" href="#contact">Start a project</a>
          <a className="btn alt" href="#products">See our products</a>
        </div>
      </div>
      <BillCard />
    </div>
  );
}
