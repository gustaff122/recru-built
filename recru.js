let express = require("express");
let app = express();
const path = require("path");

app.use(express.static("fake-products-management"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/fake-products-management/index.html");
});

app.listen(2240, () => {
  console.log("Recru - PORT 1240");
});
