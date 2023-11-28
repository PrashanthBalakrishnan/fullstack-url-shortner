"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UrlData from "./UrlData";
import { set } from "mongoose";

export type urlType = {
  _id: string;
  urlCode: string;
  longUrl: string;
  shortUrl: string;
  date: string;
  __v: number;
};
const UrlShortner = () => {
  const router = useRouter();

  const [longUrl, setLongUrl] = useState("");
  const [displayUrl, setDisplayUrl] = useState(false);
  const [data, setData] = useState<urlType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!longUrl.trim()) {
      return;
    }
    try {
      const urlInfo = await axios.post("/api/shorten", { longUrl });
      setData((prev) => [...prev, urlInfo.data]);
    } catch (error) {
      console.error("Error during API request:", error);
    }
    router.refresh();
    setDisplayUrl(true);
    setLongUrl("");
  };
  console.log(data);
  return (
    <section className="bg-red mx-auto max-w-screen-xl p-5">
      <div className="-mt-16  rounded-xl bg-[var(--primary-2)] px-16 py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          <input
            className="w-full rounded-xl p-5 md:w-[80%] "
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            className="w-full rounded-xl bg-cyan-400 px-10 py-5 text-sm text-white hover:bg-cyan-300 md:w-fit "
            type="submit"
          >
            Shorten It!
          </button>
        </form>
      </div>
      {displayUrl && <UrlData data={data} />}
    </section>
  );
};

export default UrlShortner;
