"use client";
import { useEffect, useState } from "react";
import { urlType } from "./UrlShortner";

type UrlDataProps = {
  data: urlType[];
};

const UrlData = ({ data }: UrlDataProps) => {
  const [copied, setCopied] = useState(false);
  function handleCopy(shortUrl: string) {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <div>
      {data.map((url, i) => (
        <div
          className="mt-3 flex flex-col justify-between gap-y-3 rounded-lg bg-white p-5 font-semibold md:flex-row md:items-center"
          key={i}
        >
          <span className="text-black">{url.longUrl}</span>
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <span className="text-cyan-500">{url.shortUrl}</span>
            <button
              onClick={() => handleCopy(url.shortUrl)}
              className="btn rounded-lg px-6 py-2"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UrlData;
