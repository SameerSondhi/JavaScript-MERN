const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/test", ProductController.testApi);
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}
