import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid().substring(1, 6)
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamp: true }
);

export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);
