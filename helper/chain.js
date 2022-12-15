const Block = require("./block");

class Chain{
  constructor(){
    this.blockchain = [];
  }
  initBlock(){
    return new Block("Initial Block in the Chain");
  }
  getLatestBlock(){
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock){

    newBlock.index = this.blockchain.length;
    
    if(newBlock.index > 0)
      newBlock.previousHash = this.getLatestBlock().hash;
    
    newBlock.computeHash();    

    if(this.checkValidity) 
      this.blockchain.push(newBlock);
    else 
      throw "Blockchain not valid";
  }
  checkValidity(){
    for(let i = 1; i < this.blockchain.length; i++){
      const currentBlock = this.blockchain[i];
      const previousBlock= this.blockchain[i-1];

      if(currentBlock.hash !== currentBlock.computeHash()){
        return false;
      }
      if(currentBlock.previousHash !== previousBlock.hash)
        return false;
    }
    return true;
  }
}

module.exports = Chain;