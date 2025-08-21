import dotEnv from "dotenv";
dotEnv.config();

interface envType{
    PORT : string,
    DEV_ENVIRONMENT : string
};


const loadEnvironmentVariables = () : envType =>{

    const requiredEnvironment : string[] = ["PORT" , "DEV_ENVIRONMENT"];

    requiredEnvironment.forEach((key) =>{
        if(!process.env[key]){
            throw new Error(`Missing required environment variable!`);
        }
    })

    return {
        PORT : process.env.PORT as string,
        DEV_ENVIRONMENT : process.env.DEV_ENVIRONMENT as string
    }
};

export const envVars = loadEnvironmentVariables();