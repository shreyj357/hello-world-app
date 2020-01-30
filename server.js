const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.all("*", (req, res) => {
  res.status(200).sendFile( ".angular deploy/dist/index.html");
});

app.listen(process.env.port || 8000)