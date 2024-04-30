/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "structs.structs";

export interface Substation {
  id: string;
  owner: string;
  creator: string;
  load: number;
  capacity: number;
  connectionCount: number;
  connectionCapacity: number;
}

function createBaseSubstation(): Substation {
  return { id: "", owner: "", creator: "", load: 0, capacity: 0, connectionCount: 0, connectionCapacity: 0 };
}

export const Substation = {
  encode(message: Substation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.load !== 0) {
      writer.uint32(32).uint64(message.load);
    }
    if (message.capacity !== 0) {
      writer.uint32(40).uint64(message.capacity);
    }
    if (message.connectionCount !== 0) {
      writer.uint32(48).uint64(message.connectionCount);
    }
    if (message.connectionCapacity !== 0) {
      writer.uint32(56).uint64(message.connectionCapacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Substation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubstation();
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
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.load = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.capacity = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.connectionCount = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.connectionCapacity = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Substation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      load: isSet(object.load) ? Number(object.load) : 0,
      capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
      connectionCount: isSet(object.connectionCount) ? Number(object.connectionCount) : 0,
      connectionCapacity: isSet(object.connectionCapacity) ? Number(object.connectionCapacity) : 0,
    };
  },

  toJSON(message: Substation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.load !== 0) {
      obj.load = Math.round(message.load);
    }
    if (message.capacity !== 0) {
      obj.capacity = Math.round(message.capacity);
    }
    if (message.connectionCount !== 0) {
      obj.connectionCount = Math.round(message.connectionCount);
    }
    if (message.connectionCapacity !== 0) {
      obj.connectionCapacity = Math.round(message.connectionCapacity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Substation>, I>>(base?: I): Substation {
    return Substation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Substation>, I>>(object: I): Substation {
    const message = createBaseSubstation();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.load = object.load ?? 0;
    message.capacity = object.capacity ?? 0;
    message.connectionCount = object.connectionCount ?? 0;
    message.connectionCapacity = object.connectionCapacity ?? 0;
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
