import { InvalidParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols/validation'

export class CompareFieldValidation implements Validation {
  constructor (
    private readonly fieldname: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (input: any): Error {
    const hasField = input[this.fieldname]
    const hasFieldToCompare = input[this.fieldToCompareName]

    if (hasField !== hasFieldToCompare) {
      return new InvalidParamError(this.fieldname)
    }

    return null
  }
}
