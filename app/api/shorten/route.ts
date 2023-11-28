import validUrl from "valid-url";
import { NextResponse } from "next/server";
import ShortUniqueId from "short-unique-id";

import { connectDB } from "@/util/db";

import Url from "@/app/models/Url";
const uid = new ShortUniqueId({ length: 4 });

type urlType = {
  longUrl: string;
  urlCode: string;
  shortUrl: string;
  date: Date;
  _id: string;
};

export async function POST(req: Request) {
  const body = await req.json();
  const { longUrl } = body;
  const baseUrl = "http://localhost:3000/api/";
  if (!validUrl.isUri(baseUrl)) {
    return new NextResponse("Invalid base url", { status: 401 });
  }

  //  check long url
  if (validUrl.isUri(longUrl)) {
    try {
      await connectDB();
      const urlCode = uid.rnd();
      let url = await Url.findOne({ longUrl });
      console.log(url);
      if (url) {
        return new NextResponse(url, { status: 200 });
      } else {
        const shortUrl = baseUrl + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        console.log(url);
        await url.save();
        return new NextResponse(url, { status: 200 });
      }
    } catch (error) {
      console.log(error);
      return new NextResponse("Server error", { status: 500 });
    }
  } else {
    return new NextResponse("Invalid long url", { status: 401 });
  }
}
