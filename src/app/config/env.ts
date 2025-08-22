import dotEnv from "dotenv";
dotEnv.config();

interface envType {
    PORT: string,
    DEV_ENVIRONMENT: string,
    MONGO_URI: string,
    ACCESS_SECRET: string,
    ADMIN_EMAIL: string,
    ADMIN_PASS: string
};


const loadEnvironmentVariables = (): envType => {

    const requiredEnvironment: string[] = ["PORT", "DEV_ENVIRONMENT", "MONGO_URI", "ACCESS_SECRET", "ADMIN_EMAIL", "ADMIN_PASS"];

    requiredEnvironment.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable!`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        DEV_ENVIRONMENT: process.env.DEV_ENVIRONMENT as string,
        MONGO_URI: process.env.MONGO_URI as string,
        ACCESS_SECRET: process.env.ACCESS_SECRET as string,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
        ADMIN_PASS: process.env.ADMIN_PASS as string
    }
};

export const envVars = loadEnvironmentVariables();