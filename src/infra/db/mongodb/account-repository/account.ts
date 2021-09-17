import { AddAccountRepository } from "data/protocols/add-account-repository";
import { AddAccountParams } from "domain/usecases/add-account";
import { AccountModel } from "domain/models/account/account";
import { MongoHelper } from "../helpers/mongo-helper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountParams): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection("accounts");
    const result = await accountCollection.insertOne(accountData);
    const account = await accountCollection.findOne(result.insertedId);
    return MongoHelper.map(account);
  }
}
