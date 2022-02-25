// ./routes/listtransactions.js
// * Lists all transactions in the system, not currently on blocks.

const Transaction = require("../src/transaction");
function listtransactions(app) {// List all transactions
    app.get("/listtransactions", function (request, response) {
        let txStr = ""; //response string
        for (let i = 0; i < global.transactions.length; i++) {// loop through transactions
            txStr += global.transactions[i].prettify();
        }

        response //new transaction response
            .status(200) // HTTP status code 200: OK
            .send(txStr); // Response message
    });
}
module.exports = listtransactions;//export so we can use in other files