const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getAllMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("pages/index", { title: "Mini Message Board", messages: messages });
});

const createNewMessage = asyncHandler(async (req, res) => {
    const { message } = req.body;
    await db.insertUsername(message);
    res.redirect("/");
});

const getNewMessage = asyncHandler(async (req, res) => {
    res.render("pages/new", { title: "New Message" });
});

const getMessageById = asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10); 
    const message = await db.getMessageById(messageId);
    res.render("pages/message", { title: message.user, message: message });
});

module.exports = {
    getAllMessages,
    createNewMessage,
    getNewMessage,
    getMessageById,
}

