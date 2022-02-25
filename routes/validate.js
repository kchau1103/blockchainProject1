// ./routes/validate.js
// * The server validates the blockchain.

function validate(app) { // Validate the server's instance of a blockchain
    app.get("/validate", function (request, response) { // Check valid blockcahin
        let isValid = global.blockchain.isChainValid();//response message
        let responseStr = "";
        if (isValid) {
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid!";
        }
        response //blockchan validating response
            .status(200) // HTTP status code 200: OK
            .send(responseStr); // Response message
    });
}
module.exports = validate;//export so we can use in other files