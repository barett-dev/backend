const express = require('express');
const rateLimit = require('express-rate-limit');

const productsRouter = require('./routes/products.router');
const cartRouter = require('./routes/carts.routes');

const app = express();
const port = 1000

//app.use(express.urlencoded({ extended: true}))

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

app.use('/api/products', productsRouter)


app.use('/api/carts/', cartRouter)