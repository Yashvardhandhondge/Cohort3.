const monggose = require('mongoose');
monggose.connect('mongodb://localhost:27017/transaction',{useNewUrlParser:true,useUnifiedTopology:true});

const UserSchema = monggose.Schema({
    username:String,
    password:String,
    privateKey:String,
    publicKey:String
})

const UserModel = monggose.model('user',UserSchema);

module.exports = {UserModel};