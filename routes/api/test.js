const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const testCollection = require('../../models/Test');

router.get('/', async (req, res) => {
  try {
    let data = await testCollection.find();
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: "Unable to GET db info"});
  }
});

router.post('/', (req, res) => {
  try {
    console.log(req.body);
    let newTest = new testCollection({
      name: req.body.name,
      age: req.body.age
    })
    const save = newTest.save();
    res.json(save);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg: "Unable to POST"});
  }
});

module.exports = router;