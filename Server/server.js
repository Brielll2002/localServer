const http = require('node:http')

const hostname = ''//COLOCAR IPv4
const port = 3100

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!')
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em: http://${hostname}:${port}`)
})
