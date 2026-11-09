import { billLines } from "../data/content.js";

export default function BillCard() {
  return (
    <div className="bill" aria-label="Example of a Korexs bill">
      <h3>Bill INV-0042</h3>
      <small>Example from Korexs Invoice</small>
      {billLines.map((line) => (
        <div className="row" key={line.item}>
          <span>{line.item}</span>
          <span className="num">{line.amount}</span>
        </div>
      ))}
      <div className="total">
        <strong>Total</strong>
        <span className="num">₹2,124.00</span>
      </div>
      <p className="keys">
        <kbd>Enter</kbd> add item &nbsp; <kbd>Ctrl</kbd>+<kbd>Enter</kbd> save and print
      </p>
    </div>
  );
}
