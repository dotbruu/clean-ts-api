import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(5055, () =>
      console.log('Server running at http://localhost:5055')
    )
  })
  .catch(console.error)
