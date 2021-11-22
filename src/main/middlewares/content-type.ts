import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const contentType = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.type('json')
  next()
}
