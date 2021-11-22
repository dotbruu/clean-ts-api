import { MissingParamError } from '../../errors/missing-param-error'
import { Validation } from './validation'

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
