const fs = require("fs")

//Read data
const data = fs.readFileSync("./homework.log" , "utf-8")
console.log(data)

//Write data
fs.writeFileSync("./log.txt", data, "utf-8")
console.log("Berhasil write")