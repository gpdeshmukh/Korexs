import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
