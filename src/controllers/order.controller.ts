import { Request, Response, NextFunction } from "express";
import { Order } from "../entity/Order";
import { getRepository } from "typeorm";

class OrderController {

  create = async (req: Request, res: Response, next: NextFunction) => {
    const orderRepo = getRepository(Order);
    const newOrder = orderRepo.create(req.body);
    try {
      const results = await orderRepo.save(newOrder);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }

  getOrders = async (req: Request, res: Response, next: NextFunction) => {
    const orderRepo = getRepository(Order);
    try {
      const orders = await orderRepo.find();
      res.json(orders);
    } catch (err) {
      next(err);
    }
  }

  getOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderRepo = getRepository(Order);
    const { id } = req.params
    try {
      const order = await orderRepo.findOne(id);
      res.json(order);
    } catch (err) {
      next(err);
    }
  }

  updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderRepo = getRepository(Order);
    const { id } = req.params
    try {
      const order = await orderRepo.findOne(id);
      orderRepo.merge(order, req.body);
      const results = orderRepo.save(order);
      res.json(results);
    } catch (err) {
      next(err);
    }
  }

  deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderRepo = getRepository(Order);
    const { id } = req.params
    try {
      await orderRepo.delete(id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }

}

export default new OrderController();