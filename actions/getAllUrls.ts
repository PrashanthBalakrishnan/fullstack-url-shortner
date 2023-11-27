import Url from "@/app/models/Url";
import { connectDB } from "@/util/db";

export async function GetAllUrls() {
  try {
    await connectDB();
    const allUrls = await Url.find().limit(3).sort({ date: -1 });

    return allUrls;
  } catch (error) {
    console.log(error);
    return new Response("Server error", { status: 500 });
  }
}
