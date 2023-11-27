import { GetAllUrls } from "@/actions/getAllUrls";

interface IallUrls {
  _id: string;
  urlCode: string;
  longUrl: string;
  shortUrl: string;
  date: string;
  __v: number;
}

const Urls = async () => {
  const allUrls: IallUrls[] = await GetAllUrls();
  return (
    <div>
      {allUrls.map((url) => (
        <div key={url._id}></div>
      ))}
    </div>
  );
};
export default Urls;
