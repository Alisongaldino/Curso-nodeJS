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
const server = http.createServer((request, response) => {
    const {method, url} = request

    if (method == 'GET' && url == '/users'){
        return response.end(JSON.stringify(users))
    }
    if (method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'NARA',
            email: 'narada@gmail.com'

        })
        return response.end('criação dos usuários')
    }

    return response.end('Server ON')

})
server.listen(3333)
