// Routes API: '/api/routes'

const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

router.get('/', (res, req) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
    .then(tags => res.status(200).json(tags))
    .catch(err => res.status(500).json(err))

})

router.get('/:id', (res, req) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]

  })
    .then(tag => res.status(200).json(tag))
    .catch(err => res.status(400).json(err))
})

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(tag => res.status(200).json(tag))
    .catch(err => res.status(400).json(err))

})

router.put('/:id', (req, res) => {
  Tag.update({
    where: {
      id: req.params.id
    }
  })
    .then(tag => res.status(200).json(tag))
    .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tag => res.status(200).json(tag))
    .catch(err => res.status(400).json(err))

})

module.exports = router