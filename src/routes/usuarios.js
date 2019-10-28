const router = require('express').Router();
const User = require('../models/usuarios');

/*router.get('/usuarios/registrar',(req,res)=>{
    res.render('users/new-users');

});*/
router.get('/usuarios/registrar',(req,res)=>{
    res.render('users/new-users');
});
router.post('/usuarios/registrar',async(req,res)=>{
  const {nombre,apellido,telefono,email,username,password,repassword,rol}=req.body;
  const errors=[];
  if(repassword!=password){
    errors.push({text:'Contraseñas no coinciden'});
  }
  if(password.lenght <4){
      errors.push({text:'La contraseña debe ser mayor a 4 caracteres'});
  }
  if(errors>0){
    console.log(errors);
      res.redirect('/usuarios/registrar');
       }
  else{
      console.log(req.body);
      const newUser = new User({nombre,apellido,telefono,email,username,password,rol});
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      res.send('estas registrado');
  }
});

module.exports = router;