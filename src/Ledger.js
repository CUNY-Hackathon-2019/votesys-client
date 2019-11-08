
class Ledger{
    constructor(){
        this.Ledger = [];
    }

    add(newBlock){
        this.Ledger.push(newBlock);
    }

    display(){
        for(let i = 1; i < this.Ledger.length; i++)
        {
            console.log(this.Ledger[i]);
        }
    }
}

export default Ledger;