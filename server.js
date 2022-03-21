"use strict"
 const app = require("./app");

app.listen(app.get("port"),()=>{
    console.log(`http://localhots:${app.get("port")}`);
})