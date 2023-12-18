import dotenv from "dotenv";
dotenv.config({path:"./.env.dev"})

interface EnvironmentVariables {
    DB_USER: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_PASSWORD: string;
    DB_PORT: string;
    DB_URL: string;
    SERVER_PORT: string | number;
    JWT_SECRET: string;
  }


  

const config: EnvironmentVariables = {
    DB_USER: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST ,
    DB_NAME: process.env.DB_USERNAME ,
    DB_PASSWORD: process.env.DB_PASSWORD ,
    DB_PORT: process.env.DB_PORT ,
    DB_URL: process.env.DB_URL ,
    SERVER_PORT: process.env.SERVER_PORT ,
    JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
