const http = require('http')
const fs = require('fs')

const path = require('path')
const url = require('url')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  let fullPath = __dirname + req.url

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.log(`${err}\n`)
    }
    console.log(`Должен отправить файл ${fullPath}\n`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    res.end(data)
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
