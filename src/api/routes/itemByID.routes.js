const express = require('express');
const { getItemByIDdata } = require('../controllers/itemByID.controller');

const router = express.Router();

router.get('/items/:id', async (req, res) => {
  let id = req.params.id;
  const result = await getItemByIDdata(id);
  if(result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({message: 'Not found'});
  }
});

module.exports = router;
