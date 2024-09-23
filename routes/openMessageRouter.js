const { Router } = require("express");
const messages = require("../data/messages");

const openMessageRouter = Router();

openMessageRouter.get("/:id", (req, res) => {
    console.log("Request URL:", req.originalUrl); // Log the full request URL

    const messageId = parseInt(req.params.id, 10); 
    console.log("Requested Message ID:", messageId); // Add this line

    const message = messages.find(msg => msg.id === messageId);

    res.render("pages/message", { title: message.text, message: message });

});

module.exports = openMessageRouter;
