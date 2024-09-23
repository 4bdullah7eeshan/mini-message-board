const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Mini Message Board!");
});

module.exports = indexRouter;
