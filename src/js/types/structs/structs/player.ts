/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "structs.structs";

export interface Player {
  id: string;
  index: number;
  guildId: string;
  substationId: string;
  creator: string;
  primaryAddress: string;
  planetId: string;
  load: number;
  capacity: number;
  capacitySecondary: number;
  structsLoad: number;
  storage: Coin | undefined;
}

function createBasePlayer(): Player {
  return {
    id: "",
    index: 0,
    guildId: "",
    substationId: "",
    creator: "",
    primaryAddress: "",
    planetId: "",
    load: 0,
    capacity: 0,
    capacitySecondary: 0,
    structsLoad: 0,
    storage: undefined,
  };
}

export const Player = {
  encode(message: Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.guildId !== "") {
      writer.uint32(26).string(message.guildId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.primaryAddress !== "") {
      writer.uint32(50).string(message.primaryAddress);
    }
    if (message.planetId !== "") {
      writer.uint32(58).string(message.planetId);
    }
    if (message.load !== 0) {
      writer.uint32(64).uint64(message.load);
    }
    if (message.capacity !== 0) {
      writer.uint32(72).uint64(message.capacity);
    }
    if (message.capacitySecondary !== 0) {
      writer.uint32(80).uint64(message.capacitySecondary);
    }
    if (message.structsLoad !== 0) {
      writer.uint32(88).uint64(message.structsLoad);
    }
    if (message.storage !== undefined) {
      Coin.encode(message.storage, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.substationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.primaryAddress = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.planetId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.load = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.capacity = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.capacitySecondary = longToNumber(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.structsLoad = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.storage = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Player {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      primaryAddress: isSet(object.primaryAddress) ? String(object.primaryAddress) : "",
      planetId: isSet(object.planetId) ? String(object.planetId) : "",
      load: isSet(object.load) ? Number(object.load) : 0,
      capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
      capacitySecondary: isSet(object.capacitySecondary) ? Number(object.capacitySecondary) : 0,
      structsLoad: isSet(object.structsLoad) ? Number(object.structsLoad) : 0,
      storage: isSet(object.storage) ? Coin.fromJSON(object.storage) : undefined,
    };
  },

  toJSON(message: Player): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.primaryAddress !== "") {
      obj.primaryAddress = message.primaryAddress;
    }
    if (message.planetId !== "") {
      obj.planetId = message.planetId;
    }
    if (message.load !== 0) {
      obj.load = Math.round(message.load);
    }
    if (message.capacity !== 0) {
      obj.capacity = Math.round(message.capacity);
    }
    if (message.capacitySecondary !== 0) {
      obj.capacitySecondary = Math.round(message.capacitySecondary);
    }
    if (message.structsLoad !== 0) {
      obj.structsLoad = Math.round(message.structsLoad);
    }
    if (message.storage !== undefined) {
      obj.storage = Coin.toJSON(message.storage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Player>, I>>(base?: I): Player {
    return Player.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Player>, I>>(object: I): Player {
    const message = createBasePlayer();
    message.id = object.id ?? "";
    message.index = object.index ?? 0;
    message.guildId = object.guildId ?? "";
    message.substationId = object.substationId ?? "";
    message.creator = object.creator ?? "";
    message.primaryAddress = object.primaryAddress ?? "";
    message.planetId = object.planetId ?? "";
    message.load = object.load ?? 0;
    message.capacity = object.capacity ?? 0;
    message.capacitySecondary = object.capacitySecondary ?? 0;
    message.structsLoad = object.structsLoad ?? 0;
    message.storage = (object.storage !== undefined && object.storage !== null)
      ? Coin.fromPartial(object.storage)
      : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
