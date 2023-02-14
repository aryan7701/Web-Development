//const fk= require("fk");
//let text = fk.readFileSync("call.txt","utf-8");
//text = text.replace("vitbhopal", "vit vellore");


//console.log("The content of the file is: ");
//console.log(text);

//console.log("Creating a new file...");
//fk.writeFileSync("aryan.txt", text);

const fs = require("fs");
let text = fs.readFileSync("call.txt", "utf-8");
text = text.replace("Arigato", "Rohan");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);