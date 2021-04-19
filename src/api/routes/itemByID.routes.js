const express = require('express');
const { getItemByID } = require('../controllers/itemByID.controller');

const router = express.Router();

router.get('/items/:id', async (req, res) => {
  let id = req.params.id;
  const result = await getItemByID(id);
  if(result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({message: 'Not found'});
  }
});

module.exports = router;
