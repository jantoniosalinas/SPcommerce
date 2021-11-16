const jwt = require('jsonwebtoken')

const getTokenFromHeader = ( headerStr ) => {
    return headerStr.includes('Bearer')
    ? headerStr.split(' ')[1]
    : headerStr
}
const authMiddleware = ( req, res, next ) => {
    const { authorization } = req.headers
    if ( !authorization ) {
         res.status(403)
         return send({
             error: 'U shall not pass',
             code: "Without Access"
         })
    } 

    const secret = process.env.TOKEN_SECRET
    const token = getTokenFromHeader(authorization)
    try {
        const decoded = jwt.verify(token, secret)
        console.log(decoded)
        req.user = decoded
        next()
    }
    catch (error) {
        res.status(403)
        return send({
            error: 'U shall not pass',
            code: "Without Access"
        })
    }
}

module.exports = authMiddleware