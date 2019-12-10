const express = require("express");
const app = express();
const PORT = process.env.PORT || 1231;

const apiRoutes = require("./routes/api");

require("./database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRoutes);


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
