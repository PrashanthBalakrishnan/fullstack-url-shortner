import ShortUniqueId from "short-unique-id";
import validUrl from "valid-url";

import { urlScheme } from "@/app/models/Url";

const uid = new ShortUniqueId({ length: 6 });

export async function POST(req: Request) {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL!;

  if (!validUrl.isUri(baseUrl)) {
    return {
      status: 401,
      body: "Invalid base url",
    };
  }

  const urlCode = uid.rnd();

  if(validUrl.isUri(longUrl)){
    try{
      let url = await urlScheme.
    }
  }
}
