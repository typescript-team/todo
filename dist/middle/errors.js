"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandleValidation = exports.errorHandler = exports.error404 = void 0;
const express_validator_1 = require("express-validator");
const error404 = (req, res, next) => {
};
exports.error404 = error404;
const errorHandler = (err, req, res, next) => {
};
exports.errorHandler = errorHandler;
const errorHandleValidation = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.json(error);
    }
    next();
};
exports.errorHandleValidation = errorHandleValidation;
