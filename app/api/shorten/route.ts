import ShortUniqueId from "short-unique-id";
import validUrl from "valid-url";
import { NextResponse } from "next/server";

import { connectDB } from "@/util/db";

import Url from "@/app/models/Url";

const uid = new ShortUniqueId({ length: 6 });

export async function POST(req: Request) {
  const body = await req.json();
  const { longUrl } = body;
  const baseUrl = "http://localhost:3000/api/";
  if (!validUrl.isUri(baseUrl)) {
    return new NextResponse("Invalid base url", { status: 401 });
  }

  // create url code
  const urlCode = uid.rnd();
  //  check long url
  if (validUrl.isUri(longUrl)) {
    try {
      await connectDB();
      let url = await Url.findOne({ longUrl });
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
