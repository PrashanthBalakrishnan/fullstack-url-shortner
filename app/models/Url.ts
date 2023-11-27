import { Schema, model, models } from "mongoose";

const UrlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

const Url = models.Url || model("Url", UrlSchema);

export default Url;
