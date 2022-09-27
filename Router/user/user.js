const express= require('express');
const user = express.Router();
const {editUser,getUser,deleteUser} = require('../../Controller/user/user');




user.get('/',getUser);
user.put('/',editUser);
user.delete('/:user_Id',deleteUser);


module.exports=user;