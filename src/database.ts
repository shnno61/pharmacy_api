import config from "./config";
import { Pool } from "pg";

let db: Pool;

// eslint-disable-next-line prefer-const
db = new Pool({
  host: config.db_host,
  port: parseInt(config.db_port as string),
  database: config.db_name,
  user: config.db_user,
  password: config.db_password,
});

export default db;
