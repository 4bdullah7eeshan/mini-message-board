const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("partials/form");
});

module.exports = newMessageRouter;
