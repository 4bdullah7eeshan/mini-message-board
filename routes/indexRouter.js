const { Router } = require("express");
const messages = require("../data/messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("pages/index", { title: "Mini Message Board", messages: messages });
});

indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date(), id: messages.length + 1 });
    res.redirect("/");
});

module.exports = indexRouter;
