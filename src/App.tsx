import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="backdrop-grid min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
