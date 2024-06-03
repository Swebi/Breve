import { useState } from "react";
import ParticleBackground from "./components/particleBackground";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <Hero />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
