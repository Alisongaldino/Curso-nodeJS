import http from 'node:http'


const server = http.createServer((req,res) => {
return res.end('ola mundo')
})

server.listen(5050)

//localhost:3333