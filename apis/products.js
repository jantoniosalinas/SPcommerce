const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const authMiddleware = require('./apis/middleware/authMiddleWare')

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { productsDispatcher } = require('../controller')
const { getAllProducts,
        getProductByCategory, 
        getProductById,
        createProduct,
        updateProduct,
        removeProduct,
        addShoppingCart,
        getCart,
        deleteCart,
        createUser,
        getInfo,
        getByEmail
      } = productsDispatcher
 
// route to get all products
router.get('/', async (req, res) => {
  const products = await getAllProducts()
  res.send(products)
})

// route to get a product
router.get('/sku/:id', async (req, res) => {
  const { id } = req.params
  const product = await getProductById(id)
  
  if (!product) {
    res.status(404)
    return res.send({
      message: `Product: ${id} not found`
    })
  }
  
  return res.send(product)
})

// route to get a product
router.get('/search/:category', async (req, res) => {
  const { category } = req.params
  const product = await getProductByCategory(category)
  
  if (!product) {
    res.status(404)
    return res.send({
      message: `Category: ${category} not found`
    })
  }
  
  return res.send(product)
})


// route to create a product
router.post('/', async (req, res) => {
  const body = req.body

  // ValidationError
  try {
    const newProduct = await createProduct(body)

    res.status(201)

    res.send(newProduct)
  } catch (err) {
    console.error(err)
    // 1xx info
    // 2xx ok
    // 3xx delegates action to client
    // 4xx error client
    // 5xx error server
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})
 
// route to update a product
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body

  const product = await updateProduct(id, body)

  if (!product) {
    res.status(404)
    return res.send({
      message: `Product ${id} not found`
    })
  }

  res.send(product)
})
 
// route to delete a product
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const result = await removeProduct(id)
  res.send(result)
})
 
// shoppingCart
router.post('/carts', async (req, res) => {
  const body = req.body
  //console.log(body)

  // ValidationError
  try {
      const newCart = await addShoppingCart( body )
      res.status(201)

      res.send(newCart)
  }
  catch ( err ) {
          console.error(err)
          // 1xx info
          // 2xx ok
          // 3xx delegates action to client
          // 4xx error client
          // 5xx error server
          if ( err instanceof mongoose.Error.ValidationError) {
               res.status(400)
               return res.send({
                   message: 'Error de validación',
                   reason: err.message
               })
          }
          res.status(500)
          return res.send({
                error: err.message
          })
  }
})

// route to get a product
router.get('/getCart/:email', async (req, res) => {
  const { email } = req.params
  const cart = await getCart(email)
  
  if (!cart) {
    res.status(404)
    return res.send({
      message: `ShoppingCart: ${email} not found`
    })
  }
  
  return res.send(cart)
})

// route to delete a product
router.delete('/deleteCart/:_id', async (req, res) => {
  const { _id } = req.params
  const result = await deleteCart(_id)
  res.send(result)
})

// users
router.post('/users', async (req, res) => {
  const body = req.body

  // ValidationError
  try {
      const newUser = await createUser( body )
      res.status(201)

      res.send(newUser)
  }
  catch ( err ) {
          console.error(err)
          // 1xx info
          // 2xx ok
          // 3xx delegates action to client
          // 4xx error client
          // 5xx error server
          if ( err instanceof mongoose.Error.ValidationError) {
               res.status(400)
               return res.send({
                   message: 'Error de validación',
                   reason: err.message
               })
          }
          res.status(500)
          return res.send({
                error: err.message
          })
  }
})


// route to get Info
router.get('/getInfo/:email', async (req, res) => {
  const { email } = req.params
  const info = await getInfo(email)
  
  if (!info) {
    res.status(404)
    return res.send({
      message: `User: ${email} not found`
    })
  }
  
  return res.send(info)
})

// auth
router.post('/auth/login', async (req, res) => {
    const { email, password }= req.body
    
      const user = await getByEmail( email ) 
      if ( !user ) {
           return res.status(401).send({
                  message: 'Usuario o contraseña invalida ...'
           })
      }
      
      const isOk = bcrypt.compareSync( password, user.password )
      if ( !isOk ) {
           return res.status(401).send({
                  message: 'Usuario o contraseña invalida ...'
           })
      }

      const tokenSecret = process.env.TOKEN_SECRET
      const token = jwt.sign( user.toSimple(), tokenSecret )

      res.send({
        user: user.username,
        email: user.email,
        token
      })
})


module.exports = router
