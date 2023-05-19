import { medicine } from "../types/medicine.types";
import db from "../database";

export class Medicine {

    async show(medecine_name:string): Promise<medicine> 
    { try {
        const conn =await db.connect();
        const sql = `SELECT name,description,manufacturer,nuit_price,available_number FROM medicines WHER name=$1`;
        const result =await conn.query(sql,[medecine_name]);
        conn.release();
        return result.rows[0];
    } catch (error) {
        throw new Error;
    }
    }
 
}
   