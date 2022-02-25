// ./routes/index.js
// * Dynamically loads route files included in this folder.

const fs = require("fs"); // file indexing
function dynamicallyLoadRoutes(app) {
    // Read all of the filenames in the current folder and apply function
    fs.readdirSync(__dirname).forEach(function (file) { //skip file and JS files
        if (
            file === "index.js" ||
            file.substr(file.lastIndexOf(".") + 1) !== "js"
        )
            return;
        let name = file.substr(0, file.indexOf(".")); //get file name
        require("./" + name)(app); // Add the routes file to the exports
    });
}
module.exports = dynamicallyLoadRoutes;//export so we can use in other files
