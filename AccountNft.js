const { Wallet, Client, AccountNFTsRequest, parseNFTokenID } = require("xrpl");

async function accountNft() {
  try {
    
    let wallet = Wallet.fromSeed("sEd7NBfMZn6P5MDzdQHQeuwRSnDx55R");
    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();

    let accountNftRequest = {
      account: wallet.classicAddress,
      command: "account_nfts",
    };

    let accountNftResponse = await client.request(accountNftRequest);
    console.log(accountNftResponse);
    console.log(accountNftResponse.result.account_nfts);

    let parsedNftokenID=parseNFTokenID(accountNftResponse.result.account_nfts[0].NFTokenID);
    console.log(parsedNftokenID);

  } catch (error) {
    console.log(error);
  }
}

accountNft();
