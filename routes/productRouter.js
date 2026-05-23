const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productController");


// ROUTES

router.post("/products", createProduct);

router.get("/", getProducts);

router.get("/products/:id", getSingleProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);


module.exports = router;