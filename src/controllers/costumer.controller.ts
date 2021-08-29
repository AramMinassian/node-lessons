import { Request, Response, NextFunction } from "express";
import { Costumer } from "../entity/Costumer";
import { getRepository } from "typeorm";

class CostumerController {

  create = async (req: Request, res: Response, next: NextFunction) => {
    const costumerRepo = getRepository(Costumer);
    const newCostumer = costumerRepo.create(req.body);
    try {
      const results = await costumerRepo.save(newCostumer);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }

  getCostumers = async (req: Request, res: Response, next: NextFunction) => {
    const costumerRepo = getRepository(Costumer);
    try {
      const costumers = await costumerRepo.find();
      res.json(costumers);
    } catch (err) {
      next(err);
    }
  }

  getCostumer = async (req: Request, res: Response, next: NextFunction) => {
    const costumerRepo = getRepository(Costumer);
    const { id } = req.params
    try {
      const costumer = await costumerRepo.findOne(id);
      res.json(costumer);
    } catch (err) {
      next(err);
    }
  }

  updateCostumer = async (req: Request, res: Response, next: NextFunction) => {
    const costumerRepo = getRepository(Costumer);
    const { id } = req.params
    try {
      const costumer = await costumerRepo.findOne(id);
      costumerRepo.merge(costumer, req.body);
      const results = costumerRepo.save(costumer);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }

  deleteCostumer = async (req: Request, res: Response, next: NextFunction) => {
    const costumerRepo = getRepository(Costumer);
    const { id } = req.params
    try {
      await costumerRepo.delete(id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }

}

export default new CostumerController();