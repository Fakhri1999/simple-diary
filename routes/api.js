const router = require("express").Router();
const db = require("../database");
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/user", async (req, res, next) => {
  try {
    let user = await db("user")
      .then(result => result)
      .catch(error => false);
    return res.status(200).json({
      status: "success",
      error: false,
      data: user
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/user", async (req, res, next) => {
  const data = req.body;
  try {
    let userInsert = await db("user").insert(data).then(result => data).catch((error) => {return error});
    if (userInsert == data) {
      return res.status(201).json({
        status: "success",
        error: false,
        data: userInsert
      });
    } else {
      if(userInsert.errno == '1062'){
        return res.status(403).json({
          status: "error",
          error: true,
          message: `Username ${data.username} telah digunakan`
        });
      }
    }
  } catch (error) {
    return res.json({
      error : error
    });
  }
});

module.exports = router;
