const {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalance,
  Hbar,
  TransferTransaction,
} = require("@hashgraph/sdk");
require("dotenv").config();

async function environmentSetup() {
  //Grab your Hedera testnet account ID and private key from your .env file
  const myAccountId = process.env.MY_ACCOUNT_ID;
  const myPrivateKey = process.env.MY_PRIVATE_KEY;

  // create hedera client for testnet
  const client = Client.forTestnet();

  // Set the client's operator using your account ID and private key
  client.setOperator(myAccountId, myPrivateKey);

  // set the default maximun transactio fee(in Hbar) for all transactions
  client.setDefaultMaxTransactionFee(new Hbar(100));

  // set the maximun query payment(in Hbar) for all queries
  client.setDefaultMaxQueryPayment(new Hbar(50));

  // If we weren't able to grab it, we should throw a new error
  if (!myAccountId || !myPrivateKey) {
    throw new Error(
      "Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present"
    );
  }
}

environmentSetup();
console.log("Environment setup complete");
