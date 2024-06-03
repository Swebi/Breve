import express from "express";
import {
  createUrl,
  getUrl,
  deleteUrl,
} from "../controllers/shortUrl.controller.js";
const router = express.Router();

router.post("/", createUrl);
router.get("/:id", getUrl);
router.delete("/:id", deleteUrl);

export default router;
