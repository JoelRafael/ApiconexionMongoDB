"use strict"

 const variable = require("./../config")
 const mongoose = require("mongoose"),   
       Schema = mongoose.Schema,
       MovieSchema = new Schema ({
           movied_id :"string",
           tittle:"string",
           release_year:"string",
           reating:"string",
           image:"string" 
       }, 
       {
           collection:"movie"
        }),
        MovieModel = mongoose.model("Movie", MovieSchema);
        mongoose.connect(`mongodb://${variable.host}/${variable.database}`)
        module.exports =MovieModel 
       