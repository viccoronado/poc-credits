import { IRepositoryCredit } from "./IRepository";
import { CreditEntity } from "../../../../../domain/credit/credit.entity";
import { PrismaClient } from "@prisma/client";

export class CreditRepository implements IRepositoryCredit {
  private databaseCon: PrismaClient;

  constructor() {
    this.databaseCon = new PrismaClient();
  }

  create(data: CreditEntity): Promise<CreditEntity> {
    return this.databaseCon.credit.create({ data });
  }

  exists(where: Partial<CreditEntity> | {}): Promise<CreditEntity | null> {
    return this.databaseCon.credit.findFirst({ where });
  }

  findAll(): Promise<CreditEntity[]> {
    return this.databaseCon.credit.findMany();
  }

  update(data: Partial<CreditEntity>): Promise<boolean> {
    return Promise.resolve(false);
  }
}