const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  id: Number,
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: String,
  address: String,
  city: String,
  state: String,
  zipcode: Number,
  phonenumber: String,
  profile: {
      type: String,
      required: true
  },
  usertype: {
      type: String,
      required: true
  },
  since: {
    type: Date,
    default: new Date()
  }
}, {
  versionKey: false,
  timestamps: true
})


userSchema.methods.toSimple = function () {
   const { password, ...restUser } = this.toObject()
   return restUser
}

const UserModelSchema = mongoose.model('Users', userSchema)

module.exports = UserModelSchema
