import { Request, Response } from "express";
import { medicine } from "../types/medicine.types";
import { Medicine } from "../models/medicines.models";

const medicine1 = new Medicine();

export const show = async (req: Request, res: Response) => {
  const var1 = req.params.name as string;
  const var2 = parseInt(req.params.number as string);

  if (typeof var1 == "string" && typeof var2 == "number") {
    try {
      const medicine: medicine = await medicine1.show(var1, var2);
      if (medicine) {
        res.status(200).json({
          status: "available",
          data: medicine,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(404).json({
        status: "failed",
        message: "This medicine is not available with us ",
      });
    }
  } else {
    res.status(500).json({
      status: "failedd",
      message: "invalid parameters",
    });
  }
};
