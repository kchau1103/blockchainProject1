// ./src/blockchain.js

const Block = require("./block"); //block definition

class Blockchain {
    constructor() {
        this.chain = [new Block(Array(65).join("0"))]; // chain array with all blocks and create genesis block
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];// Returns last block in the chain
    }

     getChainLength() {
        return this.chain.length;// Returns length of our chain
    }

    addBlock() {// Adds a new block to the chain
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);// Mine a new block with the previous block's hash
        this.chain.push(Object.freeze(newBlock));// add new unchangable block to the chain
    }
    isChainValid(blockchain = this) {// Validates the chain
        for (let i = 1; i < blockchain.chain.length; i++) { //loop through chain, skipping genesis
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i - 1];
            
            if ( //validate hashes
                // Check current hash
                currentBlock.hash !== currentBlock.getHash() ||
                // Check if previous hash matches
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }
            
            let checkString = Array(global.difficulty + 1).join("0");
            if (!currentBlock.hash.startsWith(checkString)) {// Check the hash validity
                return false;
            }
        }
        return true;
    }

    replaceChain(newChain) { //update with new blockchain
        if (newChain.length <= this.chain.length) return; //check length of chain
        if (!this.isChainValid(newChain)) return;//check valid chain
        this.chain = newChain;//replace chain
    }

    prettify() {//pretty print chain
        let chainStr = "";
        for (let i = 0; i < this.chain.length; i++) {
            chainStr += this.chain[i].prettify();
            chainStr += "<br><hr>";
        }
        return chainStr;
    }
}
module.exports = Blockchain;//export so we can use in other files