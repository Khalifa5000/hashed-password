const express = require ('express');
const app = express();
const port = process.env.port || 3000;
require('./db/mongoose');

app.use(express.json());

const userRouer = require('./routers/user')
app.use(userRouer)

app.listen(port , ()=>{
    console.log("all done successfully")
})