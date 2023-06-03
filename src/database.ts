import config from "./config";
import { Pool } from "pg";

let db: Pool;

db = new Pool({
  host: config.db_host,
  port: config.db_port as unknown as number,
  database: config.db_name,
  user: config.db_user,
  password: config.db_password,
});

export default db;
