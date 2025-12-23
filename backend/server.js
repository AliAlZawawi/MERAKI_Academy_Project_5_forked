const express = require("express");
const app = express();
const PORT = 5000;
require("dotenv").config();
const { pool } = require("./Models/db");

const lessonsRouter=require("./Routers/lessons")

app.use(express.json());




app.use("/lessons", lessonsRouter)



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
