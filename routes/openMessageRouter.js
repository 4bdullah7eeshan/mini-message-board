const { Router } = require("express");
const messageController = require("../controllers/messageController");

const openMessageRouter = Router();

openMessageRouter.get("/:id", messageController.getMessageById);

module.exports = openMessageRouter;