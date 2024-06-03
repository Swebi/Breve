import { useState } from "react";
import ParticleBackground from "./components/particleBackground";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <ParticleBackground />
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
