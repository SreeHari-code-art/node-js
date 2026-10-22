const fs = require("fs");
const data = fs.readFileSync("C:\\Users\\DELL\\Desktop\\git-hub-project\\node-js\\file.txt", "utf-8");
console.log(data);
console.log("Execution continues after file read completes.");