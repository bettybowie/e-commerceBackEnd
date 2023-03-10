const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET route to find all tags
router.get('/', async (req, res) => {

  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route to find a tag by its id 
router.get('/:id', async (req, res) => {

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!'});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route to create a new tag
router.post('/', (req, res) => {

  Tag.create(req.body)
    .then((tag) => {

      if (req.body.productIds.length) {
        const productTagIdArr = req.body.productIds.map((product_id) => {
          return {
            product_id,
            tag_id: tag.id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }

      res.status(200).json(tag);
    })
    .then((tagIds) => res.status(200).json(tagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })

});

// PUT route to update a tag's name by its id 
router.put('/:id', async (req, res) => {

  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: 'No category found with that id!'});
        return;
      };
      res.status(200).json(tagData); 
    })
    .catch((err) => res.status(400).json(err));
 
});

// DELETE route to delete one tag by its id value
router.delete('/:id', async (req, res) => {

  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!'});
      return;
    }
  
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// export route
module.exports = router;
