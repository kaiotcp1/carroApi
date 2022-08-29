const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cars', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Banco de dados Conectado !!');
})
module.exports = db;
