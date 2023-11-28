import Url from "@/app/models/Url";
import { connectDB } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { code: string } },
) {
  try {
    await connectDB();
    let url = await Url.findOne({ urlCode: params.code });

    if (url) {
      return Response.redirect(url.longUrl);
    } else {
      return new NextResponse("No url found", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Server error", { status: 500 });
  }
}
