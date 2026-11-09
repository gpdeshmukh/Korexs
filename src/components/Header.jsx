export default function Header() {
  return (
    <header>
      <a className="brand" href="#top">
        <span className="mark" aria-hidden="true">K</span>
        Korexs
      </a>
      <nav aria-label="Main">
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
