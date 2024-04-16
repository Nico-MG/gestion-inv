const express = require('express')
const appE = express()
const port = 3000

function pruebaExpress() {
  appE.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  appE.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
}

module.exports = pruebaExpress
