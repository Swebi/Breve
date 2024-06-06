import express from "express";
import { urlModel } from "../model/shortUrl.schema.js";

export const createUrl = async (req, res) => {
  try {
    const shortUrl = await urlModel.create({ fullUrl: req.body.fullUrl });
    res.status(201).send(shortUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export const getUrl = async (req, res) => {
  try {
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (shortUrl) {
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(shortUrl.fullUrl);
    } else {
      res.status(404).send("URL doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export const getUrlDetails = async (req, res) => {
  try {
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (shortUrl) {
      res.status(201).send(shortUrl);
    } else {
      res.status(404).send("URL doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (shortUrl) {
      await urlModel.findByIdAndDelete({ _id: shortUrl.id });
      res.status(200).send("Deleted");
    } else {
      res.status(404).send("URL doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};
