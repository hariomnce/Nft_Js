import { Wallet,Client,NFTokenMint,convertStringToHex,AccountNFTsRequest } from "xrpl";

async function accountNft() {
    try {

        let wallet=Wallet.fromSeed("sEd7NBfMZn6P5MDzdQHQeuwRSnDx55R");
        let client=new Client("wss://s.altnet.rippletest.net/");

        await client.connect();

        let accountNftRequest:AccountNFTsRequest={
            account:wallet.classicAddress,
            command:'account_nfts',  
        }

        let accountNftResponse=await client.request(accountNftRequest);
        console.log(accountNftResponse);
        
    } catch (error) {
        console.log(error);
        
    }
}
accountNft();