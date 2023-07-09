const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  }, 
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 4,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
})


userSchema.pre('save', function(next) {
  console.log(this);

  next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;
