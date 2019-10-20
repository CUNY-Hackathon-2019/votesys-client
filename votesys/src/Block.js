
function Block(chain_state, signed_key, vote_id)
{
    this.chain_state = chain_state;
    this.block.signed_key = signed_key;
    this.block.vote_id = vote_id;

}

module.exports = Block;