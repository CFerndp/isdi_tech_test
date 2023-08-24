import { getDBConnectionURLArgs } from "@/types";

export const getDBConnectionURL = ({
  user,
  pass,
  host,
  port,
  name,
}: getDBConnectionURLArgs) => {
  return `mongodb://${user}:${pass}@${host}:${port}/${name}?authSource=admin`;
};
