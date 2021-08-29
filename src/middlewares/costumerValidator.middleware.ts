import { Request, Response, NextFunction } from "express";
import Joi from "joi";


const costumerValidator = (req: Request,res: Response, next: NextFunction) => {
  const schema = Joi.object({
    first_name: Joi.string().min(2).required(),
    last_name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    address: Joi.string().required()
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

export default costumerValidator;