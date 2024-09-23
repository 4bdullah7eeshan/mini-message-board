const express = require('express');
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const openMessageRouter = require("./routes/openMessageRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", openMessageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mini Message Board app running on port ${PORT}!`));
