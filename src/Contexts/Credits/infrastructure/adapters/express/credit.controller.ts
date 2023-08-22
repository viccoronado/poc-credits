import { Request, Response } from "express";
import { CreateCreditUseCase } from "../../../application/credit/createCredit.useCase";

class CreditController {
  public async create(req: Request, res: Response) {
    const createCredit = new CreateCreditUseCase();

    const body = {
      id: req.body.id,
      username: req.body.username,
      amount: req.body.amount,
      createdAt: req.body.createdAt,
      dueAt: req.body.dueAt
    };

    const result = await createCredit.execute(body);

    return result.getHttpResult(res);
  }
};

export default new CreditController;