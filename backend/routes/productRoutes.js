import express from 'express';
import asyncHandler from 'express-async-handler';
//We are importing express so that we can create routes in the BACKEND
const router = express.Router();
import Product from '../models/productModel.js';

//GET request for all products
//since we're in the backend we can put async/await in the parameter

// @desc Fetch all products
// @route GET /api/products all products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    //this current doesn't have error handling, we'll use an express package that we cover it for all routes
    res.json(products);
  })
);

//GET request for single product

// @desc Fetch single product
// @route GET /api/products all products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
