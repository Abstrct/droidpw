/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { allocationType, allocationTypeFromJSON, allocationTypeToJSON } from "./keys";

export const protobufPackage = "structs.structs";

export interface Allocation {
  id: string;
  type: allocationType;
  /** Core allocation details */
  sourceObjectId: string;
  index: number;
  destinationId: string;
  power: number;
  /** Who does this currently belong to */
  creator: string;
  controller: string;
  /** Locking will be needed for IBC */
  locked: boolean;
}

function createBaseAllocation(): Allocation {
  return {
    id: "",
    type: 0,
    sourceObjectId: "",
    index: 0,
    destinationId: "",
    power: 0,
    creator: "",
    controller: "",
    locked: false,
  };
}

export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.sourceObjectId !== "") {
      writer.uint32(26).string(message.sourceObjectId);
    }
    if (message.index !== 0) {
      writer.uint32(32).uint64(message.index);
    }
    if (message.destinationId !== "") {
      writer.uint32(42).string(message.destinationId);
    }
    if (message.power !== 0) {
      writer.uint32(48).uint64(message.power);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.controller !== "") {
      writer.uint32(66).string(message.controller);
    }
    if (message.locked === true) {
      writer.uint32(72).bool(message.locked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
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

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceObjectId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.index = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.destinationId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.power = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.controller = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.locked = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? allocationTypeFromJSON(object.type) : 0,
      sourceObjectId: isSet(object.sourceObjectId) ? String(object.sourceObjectId) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      destinationId: isSet(object.destinationId) ? String(object.destinationId) : "",
      power: isSet(object.power) ? Number(object.power) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
    };
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== 0) {
      obj.type = allocationTypeToJSON(message.type);
    }
    if (message.sourceObjectId !== "") {
      obj.sourceObjectId = message.sourceObjectId;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.destinationId !== "") {
      obj.destinationId = message.destinationId;
    }
    if (message.power !== 0) {
      obj.power = Math.round(message.power);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.locked === true) {
      obj.locked = message.locked;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Allocation>, I>>(base?: I): Allocation {
    return Allocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Allocation>, I>>(object: I): Allocation {
    const message = createBaseAllocation();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.sourceObjectId = object.sourceObjectId ?? "";
    message.index = object.index ?? 0;
    message.destinationId = object.destinationId ?? "";
    message.power = object.power ?? 0;
    message.creator = object.creator ?? "";
    message.controller = object.controller ?? "";
    message.locked = object.locked ?? false;
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
