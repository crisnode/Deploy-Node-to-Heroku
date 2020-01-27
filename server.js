const express = require("express");
const app = express();

app.use(express.static("public"));

var server = app.listen(5000, function() {
  console.log("Puerto abierto en http://localhost:5000");
});
