"use strict"
const express = require("express"),
      app = express(),
      morgan = require("morgan"),
      appRoute = require("./Routes/route");
      //body_parser = require("body-parser");
      require("dotenv").config();

      //Cargando los Middleware y desplegar el sevidor
      app.set("port", process.env.PORT  || 3000);
      //app.use(body_parser.urlencoded({extended:true}));
      app.use(express.json())
      app.use(morgan("dev"));
      app.use(appRoute);

     //Exportando el modulo app para que asi se sea escuchado 
        module.exports = app;
     
