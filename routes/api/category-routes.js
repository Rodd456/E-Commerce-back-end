const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    const categoryData = awaitCategory.findAll({
      // be sure to include its associated products
      include: {
        model: Product,
        attributions: ['id', 'product_name' , 'price', 'category_id'],
      }
  });
  return res.status(200).json(categoryData);
}
catch(err){
  res.status(404).json
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = awaitCategory.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
       }
    });
    return res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = awaitCategory.create(req.body); 
      return res.status(200).json(categoryData);
       }catch (err){
        res.status(400).json(err);
       }
    });

    router.put('/:id', async (req, res) => {
      // update a category by its `id` value
      try {
        const categoryData = await Category.update(req.body, {
          where: {
            id: req.params.id,
          },
          individualHooks: true 
        });
        res.status(200).json(categoryData); 
      } catch (err) { 
        res.status(500).json(err); e
      }
    });
    

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
