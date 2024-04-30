/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "structs.structs";

export interface Planet {
  id: string;
  maxOre: number;
  OreRemaining: number;
  OreStored: number;
  creator: string;
  owner: string;
  space: string[];
  sky: string[];
  land: string[];
  water: string[];
  spaceSlots: number;
  skySlots: number;
  landSlots: number;
  waterSlots: number;
  status: number;
}

function createBasePlanet(): Planet {
  return {
    id: "",
    maxOre: 0,
    OreRemaining: 0,
    OreStored: 0,
    creator: "",
    owner: "",
    space: [],
    sky: [],
    land: [],
    water: [],
    spaceSlots: 0,
    skySlots: 0,
    landSlots: 0,
    waterSlots: 0,
    status: 0,
  };
}

export const Planet = {
  encode(message: Planet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.maxOre !== 0) {
      writer.uint32(16).uint64(message.maxOre);
    }
    if (message.OreRemaining !== 0) {
      writer.uint32(24).uint64(message.OreRemaining);
    }
    if (message.OreStored !== 0) {
      writer.uint32(32).uint64(message.OreStored);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    for (const v of message.space) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.sky) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.land) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.water) {
      writer.uint32(82).string(v!);
    }
    if (message.spaceSlots !== 0) {
      writer.uint32(88).uint64(message.spaceSlots);
    }
    if (message.skySlots !== 0) {
      writer.uint32(96).uint64(message.skySlots);
    }
    if (message.landSlots !== 0) {
      writer.uint32(104).uint64(message.landSlots);
    }
    if (message.waterSlots !== 0) {
      writer.uint32(112).uint64(message.waterSlots);
    }
    if (message.status !== 0) {
      writer.uint32(120).uint64(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Planet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanet();
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

          message.maxOre = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.OreRemaining = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.OreStored = longToNumber(reader.uint64() as Long);
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

          message.owner = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.space.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sky.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.land.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.water.push(reader.string());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.spaceSlots = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.skySlots = longToNumber(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.landSlots = longToNumber(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.waterSlots = longToNumber(reader.uint64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.status = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Planet {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      maxOre: isSet(object.maxOre) ? Number(object.maxOre) : 0,
      OreRemaining: isSet(object.OreRemaining) ? Number(object.OreRemaining) : 0,
      OreStored: isSet(object.OreStored) ? Number(object.OreStored) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      space: Array.isArray(object?.space) ? object.space.map((e: any) => String(e)) : [],
      sky: Array.isArray(object?.sky) ? object.sky.map((e: any) => String(e)) : [],
      land: Array.isArray(object?.land) ? object.land.map((e: any) => String(e)) : [],
      water: Array.isArray(object?.water) ? object.water.map((e: any) => String(e)) : [],
      spaceSlots: isSet(object.spaceSlots) ? Number(object.spaceSlots) : 0,
      skySlots: isSet(object.skySlots) ? Number(object.skySlots) : 0,
      landSlots: isSet(object.landSlots) ? Number(object.landSlots) : 0,
      waterSlots: isSet(object.waterSlots) ? Number(object.waterSlots) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: Planet): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.maxOre !== 0) {
      obj.maxOre = Math.round(message.maxOre);
    }
    if (message.OreRemaining !== 0) {
      obj.OreRemaining = Math.round(message.OreRemaining);
    }
    if (message.OreStored !== 0) {
      obj.OreStored = Math.round(message.OreStored);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.space?.length) {
      obj.space = message.space;
    }
    if (message.sky?.length) {
      obj.sky = message.sky;
    }
    if (message.land?.length) {
      obj.land = message.land;
    }
    if (message.water?.length) {
      obj.water = message.water;
    }
    if (message.spaceSlots !== 0) {
      obj.spaceSlots = Math.round(message.spaceSlots);
    }
    if (message.skySlots !== 0) {
      obj.skySlots = Math.round(message.skySlots);
    }
    if (message.landSlots !== 0) {
      obj.landSlots = Math.round(message.landSlots);
    }
    if (message.waterSlots !== 0) {
      obj.waterSlots = Math.round(message.waterSlots);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Planet>, I>>(base?: I): Planet {
    return Planet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Planet>, I>>(object: I): Planet {
    const message = createBasePlanet();
    message.id = object.id ?? "";
    message.maxOre = object.maxOre ?? 0;
    message.OreRemaining = object.OreRemaining ?? 0;
    message.OreStored = object.OreStored ?? 0;
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.space = object.space?.map((e) => e) || [];
    message.sky = object.sky?.map((e) => e) || [];
    message.land = object.land?.map((e) => e) || [];
    message.water = object.water?.map((e) => e) || [];
    message.spaceSlots = object.spaceSlots ?? 0;
    message.skySlots = object.skySlots ?? 0;
    message.landSlots = object.landSlots ?? 0;
    message.waterSlots = object.waterSlots ?? 0;
    message.status = object.status ?? 0;
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
