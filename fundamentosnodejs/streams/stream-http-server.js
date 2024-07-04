import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberstream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
 } 
}


const server = http.createServer((req, res) => {
    const burffers = []

    for await (const chunk of req) {
        burffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).to
    // return req
    // .pipe(new InverseNumberstream())
    // .pipe(res)
})

server.listen(5050)