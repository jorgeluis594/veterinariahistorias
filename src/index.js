//requires
const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializaciones
const app = express();
require('./database');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exhbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layout'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//Midlewares
//app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mafercita',
    resave:true,
    saveUninitialized:true
}));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/historias'));
app.use(require('./routes/groomer'));
app.use(require('./routes/mascota'));
app.use(require('./routes/clientes'));
app.use(require('./routes/veterinarios'));
app.use(require('./routes/usuarios'));


//static files

app.use(express.static(path.join(__dirname,'public')));

//serverInitialize
app.listen(app.get('port'),()=>{
    console.log('Server iniciado en el puerto: ',app.get('port'));
})