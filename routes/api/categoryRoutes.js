//all API routes for the categories: 'api/categories'

const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (res, req) => {
  Category.findAll({
    include: [Product]
  })
    .then((categories) => res.status(200).json(categories))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (res, req) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then((categories) => res.status(200).json(categories))
    .catch(err => res.status(400).json(err))
})

router.post('/', (req, res) => {
  Category.create(req.body)
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json(err))

})

router.put('/:id', (req, res) => {
  Category.update({
    where: {
      id: req.params.id
    }
  })
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json(err))
})
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((category) => res.status.apply(200).json(category))
    .catch(err => res.status(400).json(err))
})

module.exports = router