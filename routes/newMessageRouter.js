const { Router } = require("express");
const messageController = require("../controllers/messageController");

const newMessageRouter = Router();

newMessageRouter.get("/", messageController.getNewMessage);

module.exports = newMessageRouter;
