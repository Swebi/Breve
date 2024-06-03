import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const ShortenedDialog = ({ urlResponse }) => {
  return (
    <div className="bg-transparent flex flex-col items-start justify-center gap-5 w-[50w] p-10 py-20">
      <div className="flex justify-between items-center gap-8 w-full">
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
          }}
        />
      </div>
      <div className="flex justify-between items-center gap-8 w-full">
        <h1 className="text-white text-lg select-none">Shortened</h1>
        <a
          href={`http://localhost:5001/s/${
            urlResponse ? urlResponse.shortUrl : "#"
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-white bg-[#181F29] p-4 w-96 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
            http://localhost:5001/s/
            {urlResponse ? urlResponse.shortUrl : "No URL"}
          </h1>
        </a>
        <MdOutlineContentCopy
          className="text-white text-lg cursor-pointer"
          onClick={() => {
            const clipShortUrl = `http://localhost:5001/s/${
              urlResponse ? urlResponse.shortUrl : "#"
            }`;
            navigator.clipboard.writeText(clipShortUrl);
          }}
        />
      </div>
    </div>
  );
};

export default ShortenedDialog;
