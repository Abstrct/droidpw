
import {Player} from "../models/Player"
import {TmpPlayer} from "../models/TmpPlayer"

import {Secp256k1, sha256, Sha256} from "@cosmjs/crypto"
import { toBech32 } from "@cosmjs/encoding";

import { rawSecp256k1PubkeyToRawAddress } from "@cosmjs/amino";

const player = new Player();
await player.init();

function bytesToHex(byteArray) {
  return Array.from(byteArray, byte => {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
}

const page = 'index';

console.log("Player Address: " + player.address)

/*
let current_balance = await player.queryBalance()
console.log(current_balance);
console.log("Balance " + current_balance.data.balances[0].amount + current_balance.data.balances[0].denom)
*/




// Create a temporary Player object
const tmpPlayer = new TmpPlayer();
await tmpPlayer.init();


// Create Message
let nonce = 0
let proxy_message = "GUILD" + "0-1" + "ADDRESS" + tmpPlayer.address + "NONCE" + nonce
console.log("Proxy Message:" + proxy_message)


// Create Hash of Message
const encoded_proxy_message = new TextEncoder().encode(proxy_message)
let digest = sha256(encoded_proxy_message)
console.log("Hash: " + digest)


// Sign Message
let signing_account = await tmpPlayer.getAccounts()
console.log(signing_account)
let signature = await Secp256k1.createSignature(digest, signing_account[0].privkey)
console.log("Signature")
console.log(signature)
// verify signature
let verifySign = await Secp256k1.verifySignature(signature, digest, signing_account[0].pubkey)
console.log(verifySign)

let recoveredPubKey = await Secp256k1.recoverPubkey(signature, digest)
console.log("Signing Account pub key")
console.log(signing_account[0].pubkey)
console.log("recovered pub key")
console.log(recoveredPubKey)

const encoded_proxy_message2 = new TextEncoder().encode(proxy_message+"dog")
let hash2 = new Sha256(encoded_proxy_message2)
let digest2 = hash2.digest()
console.log("Hash: " + digest2)

 verifySign = await Secp256k1.verifySignature(signature, digest2, recoveredPubKey)
console.log(verifySign)


// pub key magic
let idk =  rawSecp256k1PubkeyToRawAddress(signing_account[0].pubkey)
console.log("idk")
console.log(idk)
let conv = toBech32("structs", rawSecp256k1PubkeyToRawAddress(signing_account[0].pubkey));
console.log(conv)

console.log(signing_account[0].pubkey.toString())

// Create Msg to Broadcast
const fee = {
  amount: [
    {
      denom: "alpha",
      amount: "1",
    },
  ],
  gas: "180000",
};


console.log("Guild Join info")
const viewGuildPubKey = bytesToHex(signing_account[0].pubkey);
console.log(viewGuildPubKey);
const viewGuildSignature = bytesToHex(signature.toFixedLength());
console.log(viewGuildSignature);

//let joinResults = await player.performJoinProxy(tmpPlayer.address, signing_account[0].pubkey, signature.toFixedLength(), fee)
//console.log(joinResults)

/*

{"username":null,"mnemonic":"","address":""}

 */



// Create Message
let address_message = "PLAYER" + "1-1" + "ADDRESS" + tmpPlayer.address
console.log("Proxy Message:" + address_message)


// Create Hash of Message
const encoded_address_message = new TextEncoder().encode(address_message)
let address_digest = sha256(encoded_address_message)
console.log("Hash: " + address_digest)


// Sign Message

let address_signature = await Secp256k1.createSignature(address_digest, signing_account[0].privkey)
console.log("Signature")
console.log(address_signature)
// verify signature
let verifyAddressSign = await Secp256k1.verifySignature(address_signature, address_digest, signing_account[0].pubkey)
console.log(verifyAddressSign)

let recoveredAddressPubKey = await Secp256k1.recoverPubkey(address_signature, address_digest)
console.log("Signing Account pub key")
console.log(signing_account[0].pubkey)
console.log("recovered pub key")
console.log(recoveredAddressPubKey)

console.log(tmpPlayer.address)
console.log(signing_account[0].pubkey)
console.log(signature.toFixedLength())



console.log(tmpPlayer.address)
//const viewPubKey = btoa(signing_account[0].pubkey);
const viewPubKey = bytesToHex(signing_account[0].pubkey);
console.log(viewPubKey);
//const viewSignature = btoa(signature.toFixedLength());
const viewSignature = bytesToHex(address_signature.toFixedLength());
  console.log(viewSignature);
