// ./src/transaction.js
// * Contains the class definition for a single transaction.

function generateRandomIPv4() { //get random address string
    let ipv4 = "";
    ipv4 += Math.floor(Math.random() * 255) + 1; //network 1
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;//network 2
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;//host 1
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;//host 2
    return ipv4;
}

function generateRandomMoney() { //get random money amount
    return Math.floor(Math.random() * 1000000);
}
class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0) {
        this.fromAddress = generateRandomIPv4();
        this.toAddress = generateRandomIPv4();
        this.amount = generateRandomMoney();
    }
    prettify() { //pretty print transaction
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;
        return txStr;
    }
}
module.exports = Transaction; //export so we can use in other files
