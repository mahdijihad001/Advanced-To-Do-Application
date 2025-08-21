import dotEnv from "dotenv";
dotEnv.config();

interface envType{
    PORT : string,
    DEV_ENVIRONMENT : string,
    MONGO_URI : string,
    ACCESS_SECRET : string
};


const loadEnvironmentVariables = () : envType =>{

    const requiredEnvironment : string[] = ["PORT" , "DEV_ENVIRONMENT" , "MONGO_URI" , "ACCESS_SECRET"];

    requiredEnvironment.forEach((key) =>{
        if(!process.env[key]){
            throw new Error(`Missing required environment variable!`);
        }
    })

    return {
        PORT : process.env.PORT as string,
        DEV_ENVIRONMENT : process.env.DEV_ENVIRONMENT as string,
        MONGO_URI : process.env.MONGO_URI as string,
        ACCESS_SECRET : process.env.ACCESS_SECRET as string
    }
};

export const envVars = loadEnvironmentVariables();