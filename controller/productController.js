const Product = require("../model/Product");


// CREATE PRODUCT

const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// GET ALL PRODUCTS

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// GET SINGLE PRODUCT

const getSingleProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// UPDATE PRODUCT

const updateProduct = async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedProduct);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


// DELETE PRODUCT

const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Product Deleted"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};