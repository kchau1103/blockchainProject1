// ./routes/newtransaction.js
// * Creates a new mock transaction and adds it to the system.

const Transaction = require("../src/transaction");
function newtransaction(app) {// Create a new transaction
    app.get("/newtransaction", function (request, response) {
        let tx = new Transaction(); // new Transaction object
        global.transactions.push(tx); //push transaction to global transaction
        response //new transaction response
            .status(200) // HTTP status code 200: OK
            .send(tx.prettify()); // Response message
    });
}
module.exports = newtransaction;//export so we can use in other files