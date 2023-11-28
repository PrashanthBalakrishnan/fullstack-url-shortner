"use client";

import getByLongUrl from "../action/getByLongUrl";

import React from "react";

type GetByLongUrlProps = {
  longUrl: string;
};

const Url = ({ longUrl }: GetByLongUrlProps) => {
  const UrlInfo = getByLongUrl(
    "https://tecadmin.net/mongodb-get-the-last-record-from-collection/",
  );
  return (
    <div className="bg-white">
      <p className="text-black">There should be long URL here: {longUrl}</p>
      <p className="text-black">There should be long URl here{longUrl}</p>
    </div>
  );
};
export default Url;
