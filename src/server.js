const app = require('./app');
const db = require('./db/database');
const carRouter = require('./routes/carRouter');

app.use('/car', carRouter);

app.listen(3000, () => {
    console.log("Servidor Online !!!");
});