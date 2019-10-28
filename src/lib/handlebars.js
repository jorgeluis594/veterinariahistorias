const  format = require('date-format');
const helpers = {};

helpers.dateformat = (date)=>{
    return format.asString('dd-MM-yyyy',date);
};
module.exports=helpers;