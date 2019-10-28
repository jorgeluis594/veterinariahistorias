const moongose = require('mongoose');
const {Schema} = moongose;
const MascotaSchema = new Schema({
//datos del dueño
 nombrecli: {type:String, required:true},
 dni:{type:Number, required:true},
 telefono:{type:Number, required:true},
 //datos de la mascota
 nombremasco: {type:String, required:true },
 nacimiento:{type:Date, required:true},
 raza:{type:String, required:true},
 agresividad:{type: Number, required:false},//del 1,2,3. 1 menos agresivo, 3 agresivo.
 peso:{type:Number,required:true},
 sexo:{type:String,required:true},
 date:{type:Date, default:Date.now},
 alergias:[]
});

module.exports=moongose.model('Mascota',MascotaSchema);