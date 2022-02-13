const fs = require("fs")

// Reading files
fs.readFile("./docs/blog.txt", (err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log(data.toString());
})

// Writing files
fs.writeFile("./docs/blog.txt", "<Content to be written>", () => {
    console.log("Content was written");
})

if(!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if(err){
            return console.log(err);
        }
        console.log("Folder created");
    })
} else {
    console.log("Folder already exists");
    fs.rmdir("./assets", (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("Folder deleted");
    })
}

if(fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("File deleted");
    })
} else {
    fs.writeFile("./docs/deleteme.txt", "", (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("File created back");
    })
}

console.log("last line");

