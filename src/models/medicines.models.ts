import { medicine } from "../types/medicine.types";
import db from "../database";

export class Medicine {
  async show(
    medecine_name: string,
    number_of_units: number
  ): Promise<medicine> {
    try {
      const conn = await db.connect();
      const sql = `SELECT name,description,manufacturer,unit_price FROM medicines WHERE name LIKE '%'|| $1 ||'%' AND $2<=available_number`;
      const result = await conn.query(sql, [medecine_name, number_of_units]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error();
    }
  }
}
