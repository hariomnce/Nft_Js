const { Wallet, Client, NFTokenMint, convertStringToHex, NFTokenMintFlags } = require("xrpl");

async function mintNFT() {
    try {
        let wallet = Wallet.fromSeed("sEd7NBfMZn6P5MDzdQHQeuwRSnDx55R");
        let client = new Client("wss://s.altnet.rippletest.net/");

        wallet.sign
        await client.connect();

        let nftMint = {
            Account: wallet.classicAddress,
            NFTokenTaxon: 1,
            TransactionType: "NFTokenMint",
        //  URI: convertStringToHex("hariom"),
            URI:convertStringToHex('https://ipfs.io/ipfs/QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE'),
            Flags:NFTokenMintFlags.tfTransferable
        };

        let submittedTrx = await client.submit(nftMint, { autofill: true, wallet: wallet });
        console.log(submittedTrx);
    } catch (err) {
        console.log(err);
    }
}

mintNFT();
