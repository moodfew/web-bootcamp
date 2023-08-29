const fs = require("fs");

// fs.writeFile("message.txt", "Hello from denis", (err) => {
//     if (err) throw err;
//     console.log("File Saved");
// })

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

