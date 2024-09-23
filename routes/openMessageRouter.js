const { Router } = require("express");
const messages = require("../data/messages");

const openMessageRouter = Router();

openMessageRouter.get("/:id", (req, res) => {
    const messageId = parseInt(req.params.id, 10); 
    const message = messages.find(msg => msg.id === messageId);

    res.render("pages/message", { title: message.text, message: message });
});

module.exports = openMessageRouter;
