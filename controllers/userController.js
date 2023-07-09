const User = require('../models/userModel');

 exports.signup = async  (req, res) =>{
  try{

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        status: 'fail',
        message: 'email in use'
      });
    }
    const newUser = await User.create(req.body);
    res.status(201).json({status: "success", data: newUser})
  } catch(err){
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }

}

exports.findUser = async (req, res) => {}