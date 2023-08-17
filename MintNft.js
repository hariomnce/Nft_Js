const { Wallet, Client, NFTokenMint, convertStringToHex } = require("xrpl");

async function mintNFT() {
    try {
        let wallet = Wallet.fromSeed("sEd7NBfMZn6P5MDzdQHQeuwRSnDx55R");
        let client = new Client("wss://s.altnet.rippletest.net/");

        await client.connect();

        let nftMint = {
            Account: wallet.classicAddress,
            NFTokenTaxon: 1,
            TransactionType: "NFTokenMint",
            URI: convertStringToHex("hariom")
        };

        let submittedTrx = await client.submit(nftMint, { autofill: true, wallet: wallet });
        console.log(submittedTrx);
    } catch (err) {
        console.log(err);
    }
}

mintNFT();
