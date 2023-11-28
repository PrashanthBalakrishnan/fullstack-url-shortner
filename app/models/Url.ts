import { Schema, model, models } from "mongoose";

const UrlSchema = new Schema({
  urlCode: String, // Code representing the shortened URL
  longUrl: String, // Original (long) URL
  shortUrl: String, // Shortened URL
  date: {
    // Date of creation with a default value of the current date and time
    type: String,
    default: Date.now,
  },
});

// Creating a Mongoose model named 'Url' or using the existing model if it already exists
const Url = models.Url || model("Url", UrlSchema);

// Exporting the 'Url' model for use in other parts of the application
export default Url;
