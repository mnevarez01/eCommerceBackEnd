//API routes for Products: '/api/products'

//TODO: the GET, POST=> will need to create DB information 
//TODO: PUT route, and delete route. 

const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

router.get('/', (res, req) => {
  Product.findAll({
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      }
    ]
  })
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json(err))

})

router.get('/:id', (res, req) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      }
    ]
  })
    .then(product => res.statusCode(200).json(product))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  Product.create(req.body)
    .then(product => {
      if (req.body.tagsIds.length) {
        const productTagidArr = rex.body.tagsIds.map((tagsIds) => {
          return {
            product_id: product.id,
            tag_id
          }
        })
        return ProductTag.bulkCreate(productTagidArr)
      }
    })
    .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json(err))

})

module.exports = router