"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestalidation = void 0;
const requestalidation = (zodSchama) => async (req, res, next) => {
    try {
        req.body = await zodSchama.parseAsync(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.requestalidation = requestalidation;
//# sourceMappingURL=requestValidation.js.map