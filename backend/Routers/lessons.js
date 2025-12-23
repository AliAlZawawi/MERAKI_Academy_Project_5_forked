const express = require("express");
const { createlessons, getAlllessons, getlessonsById } = require("../Controllers/lessons");

const lessonsRouter = express.Router();


lessonsRouter.post("/",createlessons )

lessonsRouter.get("/", getAlllessons)

lessonsRouter.get("/select/:id", getlessonsById)


module.exports = lessonsRouter;
