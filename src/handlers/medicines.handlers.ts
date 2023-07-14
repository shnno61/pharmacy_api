import { Request, Response } from "express";
import { medicine } from "../types/medicine.types";
import { Medicine } from "../models/medicines.models";
import config from "../config";
const lat = config.lat;
const long = config.long;
const f_name = config.name;

const medicine1 = new Medicine();

export const show = async (req: Request, res: Response) => {
  const var1 = req.params.name as string;
  const var2 = parseInt(req.params.number as string);

  if (typeof var1 == "string" && typeof var2 == "number") {
    try {
      // eslint-disable-next-line prettier/prettier
      const medicine: medicine = await medicine1.show(
        var1,
        var2
      );
      if (medicine) {
        res.status(200).json({
          status: "available",
          data: medicine,
          latitude: lat,
          longitude: long,
          name: f_name,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(404).json({
        status: "failed",
        message:
          "This medicine is not available with us or you inputed an invalid values ",
      });
    }
  } else {
    res.status(500).json({
      status: "failed",
      message: "invalid parameters",
    });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////
// eslint-disable-next-line prettier/prettier
export const insert = async (
  req: Request,
  res: Response
) => {
  const data: medicine = {
    name: req.body.name as string,
    description: req.body.description as string,
    manufacturer: req.body.manufacturer as string,
    unit_price: parseInt(req.body.unit_price as string),
  };
  // eslint-disable-next-line prettier/prettier
  const available_number = parseInt(
    req.body.available_number as string
  );
  if (
    typeof data.name == "string" &&
    typeof data.description == "string" &&
    typeof data.manufacturer == "string" &&
    typeof data.unit_price == "number" &&
    typeof available_number == "number"
  ) {
    try {
      const result = await medicine1.insert(
        data.name,
        data.description,
        data.manufacturer,
        data.unit_price,
        available_number
      );
      if (result) {
        res.status(200).json({
          status: "done",
          data: result,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(500).json({
        status: "faild",
        message: "failed to insert this medicine",
      });
    }
  } else {
    res.status(404).json({
      status: "faild",
      message: "invalid parameters",
    });
  }
};
