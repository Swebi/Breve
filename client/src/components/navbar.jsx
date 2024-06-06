import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MyLinks from "./myLinks";
const Navbar = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <div className="flex w-full justify-between p-8">
      <h1 className="font-extrabold text-transparent  text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#2BB3FF] to-[#269DB7] select-none">
        Breve
      </h1>
      <div className="flex gap-4">
        <a href="https://github.com/Swebi/breve">
          <Button className="bg-[#18181B] hover:bg-[#18181bbc]  px-3 md:px-6 py-1 md:py-4 text-xs md:text-sm select-none">
            GitHub
            <IoLogoGithub className="ml-1 text-sm md:text-md" />
          </Button>
        </a>
        <Button
          className="bg-[#144EE3] hover:bg-[#144fe3c9] px-3 md:px-6 py-1 md:py-4 text-xs md:text-sm drop-shadow-lg select-none	"
          onClick={() => setDialog(true)}
        >
          My Links
        </Button>
        <Dialog open={dialog} onOpenChange={setDialog}>
          <DialogContent className="bg-[#0B0F1B] border-none w-fit">
            <MyLinks />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default Navbar;
