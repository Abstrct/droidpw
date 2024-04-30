/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  guildJoinBypassLevel,
  guildJoinBypassLevelFromJSON,
  guildJoinBypassLevelToJSON,
  guildJoinType,
  guildJoinTypeFromJSON,
  guildJoinTypeToJSON,
  registrationStatus,
  registrationStatusFromJSON,
  registrationStatusToJSON,
} from "./keys";

export const protobufPackage = "structs.structs";

export interface Guild {
  id: string;
  index: number;
  endpoint: string;
  creator: string;
  owner: string;
  joinInfusionMinimum: number;
  joinInfusionMinimumBypassByRequest: guildJoinBypassLevel;
  joinInfusionMinimumBypassByInvite: guildJoinBypassLevel;
  primaryReactorId: string;
  entrySubstationId: string;
}

export interface GuildMembershipApplication {
  guildId: string;
  playerId: string;
  /** Invite | Request */
  joinType: guildJoinType;
  registrationStatus: registrationStatus;
  proposer: string;
  substationId: string;
}

function createBaseGuild(): Guild {
  return {
    id: "",
    index: 0,
    endpoint: "",
    creator: "",
    owner: "",
    joinInfusionMinimum: 0,
    joinInfusionMinimumBypassByRequest: 0,
    joinInfusionMinimumBypassByInvite: 0,
    primaryReactorId: "",
    entrySubstationId: "",
  };
}

export const Guild = {
  encode(message: Guild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.joinInfusionMinimum !== 0) {
      writer.uint32(48).uint64(message.joinInfusionMinimum);
    }
    if (message.joinInfusionMinimumBypassByRequest !== 0) {
      writer.uint32(56).int32(message.joinInfusionMinimumBypassByRequest);
    }
    if (message.joinInfusionMinimumBypassByInvite !== 0) {
      writer.uint32(64).int32(message.joinInfusionMinimumBypassByInvite);
    }
    if (message.primaryReactorId !== "") {
      writer.uint32(74).string(message.primaryReactorId);
    }
    if (message.entrySubstationId !== "") {
      writer.uint32(82).string(message.entrySubstationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Guild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuild();
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

          message.endpoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.joinInfusionMinimum = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.joinInfusionMinimumBypassByRequest = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.joinInfusionMinimumBypassByInvite = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.primaryReactorId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.entrySubstationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Guild {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      joinInfusionMinimum: isSet(object.joinInfusionMinimum) ? Number(object.joinInfusionMinimum) : 0,
      joinInfusionMinimumBypassByRequest: isSet(object.joinInfusionMinimumBypassByRequest)
        ? guildJoinBypassLevelFromJSON(object.joinInfusionMinimumBypassByRequest)
        : 0,
      joinInfusionMinimumBypassByInvite: isSet(object.joinInfusionMinimumBypassByInvite)
        ? guildJoinBypassLevelFromJSON(object.joinInfusionMinimumBypassByInvite)
        : 0,
      primaryReactorId: isSet(object.primaryReactorId) ? String(object.primaryReactorId) : "",
      entrySubstationId: isSet(object.entrySubstationId) ? String(object.entrySubstationId) : "",
    };
  },

  toJSON(message: Guild): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.joinInfusionMinimum !== 0) {
      obj.joinInfusionMinimum = Math.round(message.joinInfusionMinimum);
    }
    if (message.joinInfusionMinimumBypassByRequest !== 0) {
      obj.joinInfusionMinimumBypassByRequest = guildJoinBypassLevelToJSON(message.joinInfusionMinimumBypassByRequest);
    }
    if (message.joinInfusionMinimumBypassByInvite !== 0) {
      obj.joinInfusionMinimumBypassByInvite = guildJoinBypassLevelToJSON(message.joinInfusionMinimumBypassByInvite);
    }
    if (message.primaryReactorId !== "") {
      obj.primaryReactorId = message.primaryReactorId;
    }
    if (message.entrySubstationId !== "") {
      obj.entrySubstationId = message.entrySubstationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Guild>, I>>(base?: I): Guild {
    return Guild.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Guild>, I>>(object: I): Guild {
    const message = createBaseGuild();
    message.id = object.id ?? "";
    message.index = object.index ?? 0;
    message.endpoint = object.endpoint ?? "";
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.joinInfusionMinimum = object.joinInfusionMinimum ?? 0;
    message.joinInfusionMinimumBypassByRequest = object.joinInfusionMinimumBypassByRequest ?? 0;
    message.joinInfusionMinimumBypassByInvite = object.joinInfusionMinimumBypassByInvite ?? 0;
    message.primaryReactorId = object.primaryReactorId ?? "";
    message.entrySubstationId = object.entrySubstationId ?? "";
    return message;
  },
};

function createBaseGuildMembershipApplication(): GuildMembershipApplication {
  return { guildId: "", playerId: "", joinType: 0, registrationStatus: 0, proposer: "", substationId: "" };
}

export const GuildMembershipApplication = {
  encode(message: GuildMembershipApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== "") {
      writer.uint32(10).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(18).string(message.playerId);
    }
    if (message.joinType !== 0) {
      writer.uint32(24).int32(message.joinType);
    }
    if (message.registrationStatus !== 0) {
      writer.uint32(32).int32(message.registrationStatus);
    }
    if (message.proposer !== "") {
      writer.uint32(42).string(message.proposer);
    }
    if (message.substationId !== "") {
      writer.uint32(50).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildMembershipApplication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuildMembershipApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.joinType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.registrationStatus = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proposer = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.substationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuildMembershipApplication {
    return {
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      joinType: isSet(object.joinType) ? guildJoinTypeFromJSON(object.joinType) : 0,
      registrationStatus: isSet(object.registrationStatus) ? registrationStatusFromJSON(object.registrationStatus) : 0,
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
    };
  },

  toJSON(message: GuildMembershipApplication): unknown {
    const obj: any = {};
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.joinType !== 0) {
      obj.joinType = guildJoinTypeToJSON(message.joinType);
    }
    if (message.registrationStatus !== 0) {
      obj.registrationStatus = registrationStatusToJSON(message.registrationStatus);
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GuildMembershipApplication>, I>>(base?: I): GuildMembershipApplication {
    return GuildMembershipApplication.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GuildMembershipApplication>, I>>(object: I): GuildMembershipApplication {
    const message = createBaseGuildMembershipApplication();
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.joinType = object.joinType ?? 0;
    message.registrationStatus = object.registrationStatus ?? 0;
    message.proposer = object.proposer ?? "";
    message.substationId = object.substationId ?? "";
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
