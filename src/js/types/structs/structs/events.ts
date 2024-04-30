/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AddressAssociation } from "./address";
import { Allocation } from "./allocation";
import { GridRecord } from "./grid";
import { Guild, GuildMembershipApplication } from "./guild";
import { Infusion } from "./infusion";
import { PermissionRecord } from "./permission";
import { Planet } from "./planet";
import { Player } from "./player";
import { Reactor } from "./reactor";
import { Struct } from "./struct";
import { Substation } from "./substation";

export const protobufPackage = "structs.structs";

export interface EventAllocation {
  allocation: Allocation | undefined;
}

export interface EventGuild {
  guild: Guild | undefined;
}

export interface EventInfusion {
  infusion: Infusion | undefined;
}

export interface EventPlanet {
  planet: Planet | undefined;
}

export interface EventPlayer {
  player: Player | undefined;
}

export interface EventReactor {
  reactor: Reactor | undefined;
}

export interface EventStruct {
  structure: Struct | undefined;
}

export interface EventSubstation {
  substation: Substation | undefined;
}

export interface EventPermission {
  permissionRecord: PermissionRecord | undefined;
}

export interface EventGrid {
  gridRecord: GridRecord | undefined;
}

export interface EventDelete {
  objectId: string;
}

export interface EventAddressAssociation {
  addressAssociation: AddressAssociation | undefined;
}

export interface EventGuildMembershipApplication {
  guildMembershipApplication: GuildMembershipApplication | undefined;
}

function createBaseEventAllocation(): EventAllocation {
  return { allocation: undefined };
}

