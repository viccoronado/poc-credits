import { Router } from "express";
import CreditController from "./credit.controller";

const creditRoutes = Router();

creditRoutes.post("/create", CreditController.create);

export default creditRoutes;