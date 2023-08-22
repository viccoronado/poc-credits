import { CreditEntity } from "../../../../../domain/credit/credit.entity";

export interface IRepositoryCredit {
  create(data: CreditEntity): Promise<CreditEntity>;
  update(data: Partial<CreditEntity>): Promise<boolean>;
  findAll(): Promise<CreditEntity[]>;
  exists(where: Partial<CreditEntity> | {}): Promise<CreditEntity | null>;
}