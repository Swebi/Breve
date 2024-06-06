import React from "react";
import LinksBackground from "./linksBackground";

import TablePage from "./table/page";
const MyLinks = () => {
  return (
    <div className="w-[80vw] h-fit md:h-[40vw] dark p-10">
      <LinksBackground />
      <TablePage />
    </div>
  );
};

export default MyLinks;
