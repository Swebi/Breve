import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { serverUrl } from "@/helpers/Constants";
import { useToast } from "@/components/ui/use-toast";

const ShortenedDialog = ({ urlResponse }) => {
  const { toast } = useToast();

  const callToast = () => {
    toast({
      description: "Copied to Clipboard!",
      className: "bg-[#111629] text-white border-1 border-black shadow-xl",
    });
  };
  return (
    <div className="bg-transparent flex flex-col items-start justify-center gap-5  p-0 md:p-20 py-20 itmd:py-28">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-8 w-full">
        <h1 className="text-white text-lg mr-4 select-none">Original</h1>
        <a
          href={urlResponse ? urlResponse.fullUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-white bg-[#181F29] p-4 w-96 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
            {urlResponse ? urlResponse.fullUrl : "No URL"}
          </h1>
        </a>
        <MdOutlineContentCopy
          className="text-white text-lg cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(urlResponse.fullUrl);
            callToast();
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-8 w-full">
        <h1 className="text-white text-lg select-none">Shortened</h1>
        <a
          href={`${serverUrl}/${urlResponse ? urlResponse.shortUrl : "#"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-white bg-[#181F29] p-4 w-96 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
            {serverUrl}/{urlResponse ? urlResponse.shortUrl : "#"}
          </h1>
        </a>
        <MdOutlineContentCopy
          className="text-white text-lg cursor-pointer"
          onClick={() => {
            const clipShortUrl = `${serverUrl}/${
              urlResponse ? urlResponse.shortUrl : "#"
            }`;
            navigator.clipboard.writeText(clipShortUrl);
            callToast();
          }}
        />
      </div>
    </div>
  );
};

export default ShortenedDialog;
