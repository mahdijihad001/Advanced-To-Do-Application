"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./app/config/env");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const seedAdmin_1 = require("./app/utils/seedAdmin");
let server;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(env_1.envVars.MONGO_URI);
        console.log("MongoDb connected successfully.");
        server = app_1.default.listen(env_1.envVars.PORT, () => {
            console.log("Server successfully runing!");
            console.log(`http://localhost:${env_1.envVars.PORT}`);
        });
    }
    catch (error) {
        console.log("MongoDB connection error");
        console.log("error", error);
    }
};
(async () => {
    await startServer();
    await (0, seedAdmin_1.seedAdmin)();
})();
process.on("SIGTERM", () => {
    console.log("sigterm signal detected... Server surting down.");
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
    ;
    process.exit(0);
});
process.on("SIGINT", () => {
    console.log("Sigint signal detected... server shurting down");
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
    ;
    process.exit(0);
});
process.on("unhandledRejection", (err) => {
    console.log("Unhandle Rejection detected... Server shurtting down.", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
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
//# sourceMappingURL=server.js.map