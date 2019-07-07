const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const productsRouter = require('./routers/productRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/products', productsRouter);
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

//todo add error handler
//todo how to use properly middlewear