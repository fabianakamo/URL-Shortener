const express = require("express");

const ShortenerController = require("../controllers/ShortenerController");

const router = express.Router();
router.use(express.json());

router.post("/", ShortenerController.insertLink);
router.get("/:string", ShortenerController.getShortLink);

module.exports = router;
