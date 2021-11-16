const express = require('express')
const cors = require('cors')
const app = express()
//const authMiddleware = require('./apis/middleware/authMiddleWare')

const router = require('./apis')

app.use(cors())
//app.use(authMiddleware())

app.get('/', (req, res) => {
  res.send({
    message: 'Bienvenido a SPcommerce'
  })
})

app.use(express.json())
app.use(router)

module.exports = app
