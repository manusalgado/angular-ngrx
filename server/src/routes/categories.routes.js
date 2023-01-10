import { Router } from "express";
import { findAllCities, findAllCountries, findAllPowers } from "../controllers/categories.controller";

const router = Router();

router.get("/cities", findAllCities);
router.get("/countries", findAllCountries);
router.get("/powers", findAllPowers);

export default router;
