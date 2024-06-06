import { useEffect, useState } from "react";
import ParticleBackground from "./components/particleBackground";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster";
import { LinksContext } from "./contexts/linksContext";

function App() {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );

  useEffect(() => {
    const existingLinks = JSON.parse(localStorage.getItem("links"));
    if (existingLinks?.length > 0) {
      setLinks(existingLinks);
    } else {
      setLinks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));

    console.log(links);
  }, [links]);

  return (
    <div>
      <ParticleBackground />
      <LinksContext.Provider value={{ links, setLinks }}>
        <div className="w-screen h-screen flex flex-col">
          <Navbar />
          <div className="w-full h-full flex justify-center items-center">
            <Hero />
          </div>
        </div>
      </LinksContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
