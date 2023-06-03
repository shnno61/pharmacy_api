import { Router } from "express";
import { show } from "../../handlers/medicines.handlers";

const medicine_route = Router();

medicine_route.route("/:name").get(show);

export default medicine_route;
