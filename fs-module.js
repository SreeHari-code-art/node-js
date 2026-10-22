const fs = require("fs");

// Asynchronous directory and file creation
fs.mkdir("./temp-dir", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Directory created successfully.");

    fs.writeFile(
        "./temp-dir/notes.txt", // Fixed typo: temp-dri -> temp-dir
        "Node.js file system module demo",
        (err) => {
            if (err) throw err;
            console.log("File written successfully.");
        }
    );
});