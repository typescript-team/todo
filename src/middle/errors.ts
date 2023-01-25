import { validationResult } from 'express-validator';
import { RequestHandler, ErrorRequestHandler } from 'express';

const error404: RequestHandler = (req, res, next) => {
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
}

const errorHandleValidation: RequestHandler = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(error);
  }
  next();
}

export { error404, errorHandler, errorHandleValidation };