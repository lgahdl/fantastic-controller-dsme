const express = require("express");

const router = express.Router();

const { Device } = require("../../../models");

router.get("/", async (req, res, next) => {
  let devices = await Device.query();

  return res.send(devices);
});

router.post("/", async (req, res, next) => {
  const device = new Device(req.body);

  const trx = await Device.startTransaction();

  try {
    let deviceInserted = await Device.query(trx).insert(device);
    await trx.commit();
    return res.send(deviceInserted);
  } catch (error) {
    return next(error);
  }
});

router.patch("/:device_id", async (req, res, next) => {
  const device = new Device(req.body);
  const trx = await Device.startTransaction();

  try {
    await Device.query(trx).findById(req.params.device_id).patch(device);
    await trx.commit();
    const deviceUpdated = await Device.query().findById(req.params.device_id);
    return res.send(deviceUpdated);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete("/:device_id", async (req, res, next) => {
  const trx = await Device.startTransaction();

  try {
    await Device.query(trx).deleteById(req.params.device_id);
    await trx.commit();
    return res.send("Device " + req.params.device_id + " deleted.");
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
