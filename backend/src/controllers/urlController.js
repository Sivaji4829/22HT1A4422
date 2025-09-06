const urls = require("../models/urlModel");
const log = require("../middlewares/logger");
const { nanoid } = require("nanoid");

// POST /shorturls
exports.createShortUrl = async (req, res) => {
  try {
    const { url, validity, shortcode } = req.body;

    if (!url || !/^https?:\/\/\S+$/.test(url)) {
      await log("backend", "error", "controller", "Invalid URL format");
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const expireMinutes = validity ? parseInt(validity) : 30;
    let code = shortcode ? shortcode : nanoid(6);

    if (urls.find(u => u.shortcode === code)) {
      await log("backend", "error", "controller", "Shortcode collision");
      return res.status(409).json({ error: "Shortcode already exists" });
    }

    const expiry = new Date(Date.now() + expireMinutes * 60000);
    const newEntry = {
      url,
      shortcode: code,
      createdAt: new Date(),
      expiry,
      clicks: []
    };
    urls.push(newEntry);

    await log("backend", "info", "controller", `Short URL created: ${code}`);

    return res.status(201).json({
      shortLink: `http://localhost:5000/${code}`,
      expiry: expiry.toISOString()
    });
  } catch (err) {
    await log("backend", "fatal", "controller", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /shorturls (all URLs)
exports.getAllShortUrls = async (req, res) => {
  try {
    const allUrls = urls.map(u => ({
      shortLink: `http://localhost:5000/${u.shortcode}`,
      url: u.url,
      totalClicks: u.clicks.length,
      clicks: u.clicks,
      expiry: u.expiry
    }));
    return res.json(allUrls);
  } catch (err) {
    await log("backend", "fatal", "controller", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /shorturls/:shortcode
exports.getShortUrlStats = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const entry = urls.find(u => u.shortcode === shortcode);

    if (!entry) {
      await log("backend", "warn", "controller", "Shortcode not found");
      return res.status(404).json({ error: "Shortcode not found" });
    }

    return res.json({
      url: entry.url,
      shortcode: entry.shortcode,
      createdAt: entry.createdAt,
      expiry: entry.expiry,
      totalClicks: entry.clicks.length,
      clicks: entry.clicks
    });
  } catch (err) {
    await log("backend", "fatal", "controller", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /:shortcode (redirect)
exports.redirectShortUrl = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const entry = urls.find(u => u.shortcode === shortcode);

    if (!entry) {
      await log("backend", "warn", "controller", "Shortcode not found for redirect");
      return res.status(404).json({ error: "Shortcode not found" });
    }

    if (new Date() > new Date(entry.expiry)) {
      await log("backend", "warn", "controller", "Shortcode expired");
      return res.status(410).json({ error: "Shortcode expired" });
    }

    entry.clicks.push({
      timestamp: new Date(),
      referrer: req.get("Referrer") || "Direct",
      geo: req.ip
    });

    await log("backend", "info", "controller", `Redirecting to ${entry.url}`);

    return res.redirect(entry.url);
  } catch (err) {
    await log("backend", "fatal", "controller", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};
