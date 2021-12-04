const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  sku: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'no available'
  },
  image: String,
  price: Number,
  quantity: Number,
  category: {
    type: String,
    required: true
  },
  review: String,
  likes: Number,
  since: {
    type: Date,
    default: new Date()
  }
}, {
  versionKey: false,
  timestamps: true
})

const ProductModelSchema = mongoose.model('Products', productSchema)

module.exports = ProductModelSchema
