// Truffle configuration file
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

module.exports = {
  networks: {
    dev: {
      host: "localhost",
      port: 8545,
      network_id: "*", // match any network
      // from: `wallet address`
    },

    prod: {
      host: "1.1.1.1",
      port: 8080,
      network_id: 1,	// Ethereum live network
      // additional variables
      // gas
      // gasPrice
      // from (contract address)
      // provider (web3 provider)
      //
      //
  }
};

