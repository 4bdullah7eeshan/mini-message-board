const { Router } = require("express");
const messageController = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", messageController.getAllMessages);

indexRouter.post("/new", messageController.createNewMessage);

module.exports = indexRouter;