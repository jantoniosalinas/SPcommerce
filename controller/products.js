const ProductModelSchema = require('../models/Products')
const ShoppingCartModel = require('../models/ShoppingCarts')
const userModelSchema = require('../models/Users')

const bcrypt = require('bcryptjs')
// Catalog
const getAllProducts = async () => {
  return ProductModelSchema.find({})
}

const getProductByCategory = async (category) => {
  return ProductModelSchema.find({ category })
}

const getProductById = async (sku) => {
  return ProductModelSchema.findOne({ sku })
}

// CRUD products
const createProduct = async (body) => {
  const newProd = new ProductModelSchema(body)
  await newProd.save()
  return newProd
}

const updateProduct = async (sku, updateObject) => {
  return ProductModelSchema.findOneAndUpdate({ sku }, updateObject, {
    upsert: false,
    new: true
  })
}

const removeProduct = async (sku) => {
  return ProductModelSchema.findOneAndDelete({ sku })
}

// ShoppingCart
const addShoppingCart = async (  body ) => {
    const { idShoppingCart, statusCart, storage } = body 
    const cartStorage = []
    for ( let i = 0; i < storage.length; i++ ) {
          cartStorage.push ({
                            id: i+1,
                            sku: storage[i].sku,
                            product_name: storage[i].product_name,
                            price: storage[i].price,
                            quantity: storage[i].quantity,
                            total_price: storage[i].total_price
        })
    }

    const cart = {
        idShoppingCart,
        statusCart,
        storage: cartStorage
    } 
    const newCart = new ShoppingCartModel(cart)
    await newCart.save()
    return newCart
}

// Users
const createUser = async (body) => {
  // Encrypt
  const pass = body.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(pass, salt)
  body.password = hash
  //

  const newUser = new userModelSchema(body)
  await newUser.save()
  return newUser.toSimple()
}

const getByEmail = async ( email ) => {
  return userModelSchema.findOne( { email } )
}

module.exports = {
  getAllProducts,
  getProductByCategory,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
  addShoppingCart,
  createUser,
  getByEmail
}
