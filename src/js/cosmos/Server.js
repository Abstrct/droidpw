import {Registry} from "@cosmjs/proto-signing";
import {assertIsBroadcastTxSuccess, defaultRegistryTypes, SigningStargateClient} from "@cosmjs/stargate";
import { Client } from "structs-client-ts";

/**
 * Server Client
 */
export class Server {
  constructor() {

    this.rpcEndpoint = "wss://0.0.0.0:3000";
    this.client;
  }

  async init(instance_wallet) {
    const [test] = await instance_wallet.getAccounts();
    console.log(test.address)

    this.client = new Client(
      {
        apiURL: "http://localhost:1317",
        rpcURL: "http://localhost:26657",
        prefix: "structs",
      },
      instance_wallet
    )
  }

}
