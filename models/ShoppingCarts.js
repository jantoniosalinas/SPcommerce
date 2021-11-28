const mongoose = require('mongoose')
const { Schema } = mongoose

const Cart = new Schema({
    idShoppingCart: String,
    statusCart: String,
    storage: [{
            id: {
                type: Number,
                required: true
            },
            sku: {
                type: String,
                required: true
            },
            product_name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product_quantity: {
                type: Number,
                required: true
            },
            total_price: {
                type: Number,
                required: true
            }
    }]
}, {
   versionKey: false,
   timestamps: true
})

const ShoppingCartModel = mongoose.model('ShoppingCarts', Cart)

module.exports = ShoppingCartModel