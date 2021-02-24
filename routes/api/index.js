const router = require('express').Router();
const categories = require('./categoryRoutes');
const products = require('./productRoutes')
const tags = require('./tagRoutes')


routes.use("/categories", categories)
routes.use("/products", products)
routes.use("/tags", tags)

module.exports = router