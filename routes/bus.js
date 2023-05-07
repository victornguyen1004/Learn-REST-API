import express from "express";
const router = express.Router();
import { busController } from "../controllers/index.js";

router.get("/", busController.getAllBusses);
router.post("/insertBus", busController.insertBus);
router.post("/insertMultipleBusses", busController.insertMultipleBusses);
router.get("/getBusById", busController.getBusById);
router.post("/deleteBus", busController.deleteBus);
router.post("/deleteAllBusses", busController.deleteAllBusses);
router.post("/updateBus", busController.updateBus);

export default router;
