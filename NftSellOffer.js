const { Wallet, Client, NFTokenMint, convertStringToHex, AccountNFTsRequest, parseNFTokenID, NFTokenCreateOffer, NFTokenCreateOfferFlags } = require("xrpl");

async function sellNFT() {
    try {
        let wallet_issuer = Wallet.fromSeed("sEdS7C5vCoid6FaunQ24GLVnWaXqL5d");
        let wallet_user = Wallet.fromSeed("sEdTo9uXo8VgMuhLHgCf7ti4WVXoBj4");
        let client = new Client("wss://s.altnet.rippletest.net/");

        await client.connect();

        let nftSellOffer = {
            TransactionType: "NFTokenCreateOffer",
            Account: wallet_issuer.classicAddress,
            NFTokenID: "00000000F35811E2CF16C66628DD41E4996C2B786D94B7090000099A00000000",
            Amount: "0",
            Flags: NFTokenCreateOfferFlags.tfSellNFToken,
            Destination: wallet_user.classicAddress
        };

        let trxResult = await client.submit(nftSellOffer, { autofill: true, wallet: wallet_issuer });
        console.log(trxResult);

    } catch (error) {
        console.log(error);
    }
    
}

sellNFT();