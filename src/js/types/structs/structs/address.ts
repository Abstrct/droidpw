/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { registrationStatus, registrationStatusFromJSON, registrationStatusToJSON } from "./keys";

export const protobufPackage = "structs.structs";

export interface AddressRecord {
  address: string;
  playerIndex: number;
}

export interface AddressAssociation {
  address: string;
  playerIndex: number;
  registrationStatus: registrationStatus;
}

function createBaseAddressRecord(): AddressRecord {
  return { address: "", playerIndex: 0 };
}

export const AddressRecord = {
  encode(message: AddressRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.playerIndex !== 0) {
      writer.uint32(16).uint64(message.playerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playerIndex = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      playerIndex: isSet(object.playerIndex) ? Number(object.playerIndex) : 0,
    };
  },

  toJSON(message: AddressRecord): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.playerIndex !== 0) {
      obj.playerIndex = Math.round(message.playerIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddressRecord>, I>>(base?: I): AddressRecord {
    return AddressRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddressRecord>, I>>(object: I): AddressRecord {
    const message = createBaseAddressRecord();
    message.address = object.address ?? "";
    message.playerIndex = object.playerIndex ?? 0;
    return message;
  },
};

function createBaseAddressAssociation(): AddressAssociation {
  return { address: "", playerIndex: 0, registrationStatus: 0 };
}

export const AddressAssociation = {
  encode(message: AddressAssociation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.playerIndex !== 0) {
      writer.uint32(16).uint64(message.playerIndex);
    }
    if (message.registrationStatus !== 0) {
      writer.uint32(24).int32(message.registrationStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressAssociation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playerIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.registrationStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressAssociation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      playerIndex: isSet(object.playerIndex) ? Number(object.playerIndex) : 0,
      registrationStatus: isSet(object.registrationStatus) ? registrationStatusFromJSON(object.registrationStatus) : 0,
    };
  },

  toJSON(message: AddressAssociation): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.playerIndex !== 0) {
      obj.playerIndex = Math.round(message.playerIndex);
    }
    if (message.registrationStatus !== 0) {
      obj.registrationStatus = registrationStatusToJSON(message.registrationStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddressAssociation>, I>>(base?: I): AddressAssociation {
    return AddressAssociation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddressAssociation>, I>>(object: I): AddressAssociation {
    const message = createBaseAddressAssociation();
    message.address = object.address ?? "";
    message.playerIndex = object.playerIndex ?? 0;
    message.registrationStatus = object.registrationStatus ?? 0;
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
