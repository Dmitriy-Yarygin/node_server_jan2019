const fs = require('fs')

function readAndSendFile (fullPath, res) {
  if (fullPath) {
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        console.log(`${err}\n`)
        if (err.code == 'ENOENT') {
          res.statusCode = 404
          res.end()
        }
      } else {
        console.log(`Sending file ${fullPath}\n`)
        res.statusCode = 200
        res.end(data)
      }
    })
  }
}

exports.readAndSendFile = readAndSendFile
