// SOAL NOMOR 1
let pool = require("../queries.js");
let fs = require('fs');

const seedQuery = fs.readFileSync("db/seeding.sql",{encoding:'utf8'});
pool.query(seedQuery,(error, response)=>{
    console.log(error);
    console.log("seeding complete");
    pool.end(); 
});