const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('clientes/show-clientes');
});

module.exports = router;