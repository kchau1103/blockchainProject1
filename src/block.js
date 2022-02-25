// ./src/block.js

const crypto = require("crypto"); // build in function encryption algorithm

// Define a SHA256 hash function

function SHA256(message) {
    return crypto
        .createHash("sha256") //set hash to SHA256
        .update(message) // update
        .digest("hex"); // turn hash into hex string
}
class Block {
    constructor(prevHash = "", transactions = []) {
        this.timestamp = Date.now(); //timestamp
        this.transactions = transactions; // Transaction list
        this.hash = this.getHash(); // Current block's hash
        this.prevHash = prevHash; // Previous block's hash
        this.nonce = 0; // Some random value for mining purposes
        this.mine();// Mine the block
    }
    
    getHash() { //current block hasg
        // Combine all transactions into strings
        let txStr = "";
        for (let i = 0; i < this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }
        // Add all parts of hash together...
        return SHA256(
            this.prevHash + // Previous hash value 
                this.timestamp + // timestamp of the block,
                txStr + // all transactions,
                this.nonce // random nonce for fun
        );
    }
    // Mine a new block
    mine() {
        let checkString = Array(global.difficulty + 1).join("0"); 
        let tries = 0;
        while (!this.hash.startsWith(checkString)) { //loop to see if hash starts with 0
            this.nonce++; //increase nonce to get new hash
            this.hash = this.getHash();// Recompute the  hash
            tries++; //increase count
        }
        console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
    }

    prettify() { //print print block
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`; //block parameters
        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;//block parameters
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;//block parameters
        blockStr += "<div><b>Transactions:</b></div><div>";//block parameters
    
        for (let i = 0; i < this.transactions.length; i++) { //loop through transactions
            blockStr += "    " + this.transactions[i].prettify();
        }
        blockStr += "</div>";
        return blockStr;
    }
}
module.exports = Block;//export so we can use in other files