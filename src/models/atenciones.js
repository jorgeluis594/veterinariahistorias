const mongoose=require('mongoose');
const {Schema} = mongoose;

const AtencionSchema = new Schema({
    idmascota : {type:String, required:true},
    nombremasco : {type:String, required:true},
    servicio:{type:String, required:true},
    responsable:{type:String,require:true},
    detalle:{type:String,required:true},
    fecha_atencion:{type:Date, default:Date.now}
});
module.exports = mongoose.model('Atenciones',AtencionSchema);