import { envs } from "../index.config.js";

const { POSTGRES_URI_DEV, POSTGRES_URI_PROD } = envs;

const DATABASE = {
  URI: envs.NODE_ENV !== "development" ? POSTGRES_URI_PROD : POSTGRES_URI_DEV,
  OPTIONS:
    envs.NODE_ENV !== "development"
      ? {
          logging: false,
          native: false,
          dialect: "postgres",
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      : {
          logging: false,
          native: false,
          dialect: "postgres",
        },
};

export { DATABASE };
