const {abi, networks} = require('@sakuracasino/roulette-contract');

console.log(abi); // returns the ABI for the Roulette contract
console.log(networks[1].contract_address); // returns the contract address in the kovan network
