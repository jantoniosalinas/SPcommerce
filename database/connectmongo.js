const connectMongoose = require('mongoose')

const URL = process.env.MONGO_DB_URL

connectMongoose.connect(URL, {}, () => {
  console.log('#=======================================#')
  console.log(`     La conexion a la DB correcta `)
  console.log('#=======================================#')
})

module.exports = connectMongoose
