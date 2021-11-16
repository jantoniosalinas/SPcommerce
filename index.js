const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000
require('./database/connectmongo')

app.listen(PORT, () => {
    console.log('#=======================================#')
    console.log(`   Estamos corriendo en puerto ${PORT}`)
    console.log('#=======================================#')
})