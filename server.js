const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.all("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist");
});

app.listen(process.env.port || 8000)