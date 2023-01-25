"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class MiddleWare {
    handleValidationError(req, res, next) {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.json(error);
        }
        next();
    }
}
exports.default = MiddleWare;
