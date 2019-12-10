const express = require("express");
const app = express();
const PORT = process.env.PORT || 1231;

const userRoutes = require("./routes/User");

require("./database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World"
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
