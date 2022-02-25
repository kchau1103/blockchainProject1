// ./routes/mine.js

// * The server mines a new block, and adds it to its personal chain.
function mine(app) {
    app.get("/mine", (request, response) => { //calls mine
        global.blockchain.addBlock(); // add block to chain
        global.transactions = []; //reset transactions
        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;// Send a success response
        response.status(200).send(msg);
    });
}
module.exports = mine;//export so we can use in other files
