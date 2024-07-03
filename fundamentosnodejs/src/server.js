import http from 'node:http'

//HTTP
// GET => buscar
// POST => criar
// PUT => atualizar
// PATCH => atualizção especifica
// DELETE => deletar

//GET /users => Buscar usuario
// POST / users => criar usuario

const server = http.createServer((req,res) => {
    const { method, url } = req

    if (method == 'GEt' && url == '/users') {
        return res.end ('listagem de users')
    }
  
    if (method == 'POST' & url == '/user') {
        return res.end ('Criação de users')
    }

})

server.listen(5050)
