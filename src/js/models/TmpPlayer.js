import { stringToPath, Random, Bip39 } from "@cosmjs/crypto";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";

import {Server} from "../cosmos/Server"
import {assertIsBroadcastTxSuccess, BankExtension} from "@cosmjs/stargate";
import {QueryGetPlayerRequest} from "../../../../structs-client-ts/structs.structs/types/structs/structs/query";

/**
 * Player Model
 */
export class TmpPlayer {
  constructor() {
    this.id = "";
    this.username = '';

    this.wallet;
    this.address = '';

    this.mnemonic;
  }

  /*
   * force = true //destroys old account!
   *
   * Should probably create some sort of account
   * graveyard instead of just saving over the old one
   */
  async init(mnemonic = '') {
    let identity = await this.createIdentity(mnemonic);

    console.log(identity.address)
    this.username = identity.username;
    this.mnemonic = identity.mnemonic;
    this.address = identity.address;

    // Check the server for an ID
    let query_player_id = await this.queryPlayerId()
    this.id = query_player_id.data.playerId

  }


  async createIdentity(mnemonic) {

    if ( mnemonic == '') {
      console.log('Generating new mnemonic because none was provided.');

      // Add this constant (16) to the constants.js file
      const getNewRandom = Random.getBytes(16);
      mnemonic = Bip39.encode(getNewRandom).toString();
    }


    this.mnemonic = mnemonic;
    const [account] = await this.getAccounts();
    console.log("Temporary Account accounts")
    console.log(account)

    const identity = {
      username: null,
      mnemonic: mnemonic,
      address: account.address
    }

    return identity;


  }
  async getWallet() {

    // Path and Prefix should both me constants in constant.js
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      this.mnemonic,
      {
          //hdPaths: stringToPath("m/44'/118'/0'/0/0"),
          prefix: "structs"
      }
    );

    console.log(this.wallet)

    return this.wallet;
  }




  /*
   * getAccounts()
   *
   * Use:
   *  const instance = new Player();
   *  await instance.init();
   *  const [firstAccount] = await instance.getAccounts();
   */
  async getAccounts() {
    if (typeof this.wallet == 'undefined' ) {
      this.wallet = await this.getWallet();
    }

    return this.wallet.getAccountsWithPrivkeys();
  }



  async performBuild(compute_result, personalization, fee) {
    let server = new Server();
    await server.init(await this.getWallet());

    console.log(compute_result)

    const msgCreateStructure = {
      typeUrl: "/di.MsgCreateStructure",
      value: {
        creator: this.address,
        name:personalization.name,
        description:personalization.description,
        hash:compute_result.hash,
        input:compute_result.input,
        schematic: compute_result.compute_process.program.schematic.hash,
        performingStructure: compute_result.compute_process.program.performing_structure.id,
        owner: this.address
      }
    };

    console.log(msgCreateStructure)

    let result = await server.client.signAndBroadcast(this.address, [msgCreateStructure], fee);
    console.log(result)

    //assertIsBroadcastTxSuccess(result);

    return result;

  }

  /*
   *
   */
  async queryBalance() {
    let server = new Server();
    await server.init(await this.getWallet());

    let balance_query_result = server.client.CosmosBankV1Beta1.query.queryAllBalances(
      this.address, "alpha"
    );
    //let balance_query_result = await server.client.getBalance(this.address, "alpha")

    if (typeof balance_query_result == 'undefined' || balance_query_result == null){
      balance_query_result = {amount: 0, denom:'alpha'}
    }

    return balance_query_result;
  }

  async queryPlayer() {
    let server = new Server();
    await server.init(await this.getWallet());


    let player_query_result = await server.client.StructsStructs.query.queryPlayer(this.id);

    return player_query_result;
  }

  async queryPlayerId() {
    let server = new Server();
    await server.init(await this.getWallet());


    let player_id_results = await server.client.StructsStructs.query.queryAddress(this.address);

    return player_id_results;
  }
}
