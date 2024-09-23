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
    res.send('POST request to homepage');
});

module.exports = indexRouter;
