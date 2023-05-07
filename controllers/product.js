import { MAX_RECORDS } from "../Global/constants.js";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import { productRepository } from "../repositories/index.js";

async function getAllProducts(req, res) {
  //http:localhost:3000?page=1&size=100
  // if user intend to pass 9999 to "size"
  let { page = 1, size = MAX_RECORDS, searchString = "" } = req.query;
  size = size >= MAX_RECORDS ? MAX_RECORDS : size;
  try {
    let filteredProducts = await productRepository.getAllProducts({
      size,
      page,
      searchString,
    });
    res.status(HttpStatusCode.OK).json({
      message: "Get all product successfully",
      size: filteredProducts.length,
      page,
      searchString,
      data: filteredProducts,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.message,
    });
  }
}

async function insertProduct(req, res) {
  try {
    const product = await productRepository.insertProduct(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Insert product successfully",
      data: product,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: "Cannot insert product:" + exception,
      validationErrors: exception.validationErrors,
    });
  }
}

async function insertMultiple(req, res) {
  try {
    await productRepository.insertMultiple(req.body);
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Insert multiple products successfully",
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: "Cannot insert multiple products:" + exception,
      validationErrors: exception.validationErrors,
    });
  }
}

export default {
  getAllProducts,
  insertProduct,
  insertMultiple,
};
