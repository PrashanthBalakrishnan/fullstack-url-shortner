"use client";
import axios from "axios";
import { useState } from "react";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/api/shorten", { longUrl });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="submit">Shorten It!</button>
      </form>
    </div>
  );
};
export default UrlShortner;