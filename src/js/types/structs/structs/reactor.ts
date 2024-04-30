/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "structs.structs";

export interface Reactor {
  id: string;
  validator: string;
  fuel: number;
  capacity: number;
  load: number;
  guildId: string;
  defaultCommission: string;
  rawAddress: Uint8Array;
}

function createBaseReactor(): Reactor {
  return {
    id: "",
    validator: "",
    fuel: 0,
    capacity: 0,
    load: 0,
    guildId: "",
    defaultCommission: "",
    rawAddress: new Uint8Array(0),
  };
}

export const Reactor = {
  encode(message: Reactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.fuel !== 0) {
      writer.uint32(24).uint64(message.fuel);
    }
    if (message.capacity !== 0) {
      writer.uint32(32).uint64(message.capacity);
    }
    if (message.load !== 0) {
      writer.uint32(40).uint64(message.load);
    }
    if (message.guildId !== "") {
      writer.uint32(50).string(message.guildId);
    }
    if (message.defaultCommission !== "") {
      writer.uint32(58).string(message.defaultCommission);
    }
    if (message.rawAddress.length !== 0) {
      writer.uint32(66).bytes(message.rawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReactor();
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

          message.validator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fuel = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.capacity = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.load = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultCommission = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.rawAddress = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reactor {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      fuel: isSet(object.fuel) ? Number(object.fuel) : 0,
      capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
      load: isSet(object.load) ? Number(object.load) : 0,
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      defaultCommission: isSet(object.defaultCommission) ? String(object.defaultCommission) : "",
      rawAddress: isSet(object.rawAddress) ? bytesFromBase64(object.rawAddress) : new Uint8Array(0),
    };
  },

  toJSON(message: Reactor): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.validator !== "") {
      obj.validator = message.validator;
    }
    if (message.fuel !== 0) {
      obj.fuel = Math.round(message.fuel);
    }
    if (message.capacity !== 0) {
      obj.capacity = Math.round(message.capacity);
    }
    if (message.load !== 0) {
      obj.load = Math.round(message.load);
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.defaultCommission !== "") {
      obj.defaultCommission = message.defaultCommission;
    }
    if (message.rawAddress.length !== 0) {
      obj.rawAddress = base64FromBytes(message.rawAddress);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Reactor>, I>>(base?: I): Reactor {
    return Reactor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Reactor>, I>>(object: I): Reactor {
    const message = createBaseReactor();
    message.id = object.id ?? "";
    message.validator = object.validator ?? "";
    message.fuel = object.fuel ?? 0;
    message.capacity = object.capacity ?? 0;
    message.load = object.load ?? 0;
    message.guildId = object.guildId ?? "";
    message.defaultCommission = object.defaultCommission ?? "";
    message.rawAddress = object.rawAddress ?? new Uint8Array(0);
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
