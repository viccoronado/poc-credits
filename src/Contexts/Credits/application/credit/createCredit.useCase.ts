import { CreditEntity } from "../../domain/credit/credit.entity";
import { CreditDomain } from "../../domain/credit/credit.domain";
import { CreditRepository } from "../../infrastructure/adapters/db/mysql/prisma/Repository";
import { IUseCase } from "../interfaces/useCase.adapter";
import { Result } from "../../infrastructure/utils/error/result.template";

interface IResponse {
  credit: CreditEntity;
}

export class CreateCreditUseCase implements IUseCase<CreditEntity, IResponse> {
  private readonly _errorCreateCredit = "Unable to create a new credit";

  constructor() { }

  async execute(data?: CreditEntity): Promise<Result<IResponse>> {
    try {
      const credit = new CreditDomain(
        new CreditRepository(),
        data.id,
        data.username,
        data.amount,
        data.createdAt,
        data.dueAt
      );

      const created = await credit.create();

      if (created) {
        return Result.ok<IResponse>(
          '201',
          {
            credit: created,
          },
        );
      }
    } catch (errorInCreateCredit) {
      return Result.fail<IResponse>(
        this._errorCreateCredit,
        400
      );
    }
  }
}