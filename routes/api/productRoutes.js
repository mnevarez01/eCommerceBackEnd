//!! all API routes for the product

//TODO: the GET, POST=> will need to create DB information 
//TODO: PUT route, and delete route. 

const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/', (res, req) => {

})

router.get('/:id', (res, req) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router