const moongose = require('mongoose');

moongose.connect('mongodb+srv://jorgeluis:safira.123@midogtorabd-xztv0.mongodb.net/test?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
    .then(db =>console.log('base de dato conectada'))
    .catch(err => console.error(err));