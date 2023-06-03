import { Router } from "express";
import { insert, show } from "../../handlers/medicines.handlers";

const medicine_route = Router();

medicine_route.route("/:name/:number").get(show);
medicine_route.route("/insert").post(insert);

export default medicine_route;
