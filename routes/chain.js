// ./routes/chain.js
// * The server prints out the entire blockchain.

function chain(app) { // Print entire blockchain
    app.get("/chain", function (request, response) {
        // response message
        let chainStr = global.blockchain.prettify(); //prettify print response
        response
            .status(200) // HTTP status code 200: OK
            .send(chainStr); // Response message
    });
}
module.exports = chain;//export so we can use in other files