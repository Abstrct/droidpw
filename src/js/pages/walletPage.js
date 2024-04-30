
import {Player} from "../models/Player"
import {TmpPlayer} from "../models/TmpPlayer"

import {Secp256k1, sha256, Sha256} from "@cosmjs/crypto"
import { toBech32 } from "@cosmjs/encoding";

import { rawSecp256k1PubkeyToRawAddress } from "@cosmjs/amino";

const player = new Player();
await player.offlineInit();


const page = 'wallet';

console.log("Player Address: " + player.address)
document.getElementById("address").innerHTML = player.address;
document.getElementById("mnemonic").innerHTML = player.mnemonic;

//let current_balance = await player.queryBalance()
//console.log(current_balance);
//console.log("Balance " + current_balance.data.balances[0].amount + current_balance.data.balances[0].denom)




