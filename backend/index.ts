import "module-alias/register";

import mongoose from "mongoose";

import { getDBConnectionURL } from "@/utils";

import configs from "@/config";
import { app } from "@/app";

const start = async () => {
  try {
    await mongoose.connect(
      getDBConnectionURL({
        user: configs.MDB_USER,
        pass: configs.MDB_PASS,
        host: configs.MDB_HOST,
        port: configs.MDB_PORT,
        name: configs.MDB_NAME,
      }),
    );

    app.listen(configs.PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${configs.PORT}`,
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
