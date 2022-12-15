const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(data, previousHash=" "){
    this.index = null
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = null;     
  }
  computeHash(){

    if(this.index !=  null && !this.hash){
      this.hash = SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
  }   
}

module.exports = Block;