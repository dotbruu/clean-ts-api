import { InvalidParamError } from '../../errors/invalid-param-error'
import { EmailValidator } from '../../protocols'
import { Validation } from '../../protocols/validation'

export class EmailValidation implements Validation {
  constructor (
    private readonly fieldname: string,
    private readonly emailValidator: EmailValidator
  ) {
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldname])
    if (!isValid) {
      return new InvalidParamError(this.fieldname)
    }
  }
}
