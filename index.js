const express = require("express");
const soal_2 = require("./soal_2.js");
const pool = require("./queries.js")

const app = express();
const port =3000

app.use("/", soal_2);


pool.connect((error, response)=>{
    console.log(error);
    console.log("conneted");
})

app.listen(port,()=>{
    console.log(`server run at port ${port}`);
});