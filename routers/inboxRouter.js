// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
