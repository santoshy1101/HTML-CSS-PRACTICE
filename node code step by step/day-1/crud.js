const fs = require("fs");
const path = require("path");
const pathdir = (__dirname,"crud")
const fileName = `${pathdir}/crud.text`;

// file create
// fs.writeFileSync(fileName,"this is crud file");

// file read

// fs.readFile(fileName,'utf-8',(err,data)=>{
//     console.log(data)
// })

// file update

// fs.appendFile(fileName," new thing added after update",(err)=>{
// if(!err) console.log("file updated")
// })

// change file name
// fs.rename(fileName,`${pathdir}/rename.text`,(err)=>{
// if(!err) console.log("file ranamed")
// })

// file delete

// fs.unlink(`${pathdir}/rename.text`,(err)=>{
// if(!err) console.log("file deleted")
// })