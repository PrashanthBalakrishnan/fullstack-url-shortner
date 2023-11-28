import { connectDB } from "@/util/db";
import Url from "@/app/models/Url";

const getByLongUrl = async (longUrl: string) => {
  try {
    await connectDB();
    let url = await Url.findOne({ longUrl });
    console.log(url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getByLongUrl;
