const express = require("express");
const app = express();
const port = 4000;
const {translateProducts} = require("./translate.js");

app.post("/api/translate-products", async (req, res) => {
  const language = req.body.language;
  const productData = req.body.productData;

  try {
    const translatedProducts = await translateProducts(language, productData);
    res.json(translatedProducts);
  } catch (error) {
    res.status(500).json({ error: "Error translating products" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
