import { Request,Response } from "express";
import { medicine } from "../types/medicine.types";
import { Medicine } from "../models/medicines.models";

const medicine1= new Medicine();

export const show = async (req:Request , res:Response)=>{
    try {
        const medicine:medicine = await medicine1.show(req.params.name);
        if(medicine)
         {res.status(200).json
          {
            data:medicine;
          };
         }
    } catch (error) {
       res.status(404).json
       {
         message:'This medicine is not available with us '
       } ;
    }
    
}