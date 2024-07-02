import http from 'node:http'


const server = http.createServer((req,res) => {
return res.end('ola nara')
})

server.listen(5050)

//localhost:3333