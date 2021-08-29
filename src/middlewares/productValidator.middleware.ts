import { Request, Response, NextFunction } from "express";
import Joi from "joi";


const productValidator = (req: Request,res: Response, next: NextFunction) => {
  const schema = Joi.object({
    category: Joi.string().required(),
    name: Joi.string().required(),
    total_price: Joi.number().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
  })
  
  const {error} = schema.validate(req.body);
  if(error){
    return res.status(500).json({
      error: "Bad request",
      message: error.details[0].message
    })
  }
  next();
}

export default productValidator;