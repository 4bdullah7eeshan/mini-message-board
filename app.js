const express = require('express');
const path = require("node:path");

const app = express();

//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Mini Message Board!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mini Message Board app running on port ${PORT}!`));
