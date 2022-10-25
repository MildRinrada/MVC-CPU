const express = require("express");
const router = express.Router();

const connection = require("../database.connect/connector");

const { Endpoint } = require("../controller/endpoint.js");

//create Meme
router.post("/createCpu", new Endpoint().createCpuEndpoint);

//delete Meme
router.delete("/deleteCpu", new Endpoint().deleteCpuEndpoint);

//get Meme
router.get("/getCpu", new Endpoint().getCpuEndpoint);

//get Meme by id
router.get("/getUserCpu", new Endpoint().getUserCpuEndpoint);

//update Meme
router.put("/updateCpu", new Endpoint().updateMemeEndpoint);
// router.put("/updateMeme/:id", new Endpoint().updateMemeEndpoint);

//router.get("/viralCpu", new Endpoint().ViralMemeEndpoint);

router.get("/", function (req, res) {
  res.render("index", { title: "" });
});

router.get("/allcpu", new Endpoint().getAllCpuEndpoint);

module.exports = router;
