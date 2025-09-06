const express = require("express");
const router = express.Router();
const controller = require("../controllers/urlController");

router.post("/shorturls", controller.createShortUrl);
router.get("/shorturls", controller.getAllShortUrls);      // <- Needed for stats page
router.get("/shorturls/:shortcode", controller.getShortUrlStats);
router.get("/:shortcode", controller.redirectShortUrl);

module.exports = router;
