import dotenv from "dotenv";
dotenv.config();
const {
  PORT,
  END_POINT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

export default {
  port: PORT,
  end_point: END_POINT,
  db_host: DB_HOST,
  db_port: DB_PORT,
  db_user: DB_USER,
  db_password: DB_PASSWORD,
  db_name: DB_NAME,
};
