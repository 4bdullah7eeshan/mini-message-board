const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
  

indexRouter.get("/", (req, res) => {
    res.render("pages/index", { title: "Mini Message Board", messages: messages });
});

indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.messages, user: req.body.name, added: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;
