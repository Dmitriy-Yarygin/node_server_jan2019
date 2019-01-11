const http = require('http')
const url = require('url')

const { apiController } = require('./api_controller.js')
const { readAndSendFile } = require('./file_reader')

const BUILD_PATH = '/home/NIX/yarygin/education/react-practice-test-shop/build/'
const hostname = '127.0.0.1'
const port = 3005

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  const pathArray = pathname.split('/')
  console.log(pathname)
  if (pathArray[1] === 'assets') {
    readAndSendFile(`${BUILD_PATH}${pathArray.slice(2).join('/')}`, res)
  } else if (pathArray[1] === 'api') {
    apiController(query, res)
  } else {
    readAndSendFile(`${BUILD_PATH}index.html`, res)
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
