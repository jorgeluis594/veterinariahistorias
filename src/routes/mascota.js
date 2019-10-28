const router = require('express').Router();
const Mascota=require('../models/mascotas');
const Cliente = require('../models/clientes');
const Atencion = require('../models/atenciones');

router.get('/mascotas/registrar/:id',async(req,res)=>{
    const id_cliente = req.params.id
    res.render('mascotas/new-mascota',{id_cliente});
});
router.post('/mascotas/registrar',async(req,res)=>{
 const {idcliente,nombremasco,nacimiento,edad,tipo,raza,agresividad,peso,sexo} = req.body;

const {nombrecli,dni,telefono} =  await Cliente.findById(idcliente);
const newMascota=new Mascota({nombrecli,dni,telefono,nombremasco,nacimiento,tipo,raza,edad,agresividad,peso,sexo});
await newMascota.save();
res.redirect('/mascotas/atenciones/'.concat(newMascota._id));
});

router.get('/mascotas/atenciones/:id',async(req,res)=>{
    const idmasco = req.params.id.toString();
    const {nombrecli,dni,telefono,nombremasco,nacimiento,raza,peso,sexo} = await Mascota.findById(idmasco);
    const atenciones = await Atencion.find({idmascota: idmasco}).sort({fecha_atencion:'desc'});
 res.render('mascotas/atenciones',{idmasco,nombrecli,dni,telefono,nombremasco,nacimiento,raza,peso,sexo,atenciones});
});
router.get('/mascotas/nueva_atencion/:id',async(req,res)=>{
    const {nombremasco} = await Mascota.findById(req.params.id);
    const id = req.params.id;
    res.render('mascotas/new-atencion',{nombremasco,id});
});
router.post('/mascotas/nueva_atencion/', async(req,res)=>{
    const {idmascota,nombremasco,servicio,responsable,detalle}= req.body;
    const newAtencion = new Atencion({idmascota,nombremasco,servicio,responsable,detalle});
    await newAtencion.save();
    res.redirect('/mascotas/atenciones/'.concat(idmascota));
})
module.exports = router;