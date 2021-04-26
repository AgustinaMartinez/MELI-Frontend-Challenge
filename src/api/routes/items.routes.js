const express = require('express');
const { getItemsData } = require('../controllers/items.controllers');

const router = express.Router();

router.get('/items', async (req, res) => {
  let q = req.query.q;
  const result = await getItemsData(q);
  if(result?.items.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json({message: 'Not found'});
  }
});

module.exports = router;
