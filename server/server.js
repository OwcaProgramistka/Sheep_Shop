const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const products = require("./data/products.json");

app.use(cors());
app.use(express.static("images"));

app.get("/api/products", (req, res) => {
  return res.json(products);
});

app.listen(port, () => console.log(`Server start on port ${port}!`));
