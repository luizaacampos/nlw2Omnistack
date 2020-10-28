import express from 'express'
import ClassesController from './controllers/classesController'
import ConnectionsController from './controllers/connectionsController'



const routes = express.Router()
const ClassesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

routes.post('/classes', ClassesControllers.create);
routes.get('/classes', ClassesControllers.index);

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)


export default routes