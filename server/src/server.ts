import express from 'express'
import Cors from 'cors'
import routes from './routes'

const app = express()

app.use(Cors())
app.use(express.json())
app.use(routes)

//GET buscar ou listar
//POST criar 
//PUT atualizar
//DELETE apagar

//corpo (request body): dados para criação ou att de um registro
//Route Params: identificar qual resurso quero att ou deletar
//Query Params: paginação, filtros, ordenação



//localhost:3333
app.listen(3333)