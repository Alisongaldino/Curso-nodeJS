import http from 'node:http'

//HTTP
// GET => buscar
// POST => criar
// PUT => atualizar
// PATCH => atualizção especifica
// DELETE => deletar

//GET /users => Buscar usuario
// POST / users => criar usuario

const users = []

const server = http.createServer((req,res) => {
    const { method, url } = req

    if (method == 'GET' && url == '/users') {
        return res
        .setHeader('Content-type', 'application/json')
        .end (JSON.stringify(users))
    }
  
    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name:'nara',
            email: 'naralinda@gmail.com',
        })
        return res.end ('Criação de users')
    }

    return res.end ('a')
})

server.listen(3333)
