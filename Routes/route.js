"use strict"

const express = require("express"),
      route = express.Router();
var MovieController = require("../Controllers/MovieController");
      
      route
      .get("/all-movie", MovieController.getAll)
      .get("/get-one/:MovieId", MovieController.getOne)
      .post("/save", MovieController.save)
      .delete("/delete-movie/:movieid", MovieController.delete)

module.exports = route;