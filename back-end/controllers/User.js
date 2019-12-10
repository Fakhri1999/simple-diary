const userModel = require("../models/User");

const read = async (req, res, next) => {
  try {
    let user = await userModel.read();
    return res.status(200).json({
      status: "success",
      error: false,
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      error: true,
      message: error.message
    });
  }
};

const insert = async (req, res, next) => {
  const data = req.body;
  try {
    let userInsert = await userModel.insert(data);
    if (userInsert == data) {
      return res.status(201).json({
        status: "success",
        error: false,
        data: userInsert
      });
    } else {
      return res.status(403).json({
        status: "error",
        error: true,
        message: userInsert.message
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      error: true,
      message: error.message
    });
  }
};

module.exports = { read, insert };
