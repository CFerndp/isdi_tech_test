import mongoose from "mongoose";
import { getDBConnectionURL } from "@/utils";
import configs from "@/config";

export const getMongooseConnectionForTesting = async () => {
  await mongoose.connect(
    getDBConnectionURL({
      user: configs.MDB_USER,
      pass: configs.MDB_PASS,
      host: configs.MDB_HOST,
      port: configs.MDB_PORT,
      name: configs.MDB_NAME,
    }),
  );
};

export const closeMongooseConnectionForTesting = async () => {
  await mongoose.connection.close();
};
