const express = require("express");
const app = express();
const port = "80";
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/list_names", (req, res) => {
  fs.readFile(__dirname + "/" + "names.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
