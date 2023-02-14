const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // GET route to find all categories
router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // GET route to find one category by its `id` value
router.get('/:id', async (req, res) => {

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // 
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // POST route to create a new category
router.post('/', async (req, res) => {

  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update a category by its `id` value
router.put('/:id', async (req, res) => {

  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!'});
      return;
    }
  
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route to delete a categoryy by its `id` value
router.delete('/:id', async (req, res) => {

  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!'});
      return;
    }
  
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// export route
module.exports = router;
