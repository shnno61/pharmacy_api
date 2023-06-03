import { Request, Response } from "express";
import { medicine } from "../types/medicine.types";
import { Medicine } from "../models/medicines.models";

const medicine1 = new Medicine();

export const show = async (req: Request, res: Response) => {
  try {
    const medicine: medicine = await medicine1.show(
      req.params.name as string,
      req.params.number as unknown as number
    );
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
};
