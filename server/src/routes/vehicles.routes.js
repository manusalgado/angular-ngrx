import { Router } from "express";
import { findAllVehicles, createVehicle, updateVehicle, deleteVehicle } from "./../controllers/vehicles.controller";

const router = Router();

router.get("/", findAllVehicles);
router.post("/", createVehicle);
router.put("/:id", updateVehicle);
router.delete("/:id", deleteVehicle);

export default router;
