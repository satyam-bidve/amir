const express = require("express");
const router = express.Router();
const Task = require("../Models/task");
const Task1 = require("../Models/task1");

router.post("/addTask", async (req, res) => {
  try {
    const {
      name,
      url,
      companyId,
      primarytext,
      description,
      headline,
      cta,
      imageurl,
    } = req.body;

    const saveTask = await Task({
      companyId,
      primarytext,
      description,
      headline,
      cta,
      imageurl,
    });
    await saveTask();
    const saveTask1 = await Task1({
      companyId,
      name,
      url,
    });
    await saveTask1.save();
    res.status(200).send("task Added");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
