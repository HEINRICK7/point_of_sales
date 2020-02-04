const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const router = express.Router();

app.use(cors());
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(productRouter );
app.use(userRouter );

const PORT = 3332;
const HOST = "localhost";

app.listen(PORT, HOST, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log(`Connected http://${HOST}:${PORT}`)
    }
})