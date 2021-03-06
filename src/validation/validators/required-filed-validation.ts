import { MissingParamError } from '../../presentation/errors/missing-param-error'
import { Validation } from '../../presentation/protocols/validation'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldname: string) {}

  validate (input: any): Error {
    const hasField = input[this.fieldname]

    if (!hasField) {
      return new MissingParamError(this.fieldname)
    }

    return null
  }
}
