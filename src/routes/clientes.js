const router = require('express').Router();
const Cliente = require('../models/clientes');
const Mascotas = require('../models/mascotas');

router.get('/clientes',async (req,res)=>{
    const clientes = await Cliente.find().sort({date:'desc'});
    console.log(clientes);
    res.render('clientes/show-clientes',{clientes});
});
router.get('/clientes/ficha/:id_cliente',async(req,res)=>{
    const cliente = await Cliente.findById(req.params.id_cliente);
    const mascotas = await Mascotas.find({dni:cliente.dni}).sort({date:'desc'});
    //console.log(mascotas);
    res.render('clientes/ficha-cliente',{mascotas,cliente});
});
router.get('/clientes/agregar',(req,res)=>{
    res.render('clientes/agregar-clientes');
});
router.get('/clientes/editar/:id_cliente',async (req,res)=>{
    const cliente = await Cliente.findById(req.params.id_cliente);
    res.render('clientes/editar-clientes',{cliente});
});
router.put('/clientes/editar/:id_cliente', async (req,res)=>{
    const {nombrecli,dni,telefono,celular,email,distrito,direccion} = req.body;
    await Cliente.findByIdAndUpdate(req.params.id_cliente,{nombrecli,dni,telefono,celular,email,distrito,direccion});
    res.redirect('/clientes/ficha/'.concat(req.params.id_cliente));
});
router.post('/clientes/agregar',async(req,res)=>{
    const {nombrecli,dni,telefono,celular,email,distrito,direccion} = req.body;
    const newCliente = new Cliente({nombrecli,dni,telefono,celular,email,distrito,direccion});
    await newCliente.save();
    res.redirect('/clientes')
    //
});
module.exports = router;