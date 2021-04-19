const express = require('express');
const { getItems } = require('../controllers/items.controllers');

const router = express.Router();

router.get('/items', async (req, res) => {
  let q = req.query.q;
  const result = await getItems(q);
  if(result.items.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json({message: 'Not found'});
  }
});

module.exports = router;
