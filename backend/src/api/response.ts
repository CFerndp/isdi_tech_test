export type Response<T> = {
  data: T;
  message: string;
};

export const getResponse = <T>(data: T, message: string): Response<T> => {
  return {
    data,
    message,
  };
};

export const GENERIC_MSGS = {
  Ok: "OK",
  NotFound: "Not found",
  Created: "Created",
  Updated: "Updated",
  Deleted: "Deleted",
  BadRequest: "Bad request",
};
