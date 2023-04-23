const express = require("express");
const router = express.Router();
const Task = require("../Models/task");

router.post("/addTask", async (req, res) => {
  try {
    //console.log(req.body)
    const {companyId , primarytext, description, headline, cta, imageurl } = req.body;

    const saveTask = await Task({
      companyId ,
      primarytext,
      description,
      headline,
      cta,
      imageurl,
    });
    await saveTask.save();
    res.status(200).send("task Added");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
