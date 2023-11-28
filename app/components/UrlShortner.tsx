"use client";
import axios from "axios";
import { useState } from "react";
import validUrl from "valid-url";
import Url from "./Url";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState();
  const [displayUrl, setDisplayUrl] = useState(false);
  // create url code
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!longUrl.trim()) {
      return;
    }

    if (!validUrl.isUri(longUrl)) {
      return;
    }
    try {
      console.log(shortUrl);
      axios.post("/api/shorten", { longUrl });
    } catch (error) {
      console.error("Error during API request:", error);
    }
    setDisplayUrl(true);
  };
  console.log(shortUrl);
  return (
    <>
      <div className="mt-[13rem] rounded-xl bg-[var(--primary-2)] px-16 py-12">
        <form onSubmit={handleSubmit}>
          <input
            className="mr-5 w-[80%] rounded-xl p-5"
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            className="w- rounded-xl bg-cyan-400 px-10 py-5 text-white hover:bg-cyan-300"
            type="submit"
          >
            Shorten It!
          </button>
        </form>
        {displayUrl && <Url longUrl={longUrl} />}
      </div>
    </>
  );
};

export default UrlShortner;
