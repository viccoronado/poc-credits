import CreditAdapter from "src/Contexts/Credits/application/interfaces/credit.adapter";
import { CreditEntity } from "src/Contexts/Credits/domain/credit/credit.entity";

export default class MySqlCreditAdapter implements CreditAdapter {
    findOne(id: string | number): Promise<CreditEntity> {
        throw new Error("Method not implemented.");
    }
    
}