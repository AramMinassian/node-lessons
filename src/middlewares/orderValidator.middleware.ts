import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";


const orderValidator = (req: Request, res: Response, next: NextFunction) => {
  let schema: Schema;
  if (req.method === "POST") {
    schema = Joi.object({
      costumer: Joi.string().uuid().required(),
      products: Joi.array().required(),
      total_price: Joi.number().required(),
    })
  } else if (req.method === "PUT") {
    schema = Joi.object({
      status: Joi.number()
    })
  }

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(500).json({
      error: "Bad request",
      message: error.details[0].message
    })
  }
  next();
}

export default orderValidator;