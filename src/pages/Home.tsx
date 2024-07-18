import { useRef } from "react";
import FindUs from "../components/FindUs";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Hero />
      <Intro ref={containerRef} />
      <Services />
      <FindUs />
    </div>
  );
}

export default Home;
