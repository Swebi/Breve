import express from "express";
import {
  createUrl,
  getUrl,
  deleteUrl,
} from "../controllers/shortUrl.controller.js";
const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
