import React from "react";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-10">
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#2BB3FF] to-[#269DB7]">
        Breve
      </h1>
      <div className="flex gap-4">
        <Button className="bg-[#18181B] hover:bg-[#18181bbc] px-6 py-4 text-sm">
          Github
          <IoLogoGithub className="ml-2 text-lg" />
        </Button>
        <Button className="bg-[#144EE3] hover:bg-[#144fe3c9] px-6 py-4 text-sm drop-shadow-lg	">
          Analytics
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
