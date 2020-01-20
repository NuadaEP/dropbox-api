const express = require("express");
const multer = require("multer");

const multerConfig = require("./config/multer");

const controllers = require("./controllers");

const routes = express.Router();

routes.post("/boxes", controllers.BoxController.store);

routes.get("/boxes/:id", controllers.BoxController.show);

routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  controllers.FileController.store
);

routes.get("/", (req, res) => {
  return res.send("Hello User");
});

module.exports = routes;
