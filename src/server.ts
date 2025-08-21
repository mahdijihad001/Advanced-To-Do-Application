import { Server } from "http"
import { envVars } from "./app/config/env";
import mongoose from "mongoose";
import app from "./app";


let server: Server;



const startServer = async () => {
    try {
        await mongoose.connect(envVars.MONGO_URI);

        console.log("MongoDb connected successfully.");

        server = app.listen(envVars.PORT, () => {
            console.log("Server successfully runing!");
            console.log(`http://localhost:${envVars.PORT}`);
        })


    } catch (error) {
        console.log("MongoDB connection error");
        console.log("error", error);
    }
}

startServer();


process.on("SIGTERM", () => {
    console.log("sigterm signal detected... Server surting down.");

    if (server) {
        server.close(() => {
            process.exit(0)
        });
    };
    process.exit(0);
});


process.on("SIGINT", () => {
    console.log("Sigint signal detected... server shurting down");

    if (server) {
        server.close(() => {
            process.exit(0)
        })
    };

    process.exit(0);

})


process.on("unhandledRejection", (err) => {
    console.log("Unhandle Rejection detected... Server shurtting down.", err);
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    };
    process.exit(1);
});


process.on("uncaughtException", (err) => {
    console.log("Un Caugth exception detected... server shurtting down.", err);

    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }

    process.exit(1);
});