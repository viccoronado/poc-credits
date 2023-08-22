import { CreditEntity } from "../../domain/credit/credit.entity";

export default interface CreditAdapter {
    findOne(id: number | string) : Promise<CreditEntity>
}