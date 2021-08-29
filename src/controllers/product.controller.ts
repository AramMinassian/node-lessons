import { Request, Response, NextFunction } from "express";
import { Product } from "../entity/Product";
import { getRepository } from "typeorm";

class ProductController {

  create = async (req: Request, res: Response, next: NextFunction) => {
    const productRepo = getRepository(Product);
    const newProduct = productRepo.create(req.body);
    try {
      const results = await productRepo.save(newProduct);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }

  getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const productRepo = getRepository(Product);
    try {
      const products = await productRepo.find();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productRepo = getRepository(Product);
    const { id } = req.params
    try {
      const product = await productRepo.findOne(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productRepo = getRepository(Product);
    const { id } = req.params
    try {
      const product = await productRepo.findOne(id);
      productRepo.merge(product, req.body);
      const results = productRepo.save(product);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }


  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productRepo = getRepository(Product);
    const { id } = req.params
    try {
      await productRepo.delete(id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }

}

export default new ProductController();