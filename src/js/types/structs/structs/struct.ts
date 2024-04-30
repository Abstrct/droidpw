/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "structs.structs";

/**
 * This will all need to be reworked but let's
 * do some super basic crap here to get testnet up
 */
export interface Struct {
  id: string;
  creator: string;
  owner: string;
  status: string;
  maxHealth: number;
  health: number;
  /** Planet or Fleet */
  category: string;
  /** What it is */
  type: string;
  /** Where it is */
  ambit: string;
  /** No fleet stuff yet */
  planetId: string;
  slot: number;
  /** Struct Features */
  miningSystem: number;
  refiningSystem: number;
  powerSystem: number;
  buildStartBlock: number;
  passiveDraw: number;
  activeMiningSystemDraw: number;
  activeMiningSystemBlock: number;
  activeRefiningSystemDraw: number;
  activeRefiningSystemBlock: number;
  miningSystemStatus: string;
  refiningSystemStatus: string;
  powerSystemFuel: number;
  powerSystemCapacity: number;
  powerSystemLoad: number;
}

function createBaseStruct(): Struct {
  return {
    id: "",
    creator: "",
    owner: "",
    status: "",
    maxHealth: 0,
    health: 0,
    category: "",
    type: "",
    ambit: "",
    planetId: "",
    slot: 0,
    miningSystem: 0,
    refiningSystem: 0,
    powerSystem: 0,
    buildStartBlock: 0,
    passiveDraw: 0,
    activeMiningSystemDraw: 0,
    activeMiningSystemBlock: 0,
    activeRefiningSystemDraw: 0,
    activeRefiningSystemBlock: 0,
    miningSystemStatus: "",
    refiningSystemStatus: "",
    powerSystemFuel: 0,
    powerSystemCapacity: 0,
    powerSystemLoad: 0,
  };
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.maxHealth !== 0) {
      writer.uint32(40).uint64(message.maxHealth);
    }
    if (message.health !== 0) {
      writer.uint32(48).uint64(message.health);
    }
    if (message.category !== "") {
      writer.uint32(58).string(message.category);
    }
    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    if (message.ambit !== "") {
      writer.uint32(74).string(message.ambit);
    }
    if (message.planetId !== "") {
      writer.uint32(82).string(message.planetId);
    }
    if (message.slot !== 0) {
      writer.uint32(88).uint64(message.slot);
    }
    if (message.miningSystem !== 0) {
      writer.uint32(96).uint64(message.miningSystem);
    }
    if (message.refiningSystem !== 0) {
      writer.uint32(104).uint64(message.refiningSystem);
    }
    if (message.powerSystem !== 0) {
      writer.uint32(112).uint64(message.powerSystem);
    }
    if (message.buildStartBlock !== 0) {
      writer.uint32(120).uint64(message.buildStartBlock);
    }
    if (message.passiveDraw !== 0) {
      writer.uint32(128).uint64(message.passiveDraw);
    }
    if (message.activeMiningSystemDraw !== 0) {
      writer.uint32(136).uint64(message.activeMiningSystemDraw);
    }
    if (message.activeMiningSystemBlock !== 0) {
      writer.uint32(144).uint64(message.activeMiningSystemBlock);
    }
    if (message.activeRefiningSystemDraw !== 0) {
      writer.uint32(152).uint64(message.activeRefiningSystemDraw);
    }
    if (message.activeRefiningSystemBlock !== 0) {
      writer.uint32(160).uint64(message.activeRefiningSystemBlock);
    }
    if (message.miningSystemStatus !== "") {
      writer.uint32(170).string(message.miningSystemStatus);
    }
    if (message.refiningSystemStatus !== "") {
      writer.uint32(178).string(message.refiningSystemStatus);
    }
    if (message.powerSystemFuel !== 0) {
      writer.uint32(184).uint64(message.powerSystemFuel);
    }
    if (message.powerSystemCapacity !== 0) {
      writer.uint32(192).uint64(message.powerSystemCapacity);
    }
    if (message.powerSystemLoad !== 0) {
      writer.uint32(200).uint64(message.powerSystemLoad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
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

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.status = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxHealth = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.health = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.category = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.type = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ambit = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.planetId = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.slot = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.miningSystem = longToNumber(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.refiningSystem = longToNumber(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.powerSystem = longToNumber(reader.uint64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.buildStartBlock = longToNumber(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.passiveDraw = longToNumber(reader.uint64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.activeMiningSystemDraw = longToNumber(reader.uint64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.activeMiningSystemBlock = longToNumber(reader.uint64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.activeRefiningSystemDraw = longToNumber(reader.uint64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.activeRefiningSystemBlock = longToNumber(reader.uint64() as Long);
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.miningSystemStatus = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.refiningSystemStatus = reader.string();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.powerSystemFuel = longToNumber(reader.uint64() as Long);
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.powerSystemCapacity = longToNumber(reader.uint64() as Long);
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.powerSystemLoad = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Struct {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      status: isSet(object.status) ? String(object.status) : "",
      maxHealth: isSet(object.maxHealth) ? Number(object.maxHealth) : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      type: isSet(object.type) ? String(object.type) : "",
      ambit: isSet(object.ambit) ? String(object.ambit) : "",
      planetId: isSet(object.planetId) ? String(object.planetId) : "",
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      miningSystem: isSet(object.miningSystem) ? Number(object.miningSystem) : 0,
      refiningSystem: isSet(object.refiningSystem) ? Number(object.refiningSystem) : 0,
      powerSystem: isSet(object.powerSystem) ? Number(object.powerSystem) : 0,
      buildStartBlock: isSet(object.buildStartBlock) ? Number(object.buildStartBlock) : 0,
      passiveDraw: isSet(object.passiveDraw) ? Number(object.passiveDraw) : 0,
      activeMiningSystemDraw: isSet(object.activeMiningSystemDraw) ? Number(object.activeMiningSystemDraw) : 0,
      activeMiningSystemBlock: isSet(object.activeMiningSystemBlock) ? Number(object.activeMiningSystemBlock) : 0,
      activeRefiningSystemDraw: isSet(object.activeRefiningSystemDraw) ? Number(object.activeRefiningSystemDraw) : 0,
      activeRefiningSystemBlock: isSet(object.activeRefiningSystemBlock) ? Number(object.activeRefiningSystemBlock) : 0,
      miningSystemStatus: isSet(object.miningSystemStatus) ? String(object.miningSystemStatus) : "",
      refiningSystemStatus: isSet(object.refiningSystemStatus) ? String(object.refiningSystemStatus) : "",
      powerSystemFuel: isSet(object.powerSystemFuel) ? Number(object.powerSystemFuel) : 0,
      powerSystemCapacity: isSet(object.powerSystemCapacity) ? Number(object.powerSystemCapacity) : 0,
      powerSystemLoad: isSet(object.powerSystemLoad) ? Number(object.powerSystemLoad) : 0,
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.maxHealth !== 0) {
      obj.maxHealth = Math.round(message.maxHealth);
    }
    if (message.health !== 0) {
      obj.health = Math.round(message.health);
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.ambit !== "") {
      obj.ambit = message.ambit;
    }
    if (message.planetId !== "") {
      obj.planetId = message.planetId;
    }
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.miningSystem !== 0) {
      obj.miningSystem = Math.round(message.miningSystem);
    }
    if (message.refiningSystem !== 0) {
      obj.refiningSystem = Math.round(message.refiningSystem);
    }
    if (message.powerSystem !== 0) {
      obj.powerSystem = Math.round(message.powerSystem);
    }
    if (message.buildStartBlock !== 0) {
      obj.buildStartBlock = Math.round(message.buildStartBlock);
    }
    if (message.passiveDraw !== 0) {
      obj.passiveDraw = Math.round(message.passiveDraw);
    }
    if (message.activeMiningSystemDraw !== 0) {
      obj.activeMiningSystemDraw = Math.round(message.activeMiningSystemDraw);
    }
    if (message.activeMiningSystemBlock !== 0) {
      obj.activeMiningSystemBlock = Math.round(message.activeMiningSystemBlock);
    }
    if (message.activeRefiningSystemDraw !== 0) {
      obj.activeRefiningSystemDraw = Math.round(message.activeRefiningSystemDraw);
    }
    if (message.activeRefiningSystemBlock !== 0) {
      obj.activeRefiningSystemBlock = Math.round(message.activeRefiningSystemBlock);
    }
    if (message.miningSystemStatus !== "") {
      obj.miningSystemStatus = message.miningSystemStatus;
    }
    if (message.refiningSystemStatus !== "") {
      obj.refiningSystemStatus = message.refiningSystemStatus;
    }
    if (message.powerSystemFuel !== 0) {
      obj.powerSystemFuel = Math.round(message.powerSystemFuel);
    }
    if (message.powerSystemCapacity !== 0) {
      obj.powerSystemCapacity = Math.round(message.powerSystemCapacity);
    }
    if (message.powerSystemLoad !== 0) {
      obj.powerSystemLoad = Math.round(message.powerSystemLoad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Struct>, I>>(base?: I): Struct {
    return Struct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Struct>, I>>(object: I): Struct {
    const message = createBaseStruct();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.status = object.status ?? "";
    message.maxHealth = object.maxHealth ?? 0;
    message.health = object.health ?? 0;
    message.category = object.category ?? "";
    message.type = object.type ?? "";
    message.ambit = object.ambit ?? "";
    message.planetId = object.planetId ?? "";
    message.slot = object.slot ?? 0;
    message.miningSystem = object.miningSystem ?? 0;
    message.refiningSystem = object.refiningSystem ?? 0;
    message.powerSystem = object.powerSystem ?? 0;
    message.buildStartBlock = object.buildStartBlock ?? 0;
    message.passiveDraw = object.passiveDraw ?? 0;
    message.activeMiningSystemDraw = object.activeMiningSystemDraw ?? 0;
    message.activeMiningSystemBlock = object.activeMiningSystemBlock ?? 0;
    message.activeRefiningSystemDraw = object.activeRefiningSystemDraw ?? 0;
    message.activeRefiningSystemBlock = object.activeRefiningSystemBlock ?? 0;
    message.miningSystemStatus = object.miningSystemStatus ?? "";
    message.refiningSystemStatus = object.refiningSystemStatus ?? "";
    message.powerSystemFuel = object.powerSystemFuel ?? 0;
    message.powerSystemCapacity = object.powerSystemCapacity ?? 0;
    message.powerSystemLoad = object.powerSystemLoad ?? 0;
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
