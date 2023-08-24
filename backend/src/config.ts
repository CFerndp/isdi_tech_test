import dotenv from "dotenv";
//For env File
dotenv.config();

const PORT = process.env.PORT || 8000;
const MDB_USER = process.env.MDB_USER || "root";
const MDB_PASS = process.env.MDB_PASS || "example";
const MDB_HOST = process.env.MDB_HOST || "localhost";
const MDB_PORT = process.env.MDB_PORT || "27017";
const MDB_NAME = process.env.MDB_NAME || "tasks_db";

export default {
  PORT,
  MDB_USER,
  MDB_PASS,
  MDB_HOST,
  MDB_PORT,
  MDB_NAME,
};
