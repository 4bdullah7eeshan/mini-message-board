const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("pages/new", { title: "New Message" });
});

module.exports = newMessageRouter;
