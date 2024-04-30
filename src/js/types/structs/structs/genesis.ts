/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AddressRecord } from "./address";
import { Allocation } from "./allocation";
import { GridRecord } from "./grid";
import { Guild } from "./guild";
import { Infusion } from "./infusion";
import { Params } from "./params";
import { PermissionRecord } from "./permission";
import { Planet } from "./planet";
import { Player } from "./player";
import { Reactor } from "./reactor";
import { Struct } from "./struct";
import { Substation } from "./substation";

export const protobufPackage = "structs.structs";

/** GenesisState defines the structs module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  portId: string;
  allocationList: Allocation[];
  infusionList: Infusion[];
  guildList: Guild[];
  guildCount: number;
  planetList: Planet[];
  planetCount: number;
  playerList: Player[];
  playerCount: number;
  reactorList: Reactor[];
  reactorCount: number;
  structList: Struct[];
  structCount: number;
  substationList: Substation[];
  substationCount: number;
  permissionList: PermissionRecord[];
  gridList: GridRecord[];
  addressList: AddressRecord[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    allocationList: [],
    infusionList: [],
    guildList: [],
    guildCount: 0,
    planetList: [],
    planetCount: 0,
    playerList: [],
    playerCount: 0,
    reactorList: [],
    reactorCount: 0,
    structList: [],
    structCount: 0,
    substationList: [],
    substationCount: 0,
    permissionList: [],
    gridList: [],
    addressList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.allocationList) {
      Allocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.infusionList) {
      Infusion.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.guildList) {
      Guild.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.guildCount !== 0) {
      writer.uint32(56).uint64(message.guildCount);
    }
    for (const v of message.planetList) {
      Planet.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.planetCount !== 0) {
      writer.uint32(72).uint64(message.planetCount);
    }
    for (const v of message.playerList) {
      Player.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.playerCount !== 0) {
      writer.uint32(88).uint64(message.playerCount);
    }
    for (const v of message.reactorList) {
      Reactor.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.reactorCount !== 0) {
      writer.uint32(104).uint64(message.reactorCount);
    }
    for (const v of message.structList) {
      Struct.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.structCount !== 0) {
      writer.uint32(120).uint64(message.structCount);
    }
    for (const v of message.substationList) {
      Substation.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.substationCount !== 0) {
      writer.uint32(136).uint64(message.substationCount);
    }
    for (const v of message.permissionList) {
      PermissionRecord.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.gridList) {
      GridRecord.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.addressList) {
      AddressRecord.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allocationList.push(Allocation.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.infusionList.push(Infusion.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.guildList.push(Guild.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.guildCount = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.planetList.push(Planet.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.planetCount = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.playerList.push(Player.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.playerCount = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.reactorList.push(Reactor.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.reactorCount = longToNumber(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.structList.push(Struct.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.structCount = longToNumber(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.substationList.push(Substation.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.substationCount = longToNumber(reader.uint64() as Long);
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.permissionList.push(PermissionRecord.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.gridList.push(GridRecord.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.addressList.push(AddressRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      allocationList: Array.isArray(object?.allocationList)
        ? object.allocationList.map((e: any) => Allocation.fromJSON(e))
        : [],
      infusionList: Array.isArray(object?.infusionList)
        ? object.infusionList.map((e: any) => Infusion.fromJSON(e))
        : [],
      guildList: Array.isArray(object?.guildList) ? object.guildList.map((e: any) => Guild.fromJSON(e)) : [],
      guildCount: isSet(object.guildCount) ? Number(object.guildCount) : 0,
      planetList: Array.isArray(object?.planetList) ? object.planetList.map((e: any) => Planet.fromJSON(e)) : [],
      planetCount: isSet(object.planetCount) ? Number(object.planetCount) : 0,
      playerList: Array.isArray(object?.playerList) ? object.playerList.map((e: any) => Player.fromJSON(e)) : [],
      playerCount: isSet(object.playerCount) ? Number(object.playerCount) : 0,
      reactorList: Array.isArray(object?.reactorList) ? object.reactorList.map((e: any) => Reactor.fromJSON(e)) : [],
      reactorCount: isSet(object.reactorCount) ? Number(object.reactorCount) : 0,
      structList: Array.isArray(object?.structList) ? object.structList.map((e: any) => Struct.fromJSON(e)) : [],
      structCount: isSet(object.structCount) ? Number(object.structCount) : 0,
      substationList: Array.isArray(object?.substationList)
        ? object.substationList.map((e: any) => Substation.fromJSON(e))
        : [],
      substationCount: isSet(object.substationCount) ? Number(object.substationCount) : 0,
      permissionList: Array.isArray(object?.permissionList)
        ? object.permissionList.map((e: any) => PermissionRecord.fromJSON(e))
        : [],
      gridList: Array.isArray(object?.gridList) ? object.gridList.map((e: any) => GridRecord.fromJSON(e)) : [],
      addressList: Array.isArray(object?.addressList)
        ? object.addressList.map((e: any) => AddressRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.allocationList?.length) {
      obj.allocationList = message.allocationList.map((e) => Allocation.toJSON(e));
    }
    if (message.infusionList?.length) {
      obj.infusionList = message.infusionList.map((e) => Infusion.toJSON(e));
    }
    if (message.guildList?.length) {
      obj.guildList = message.guildList.map((e) => Guild.toJSON(e));
    }
    if (message.guildCount !== 0) {
      obj.guildCount = Math.round(message.guildCount);
    }
    if (message.planetList?.length) {
      obj.planetList = message.planetList.map((e) => Planet.toJSON(e));
    }
    if (message.planetCount !== 0) {
      obj.planetCount = Math.round(message.planetCount);
    }
    if (message.playerList?.length) {
      obj.playerList = message.playerList.map((e) => Player.toJSON(e));
    }
    if (message.playerCount !== 0) {
      obj.playerCount = Math.round(message.playerCount);
    }
    if (message.reactorList?.length) {
      obj.reactorList = message.reactorList.map((e) => Reactor.toJSON(e));
    }
    if (message.reactorCount !== 0) {
      obj.reactorCount = Math.round(message.reactorCount);
    }
    if (message.structList?.length) {
      obj.structList = message.structList.map((e) => Struct.toJSON(e));
    }
    if (message.structCount !== 0) {
      obj.structCount = Math.round(message.structCount);
    }
    if (message.substationList?.length) {
      obj.substationList = message.substationList.map((e) => Substation.toJSON(e));
    }
    if (message.substationCount !== 0) {
      obj.substationCount = Math.round(message.substationCount);
    }
    if (message.permissionList?.length) {
      obj.permissionList = message.permissionList.map((e) => PermissionRecord.toJSON(e));
    }
    if (message.gridList?.length) {
      obj.gridList = message.gridList.map((e) => GridRecord.toJSON(e));
    }
    if (message.addressList?.length) {
      obj.addressList = message.addressList.map((e) => AddressRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.allocationList = object.allocationList?.map((e) => Allocation.fromPartial(e)) || [];
    message.infusionList = object.infusionList?.map((e) => Infusion.fromPartial(e)) || [];
    message.guildList = object.guildList?.map((e) => Guild.fromPartial(e)) || [];
    message.guildCount = object.guildCount ?? 0;
    message.planetList = object.planetList?.map((e) => Planet.fromPartial(e)) || [];
    message.planetCount = object.planetCount ?? 0;
    message.playerList = object.playerList?.map((e) => Player.fromPartial(e)) || [];
    message.playerCount = object.playerCount ?? 0;
    message.reactorList = object.reactorList?.map((e) => Reactor.fromPartial(e)) || [];
    message.reactorCount = object.reactorCount ?? 0;
    message.structList = object.structList?.map((e) => Struct.fromPartial(e)) || [];
    message.structCount = object.structCount ?? 0;
    message.substationList = object.substationList?.map((e) => Substation.fromPartial(e)) || [];
    message.substationCount = object.substationCount ?? 0;
    message.permissionList = object.permissionList?.map((e) => PermissionRecord.fromPartial(e)) || [];
    message.gridList = object.gridList?.map((e) => GridRecord.fromPartial(e)) || [];
    message.addressList = object.addressList?.map((e) => AddressRecord.fromPartial(e)) || [];
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
