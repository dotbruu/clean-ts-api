import { AddAccount, AddAccountParams, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountParams): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(null))
  }
}
