import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldValidation } from './compare-filed-validation'

interface SutTypes {
  sut: CompareFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldValidation('any_field', 'field_to_compare')
  return {
    sut
  }
}

describe('CompareField Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_field',
      field_to_compare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('any_field'))
  })

  test('Should not return a InvalidParamError if validation succeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_field',
      field_to_compare: 'any_field'
    })
    expect(error).toBeFalsy()
  })
})
