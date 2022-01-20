import { Controller } from '../../../presentation/protocols/controller'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-repository'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongorepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongorepository)
}
