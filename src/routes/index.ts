import { Router } from "express";
import medicine_route from "./apis/medicines.apis";

const routes = Router();

routes.use("/medicines", medicine_route);

export default routes;
