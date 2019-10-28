const moongose = require('mongoose');
const {Schema} = moongose;
const ClienteSchema = new Schema({
//Cliente
 nombrecli: {type:String, required:true},
 dni:{type:Number, required:true},
 telefono:{type:Number, required:false},
 celular:{type:Number, required:true},
 email:{type:String, required:false},
 distrito:{type:String,required:true},
 direccion:{type:String,required:true},
 date:{type:Date, default:Date.now}
});

module.exports=moongose.model('Cliente',ClienteSchema);