const { Router } = require("express");
const messages = require("../data/messages");
const messageController = require("../controllers/messageController");


const openMessageRouter = Router();

openMessageRouter.get("/:id", messageController.getMessageById);

module.exports = openMessageRouter;
