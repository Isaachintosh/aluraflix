const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const tables = require('./infrastructure/tables')

connection.connect((erro) => {
    if(erro){
        console.log(erro)
    } else {
        console.log('conexão com Banco de Dados bem sucedida')
        tables.init(connection)
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor online na porta 3000'))
    }
})