export const EventAllocation = {
  encode(message: EventAllocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocation !== undefined) {
      Allocation.encode(message.allocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAllocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocation = Allocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAllocation {
    return { allocation: isSet(object.allocation) ? Allocation.fromJSON(object.allocation) : undefined };
  },

  toJSON(message: EventAllocation): unknown {
    const obj: any = {};
    if (message.allocation !== undefined) {
      obj.allocation = Allocation.toJSON(message.allocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAllocation>, I>>(base?: I): EventAllocation {
    return EventAllocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventAllocation>, I>>(object: I): EventAllocation {
    const message = createBaseEventAllocation();
    message.allocation = (object.allocation !== undefined && object.allocation !== null)
      ? Allocation.fromPartial(object.allocation)
      : undefined;
    return message;
  },
};

function createBaseEventGuild(): EventGuild {
  return { guild: undefined };
}

export const EventGuild = {
  encode(message: EventGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guild !== undefined) {
      Guild.encode(message.guild, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.guild = Guild.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventGuild {
    return { guild: isSet(object.guild) ? Guild.fromJSON(object.guild) : undefined };
  },

  toJSON(message: EventGuild): unknown {
    const obj: any = {};
    if (message.guild !== undefined) {
      obj.guild = Guild.toJSON(message.guild);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventGuild>, I>>(base?: I): EventGuild {
    return EventGuild.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventGuild>, I>>(object: I): EventGuild {
    const message = createBaseEventGuild();
    message.guild = (object.guild !== undefined && object.guild !== null) ? Guild.fromPartial(object.guild) : undefined;
    return message;
  },
};

function createBaseEventInfusion(): EventInfusion {
  return { infusion: undefined };
}

export const EventInfusion = {
  encode(message: EventInfusion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.infusion !== undefined) {
      Infusion.encode(message.infusion, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInfusion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInfusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infusion = Infusion.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventInfusion {
    return { infusion: isSet(object.infusion) ? Infusion.fromJSON(object.infusion) : undefined };
  },

  toJSON(message: EventInfusion): unknown {
    const obj: any = {};
    if (message.infusion !== undefined) {
      obj.infusion = Infusion.toJSON(message.infusion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventInfusion>, I>>(base?: I): EventInfusion {
    return EventInfusion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventInfusion>, I>>(object: I): EventInfusion {
    const message = createBaseEventInfusion();
    message.infusion = (object.infusion !== undefined && object.infusion !== null)
      ? Infusion.fromPartial(object.infusion)
      : undefined;
    return message;
  },
};

function createBaseEventPlanet(): EventPlanet {
  return { planet: undefined };
}

export const EventPlanet = {
  encode(message: EventPlanet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.planet !== undefined) {
      Planet.encode(message.planet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPlanet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlanet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.planet = Planet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPlanet {
    return { planet: isSet(object.planet) ? Planet.fromJSON(object.planet) : undefined };
  },

  toJSON(message: EventPlanet): unknown {
    const obj: any = {};
    if (message.planet !== undefined) {
      obj.planet = Planet.toJSON(message.planet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPlanet>, I>>(base?: I): EventPlanet {
    return EventPlanet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPlanet>, I>>(object: I): EventPlanet {
    const message = createBaseEventPlanet();
    message.planet = (object.planet !== undefined && object.planet !== null)
      ? Planet.fromPartial(object.planet)
      : undefined;
    return message;
  },
};

function createBaseEventPlayer(): EventPlayer {
  return { player: undefined };
}

export const EventPlayer = {
  encode(message: EventPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.player !== undefined) {
      Player.encode(message.player, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.player = Player.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPlayer {
    return { player: isSet(object.player) ? Player.fromJSON(object.player) : undefined };
  },

  toJSON(message: EventPlayer): unknown {
    const obj: any = {};
    if (message.player !== undefined) {
      obj.player = Player.toJSON(message.player);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPlayer>, I>>(base?: I): EventPlayer {
    return EventPlayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPlayer>, I>>(object: I): EventPlayer {
    const message = createBaseEventPlayer();
    message.player = (object.player !== undefined && object.player !== null)
      ? Player.fromPartial(object.player)
      : undefined;
    return message;
  },
};

function createBaseEventReactor(): EventReactor {
  return { reactor: undefined };
}

export const EventReactor = {
  encode(message: EventReactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reactor !== undefined) {
      Reactor.encode(message.reactor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reactor = Reactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventReactor {
    return { reactor: isSet(object.reactor) ? Reactor.fromJSON(object.reactor) : undefined };
  },

  toJSON(message: EventReactor): unknown {
    const obj: any = {};
    if (message.reactor !== undefined) {
      obj.reactor = Reactor.toJSON(message.reactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventReactor>, I>>(base?: I): EventReactor {
    return EventReactor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventReactor>, I>>(object: I): EventReactor {
    const message = createBaseEventReactor();
    message.reactor = (object.reactor !== undefined && object.reactor !== null)
      ? Reactor.fromPartial(object.reactor)
      : undefined;
    return message;
  },
};

function createBaseEventStruct(): EventStruct {
  return { structure: undefined };
}

export const EventStruct = {
  encode(message: EventStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.structure !== undefined) {
      Struct.encode(message.structure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStruct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.structure = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventStruct {
    return { structure: isSet(object.structure) ? Struct.fromJSON(object.structure) : undefined };
  },

  toJSON(message: EventStruct): unknown {
    const obj: any = {};
    if (message.structure !== undefined) {
      obj.structure = Struct.toJSON(message.structure);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventStruct>, I>>(base?: I): EventStruct {
    return EventStruct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventStruct>, I>>(object: I): EventStruct {
    const message = createBaseEventStruct();
    message.structure = (object.structure !== undefined && object.structure !== null)
      ? Struct.fromPartial(object.structure)
      : undefined;
    return message;
  },
};

function createBaseEventSubstation(): EventSubstation {
  return { substation: undefined };
}

export const EventSubstation = {
  encode(message: EventSubstation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.substation !== undefined) {
      Substation.encode(message.substation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubstation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubstation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.substation = Substation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSubstation {
    return { substation: isSet(object.substation) ? Substation.fromJSON(object.substation) : undefined };
  },

  toJSON(message: EventSubstation): unknown {
    const obj: any = {};
    if (message.substation !== undefined) {
      obj.substation = Substation.toJSON(message.substation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSubstation>, I>>(base?: I): EventSubstation {
    return EventSubstation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventSubstation>, I>>(object: I): EventSubstation {
    const message = createBaseEventSubstation();
    message.substation = (object.substation !== undefined && object.substation !== null)
      ? Substation.fromPartial(object.substation)
      : undefined;
    return message;
  },
};

function createBaseEventPermission(): EventPermission {
  return { permissionRecord: undefined };
}

export const EventPermission = {
  encode(message: EventPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permissionRecord !== undefined) {
      PermissionRecord.encode(message.permissionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPermission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissionRecord = PermissionRecord.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPermission {
    return {
      permissionRecord: isSet(object.permissionRecord) ? PermissionRecord.fromJSON(object.permissionRecord) : undefined,
    };
  },

  toJSON(message: EventPermission): unknown {
    const obj: any = {};
    if (message.permissionRecord !== undefined) {
      obj.permissionRecord = PermissionRecord.toJSON(message.permissionRecord);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPermission>, I>>(base?: I): EventPermission {
    return EventPermission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPermission>, I>>(object: I): EventPermission {
    const message = createBaseEventPermission();
    message.permissionRecord = (object.permissionRecord !== undefined && object.permissionRecord !== null)
      ? PermissionRecord.fromPartial(object.permissionRecord)
      : undefined;
    return message;
  },
};

function createBaseEventGrid(): EventGrid {
  return { gridRecord: undefined };
}

export const EventGrid = {
  encode(message: EventGrid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gridRecord !== undefined) {
      GridRecord.encode(message.gridRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGrid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gridRecord = GridRecord.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventGrid {
    return { gridRecord: isSet(object.gridRecord) ? GridRecord.fromJSON(object.gridRecord) : undefined };
  },

  toJSON(message: EventGrid): unknown {
    const obj: any = {};
    if (message.gridRecord !== undefined) {
      obj.gridRecord = GridRecord.toJSON(message.gridRecord);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventGrid>, I>>(base?: I): EventGrid {
    return EventGrid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventGrid>, I>>(object: I): EventGrid {
    const message = createBaseEventGrid();
    message.gridRecord = (object.gridRecord !== undefined && object.gridRecord !== null)
      ? GridRecord.fromPartial(object.gridRecord)
      : undefined;
    return message;
  },
};

function createBaseEventDelete(): EventDelete {
  return { objectId: "" };
}

export const EventDelete = {
  encode(message: EventDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.objectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventDelete {
    return { objectId: isSet(object.objectId) ? String(object.objectId) : "" };
  },

  toJSON(message: EventDelete): unknown {
    const obj: any = {};
    if (message.objectId !== "") {
      obj.objectId = message.objectId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventDelete>, I>>(base?: I): EventDelete {
    return EventDelete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventDelete>, I>>(object: I): EventDelete {
    const message = createBaseEventDelete();
    message.objectId = object.objectId ?? "";
    return message;
  },
};

function createBaseEventAddressAssociation(): EventAddressAssociation {
  return { addressAssociation: undefined };
}

export const EventAddressAssociation = {
  encode(message: EventAddressAssociation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressAssociation !== undefined) {
      AddressAssociation.encode(message.addressAssociation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddressAssociation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddressAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressAssociation = AddressAssociation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAddressAssociation {
    return {
      addressAssociation: isSet(object.addressAssociation)
        ? AddressAssociation.fromJSON(object.addressAssociation)
        : undefined,
    };
  },

  toJSON(message: EventAddressAssociation): unknown {
    const obj: any = {};
    if (message.addressAssociation !== undefined) {
      obj.addressAssociation = AddressAssociation.toJSON(message.addressAssociation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAddressAssociation>, I>>(base?: I): EventAddressAssociation {
    return EventAddressAssociation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventAddressAssociation>, I>>(object: I): EventAddressAssociation {
    const message = createBaseEventAddressAssociation();
    message.addressAssociation = (object.addressAssociation !== undefined && object.addressAssociation !== null)
      ? AddressAssociation.fromPartial(object.addressAssociation)
      : undefined;
    return message;
  },
};

function createBaseEventGuildMembershipApplication(): EventGuildMembershipApplication {
  return { guildMembershipApplication: undefined };
}

export const EventGuildMembershipApplication = {
  encode(message: EventGuildMembershipApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildMembershipApplication !== undefined) {
      GuildMembershipApplication.encode(message.guildMembershipApplication, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGuildMembershipApplication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGuildMembershipApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.guildMembershipApplication = GuildMembershipApplication.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventGuildMembershipApplication {
    return {
      guildMembershipApplication: isSet(object.guildMembershipApplication)
        ? GuildMembershipApplication.fromJSON(object.guildMembershipApplication)
        : undefined,
    };
  },

  toJSON(message: EventGuildMembershipApplication): unknown {
    const obj: any = {};
    if (message.guildMembershipApplication !== undefined) {
      obj.guildMembershipApplication = GuildMembershipApplication.toJSON(message.guildMembershipApplication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventGuildMembershipApplication>, I>>(base?: I): EventGuildMembershipApplication {
    return EventGuildMembershipApplication.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventGuildMembershipApplication>, I>>(
    object: I,
  ): EventGuildMembershipApplication {
    const message = createBaseEventGuildMembershipApplication();
    message.guildMembershipApplication =
      (object.guildMembershipApplication !== undefined && object.guildMembershipApplication !== null)
        ? GuildMembershipApplication.fromPartial(object.guildMembershipApplication)
        : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
