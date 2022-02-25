// ./index.js
// * Imports
const express = require("express"); // Imports Express
const morgan = require("morgan"); // Imports Morgan


const app = express();//initialize express class object as a constant
app.use(morgan("dev")); // use morgan to log requests. dev format to pretty print


const port = 8080; // 8080 port number


require("./routes")(app);//loud routes from routes folder

const Blockchain = require("./src/blockchain");//import blockchain from ./src/blockchain

// Global variables

global.difficulty = 5; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // copy of the blockchain

global.transactions = []; // Our current transactions

// Configure our server to run
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`); //show running server on terminal
});