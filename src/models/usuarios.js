const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
    nombre: {type: String, required:true},
    apellido:{type:String, required:true},
    telefono : {type: String, required:true},
    email: {type: String, required: false},
    username: {type: String, required: true},
    password: {type:String, required:true},
    rol:{type: Number, required:true},//1=administrador 2=veterinario 3=recepcionista 4=groomer
    date: {type: Date, default:Date.now}
});

UserSchema.methods.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    return hash;
};

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);
