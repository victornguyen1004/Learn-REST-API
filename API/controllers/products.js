const asyncHandler = require('express-async-handler')
const Product = require('../models/product.js')

//@desc Get all products
//@route Get /products

const getProducts = asyncHandler(async (req,res) =>{
    const products = await Product.find()
    res.status(200).json(products)
})
//@desc POST all products
const createProduct = asyncHandler(async (req,res) =>{
    console.log('this is body',req.body)
    const {GearId,Name,Price,Quantity,Rating,Brand,Image} = req.body
    if(!GearId || !Name || !Price || !Quantity || !Rating || !Brand || !Image) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const product = await Product.create({
        GearId,
        Name,
        Price,
        Quantity,
        Rating,
        Brand,
        Image
    })
    res.status(201).json(product)
})
//@desc GET product
const getProduct = asyncHandler(async (req,res) =>{
    const product = await Product.findById(req.params.GearId)
    if (!product){
        res.status(404)
        throw new Error("Product not found")
    }
    res.status(200).json(product)
})
//@desc PUT products
const updateProduct = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.GearId)
    if(!product){
        res.status(404)
        throw new Error("Product not found")
    }
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.GearId,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedProduct)
})
//@desc DELETE products
const deleteProduct = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.GearId)
    if(!product){
        res.status(404)
        throw new Error("Product not found")
    }
    await Product.remove()
    res.status(200).json(product)
})

module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}