import express from "express";
const router = express.Router();
import { productController } from "../controllers/index.js";

router.get("/", productController.getAllProducts);

router.post("/insertProduct", productController.insertProduct);

router.post("/insertMultipleProducts", productController.insertMultiple);

export default router;
