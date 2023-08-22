import { CreditEntity } from "./credit.entity";
import { IRepositoryCredit } from "../../infrastructure/adapters/db/mysql/prisma/IRepository";

export class CreditDomain {
  private readonly id: number;
  private username: string;
  private amount: number;
  private createdAt: Date;
  private dueAt: Date;

  constructor(
    private database: IRepositoryCredit,
    id: number,
    username: string,
    amount: number,
    createdAt: Date,
    dueAt: Date
  ) {
    this.id = id;
    this.username = username;
    this.amount = amount;
    this.createdAt = createdAt;
    this.dueAt = dueAt;
  }

  public get Id() {
    return this.id;
  }

  public get Username() {
    return this.username;
  }

  public get Amount() {
    return this.amount;
  }
  public get CreatedAt() {
    return this.createdAt;
  }
  public get DueAt() {
    return this.dueAt;
  }

  public async create() {
    if (!this.id || !this.username) {
      throw new Error("Id & username can't be empty");
    }

    const data: CreditEntity = {
      id: this.id,
      username: this.username,
      amount: this.amount,
      createdAt: this.createdAt,
      dueAt: this.dueAt
    };

    await this.existsIsFail({ id: this.id, createdAt: this.createdAt });

    return this.database.create(data);
  }

  private async existsIsFail(where: string | {}): Promise<void> {
    const result = await this.database.exists(where);

    if (result) {
      throw new Error("Credit already exists");
    }
  }

};