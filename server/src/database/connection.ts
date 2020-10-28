import knex, { DbRecord } from 'knex'   //para trabalhar com sqlite usando linguagem de js
import path from 'path'

//migrations = controlam a versão do banco de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db

//knex procura por js e não ts, por isso criamos knexfile.ts