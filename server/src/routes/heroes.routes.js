import { Router } from "express";
import {
    findAllHeroes,
    findHeroe,
    createHeroe,
    updateHeroe,
    deleteHeroe,
    findAllVehiclesByHeroe,
    findAllPowersByHeroe
} from "./../controllers/heroes.controller";

const router = Router();

router.get("/", findAllHeroes);
router.get("/:id", findHeroe);
router.post("/", createHeroe);
router.put("/:id", updateHeroe);
router.delete("/:id", deleteHeroe);
router.get("/:id/vehicles", findAllVehiclesByHeroe);
router.get("/:id/powers", findAllPowersByHeroe);

export default router;
