import express from "express";
import {
  createUrl,
  getUrl,
  deleteUrl,
  getUrlDetails,
} from "../controllers/shortUrl.controller.js";
const router = express.Router();

router.post("/", createUrl);
router.get("/:id", getUrl);
router.get("/info/:id", getUrlDetails);
router.delete("/:id", deleteUrl);

export default router;
