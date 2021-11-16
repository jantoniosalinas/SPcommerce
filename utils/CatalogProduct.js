const faker = require('faker')

const productNames = ['PK1','PK2','PK3','PK4','PK5','PK6','PK7','PK8','PK9','PK10']
const descriptions = ['DSC1','DSC2','DSC3','DSC4','DSC5','DSC6','DSC7','DSC8','DSC9','DSC10']
const prices = [1,2,3,4,5,6,7,8,9,10]
const quantities = [4,3,2,5,7,8,9,10,5,2]
const images = ['../images/1.jpg','./images/2.jpg','../images/3.jpg','../images/4.jpg','../images/5.jpg','../images/6.jpg','../images/7.jpg','../images/8.jpg','../images/9.jpg','../images/10.jpg']
const createProducts = (size = 10) => {
  
  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      sku: faker.random.alphaNumeric(6),
      product_name: productNames[i],
      description: descriptions[i],
      image: images[i],
      price: prices[i],
      quantity: quantities[i]
    })
  }
  return products
}

module.exports = createProducts
