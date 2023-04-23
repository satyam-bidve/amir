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
    await saveTask.save();
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

router.get("/getData", async (req, res) => {
  try {
    const { key } = req.body;
    if (!key) {
      const data = await Task.find({});
      res.status(200).send(data);
    } else {
      const data = await Task.find({
        $or: [
          { primarytext: { $regex: key, $options: "i" } },
          { name: { $regex: key, $options: "i" } },
          { headline: { $regex: key, $options: "i" } },
          { description: { $regex: key, $options: "i" } },
        ],
      });
      const data1 = await Task1.find({
        $or: [{ name: { $regex: key, $options: "i" } }],
      });
      res.status(200).send({ data: data, data1: data1 });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
