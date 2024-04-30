/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GuildMembershipApplication } from "./guild";
import {
  allocationType,
  allocationTypeFromJSON,
  allocationTypeToJSON,
  guildJoinBypassLevel,
  guildJoinBypassLevelFromJSON,
  guildJoinBypassLevelToJSON,
} from "./keys";
import { Params } from "./params";
import { Planet } from "./planet";
import { Struct } from "./struct";

export const protobufPackage = "structs.structs";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the module parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgAddressApproveRegister {
  creator: string;
  approve: boolean;
  address: string;
  permissions: number;
}

export interface MsgAddressRegister {
  creator: string;
  playerId: string;
  address: string;
}

export interface MsgAddressRegisterResponse {
}

export interface MsgAddressRevoke {
  creator: string;
  address: string;
}

export interface MsgAddressRevokeResponse {
}

export interface MsgAllocationCreate {
  creator: string;
  controller: string;
  sourceObjectId: string;
  allocationType: allocationType;
  power: number;
}

export interface MsgAllocationCreateResponse {
  allocationId: string;
}

export interface MsgGuildCreate {
  creator: string;
  endpoint: string;
  entrySubstationId: string;
}

export interface MsgGuildCreateResponse {
  guildId: string;
}

export interface MsgGuildUpdateOwnerId {
  creator: string;
  guildId: string;
  owner: string;
}

export interface MsgGuildUpdateEntrySubstationId {
  creator: string;
  guildId: string;
  entrySubstationId: string;
}

export interface MsgGuildUpdateEndpoint {
  creator: string;
  guildId: string;
  endpoint: string;
}

export interface MsgGuildUpdateJoinInfusionMinimum {
  creator: string;
  guildId: string;
  joinInfusionMinimum: number;
}

export interface MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
  creator: string;
  guildId: string;
  guildJoinBypassLevel: guildJoinBypassLevel;
}

export interface MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
  creator: string;
  guildId: string;
  guildJoinBypassLevel: guildJoinBypassLevel;
}

export interface MsgGuildUpdateResponse {
}

export interface MsgGuildMembershipInvite {
  creator: string;
  guildId: string;
  playerId: string;
  substationId: string;
}

export interface MsgGuildMembershipInviteApprove {
  creator: string;
  guildId: string;
  playerId: string;
  substationId: string;
}

export interface MsgGuildMembershipInviteDeny {
  creator: string;
  guildId: string;
  playerId: string;
}

export interface MsgGuildMembershipInviteRevoke {
  creator: string;
  guildId: string;
  playerId: string;
}

export interface MsgGuildMembershipJoin {
  creator: string;
  guildId: string;
  playerId: string;
  substationId: string;
  infusionId: string[];
}

export interface MsgGuildMembershipJoinProxy {
  creator: string;
  address: string;
  substationId: string;
  proofPubKey: Uint8Array;
  proofSignature: Uint8Array;
}

export interface MsgGuildMembershipKick {
  creator: string;
  guildId: string;
  playerId: string;
}

export interface MsgGuildMembershipRequest {
  creator: string;
  guildId: string;
  playerId: string;
  substationId: string;
}

export interface MsgGuildMembershipRequestApprove {
  creator: string;
  guildId: string;
  playerId: string;
  substationId: string;
}

export interface MsgGuildMembershipRequestDeny {
  creator: string;
  guildId: string;
  playerId: string;
}

export interface MsgGuildMembershipRequestRevoke {
  creator: string;
  guildId: string;
  playerId: string;
}

export interface MsgGuildMembershipResponse {
  guildMembershipApplication: GuildMembershipApplication | undefined;
}

export interface MsgPermissionGrantOnObject {
  creator: string;
  objectId: string;
  playerId: string;
  permissions: number;
}

export interface MsgPermissionGrantOnAddress {
  creator: string;
  address: string;
  permissions: number;
}

export interface MsgPermissionRevokeOnObject {
  creator: string;
  objectId: string;
  playerId: string;
  permissions: number;
}

export interface MsgPermissionRevokeOnAddress {
  creator: string;
  address: string;
  permissions: number;
}

export interface MsgPermissionResponse {
}

export interface MsgPlanetExplore {
  creator: string;
}

export interface MsgPlanetExploreResponse {
  planet: Planet | undefined;
}

export interface MsgPlayerUpdatePrimaryAddress {
  creator: string;
  primaryAddress: string;
}

export interface MsgPlayerUpdatePrimaryAddressResponse {
}

export interface MsgStructActivate {
  creator: string;
  structId: string;
}

export interface MsgStructActivateResponse {
  struct: Struct | undefined;
}

export interface MsgStructBuildInitiate {
  creator: string;
  structType: string;
  planetId: string;
  slot: number;
}

export interface MsgStructBuildInitiateResponse {
  struct: Struct | undefined;
}

export interface MsgStructBuildComplete {
  creator: string;
  structId: string;
  proof: string;
  nonce: string;
}

export interface MsgStructBuildCompleteResponse {
  struct: Struct | undefined;
}

export interface MsgStructInfuse {
  creator: string;
  structId: string;
  infuseAmount: string;
}

export interface MsgStructInfuseResponse {
}

export interface MsgStructMineActivate {
  creator: string;
  structId: string;
}

export interface MsgStructMineActivateResponse {
  struct: Struct | undefined;
}

export interface MsgStructMineDeactivate {
  creator: string;
  structId: string;
}

export interface MsgStructMineDeactivateResponse {
  struct: Struct | undefined;
}

export interface MsgStructMine {
  creator: string;
  structId: string;
  proof: string;
  nonce: string;
}

export interface MsgStructMineResponse {
  struct: Struct | undefined;
}

export interface MsgStructRefineActivate {
  creator: string;
  structId: string;
}

export interface MsgStructRefineActivateResponse {
  struct: Struct | undefined;
}

export interface MsgStructRefineDeactivate {
  creator: string;
  structId: string;
}

export interface MsgStructRefineDeactivateResponse {
  struct: Struct | undefined;
}

export interface MsgStructRefine {
  creator: string;
  structId: string;
  proof: string;
  nonce: string;
}

export interface MsgStructRefineResponse {
  struct: Struct | undefined;
}

export interface MsgSubstationCreate {
  creator: string;
  owner: string;
  allocationId: string;
}

export interface MsgSubstationCreateResponse {
  substationId: string;
}

export interface MsgSubstationDelete {
  creator: string;
  substationId: string;
  migrationSubstationId: string;
}

export interface MsgSubstationDeleteResponse {
}

export interface MsgSubstationAllocationConnect {
  creator: string;
  allocationId: string;
  destinationId: string;
}

export interface MsgSubstationAllocationConnectResponse {
}

export interface MsgSubstationAllocationDisconnect {
  creator: string;
  allocationId: string;
}

export interface MsgSubstationAllocationDisconnectResponse {
}

export interface MsgSubstationPlayerConnect {
  creator: string;
  substationId: string;
  playerId: string;
}

export interface MsgSubstationPlayerConnectResponse {
}

export interface MsgSubstationPlayerDisconnect {
  creator: string;
  playerId: string;
}

export interface MsgSubstationPlayerDisconnectResponse {
}

export interface MsgSubstationPlayerMigrate {
  creator: string;
  substationId: string;
  playerId: string[];
}

export interface MsgSubstationPlayerMigrateResponse {
}

export interface MsgSabotage {
  creator: string;
  structId: string;
  proof: string;
  nonce: string;
}

export interface MsgSabotageResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgAddressApproveRegister(): MsgAddressApproveRegister {
  return { creator: "", approve: false, address: "", permissions: 0 };
}

export const MsgAddressApproveRegister = {
  encode(message: MsgAddressApproveRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.approve === true) {
      writer.uint32(16).bool(message.approve);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.permissions !== 0) {
      writer.uint32(32).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddressApproveRegister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddressApproveRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.approve = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.permissions = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddressApproveRegister {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      approve: isSet(object.approve) ? Boolean(object.approve) : false,
      address: isSet(object.address) ? String(object.address) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: MsgAddressApproveRegister): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.approve === true) {
      obj.approve = message.approve;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddressApproveRegister>, I>>(base?: I): MsgAddressApproveRegister {
    return MsgAddressApproveRegister.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddressApproveRegister>, I>>(object: I): MsgAddressApproveRegister {
    const message = createBaseMsgAddressApproveRegister();
    message.creator = object.creator ?? "";
    message.approve = object.approve ?? false;
    message.address = object.address ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseMsgAddressRegister(): MsgAddressRegister {
  return { creator: "", playerId: "", address: "" };
}

export const MsgAddressRegister = {
  encode(message: MsgAddressRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.playerId !== "") {
      writer.uint32(18).string(message.playerId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddressRegister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddressRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddressRegister {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgAddressRegister): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddressRegister>, I>>(base?: I): MsgAddressRegister {
    return MsgAddressRegister.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddressRegister>, I>>(object: I): MsgAddressRegister {
    const message = createBaseMsgAddressRegister();
    message.creator = object.creator ?? "";
    message.playerId = object.playerId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgAddressRegisterResponse(): MsgAddressRegisterResponse {
  return {};
}

export const MsgAddressRegisterResponse = {
  encode(_: MsgAddressRegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddressRegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddressRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddressRegisterResponse {
    return {};
  },

  toJSON(_: MsgAddressRegisterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddressRegisterResponse>, I>>(base?: I): MsgAddressRegisterResponse {
    return MsgAddressRegisterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddressRegisterResponse>, I>>(_: I): MsgAddressRegisterResponse {
    const message = createBaseMsgAddressRegisterResponse();
    return message;
  },
};

function createBaseMsgAddressRevoke(): MsgAddressRevoke {
  return { creator: "", address: "" };
}

export const MsgAddressRevoke = {
  encode(message: MsgAddressRevoke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddressRevoke {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddressRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddressRevoke {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgAddressRevoke): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddressRevoke>, I>>(base?: I): MsgAddressRevoke {
    return MsgAddressRevoke.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddressRevoke>, I>>(object: I): MsgAddressRevoke {
    const message = createBaseMsgAddressRevoke();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgAddressRevokeResponse(): MsgAddressRevokeResponse {
  return {};
}

export const MsgAddressRevokeResponse = {
  encode(_: MsgAddressRevokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddressRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddressRevokeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddressRevokeResponse {
    return {};
  },

  toJSON(_: MsgAddressRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddressRevokeResponse>, I>>(base?: I): MsgAddressRevokeResponse {
    return MsgAddressRevokeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddressRevokeResponse>, I>>(_: I): MsgAddressRevokeResponse {
    const message = createBaseMsgAddressRevokeResponse();
    return message;
  },
};

function createBaseMsgAllocationCreate(): MsgAllocationCreate {
  return { creator: "", controller: "", sourceObjectId: "", allocationType: 0, power: 0 };
}

export const MsgAllocationCreate = {
  encode(message: MsgAllocationCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    if (message.sourceObjectId !== "") {
      writer.uint32(26).string(message.sourceObjectId);
    }
    if (message.allocationType !== 0) {
      writer.uint32(32).int32(message.allocationType);
    }
    if (message.power !== 0) {
      writer.uint32(40).uint64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAllocationCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocationCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.controller = reader.string();
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

          message.allocationType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.power = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAllocationCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      sourceObjectId: isSet(object.sourceObjectId) ? String(object.sourceObjectId) : "",
      allocationType: isSet(object.allocationType) ? allocationTypeFromJSON(object.allocationType) : 0,
      power: isSet(object.power) ? Number(object.power) : 0,
    };
  },

  toJSON(message: MsgAllocationCreate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.sourceObjectId !== "") {
      obj.sourceObjectId = message.sourceObjectId;
    }
    if (message.allocationType !== 0) {
      obj.allocationType = allocationTypeToJSON(message.allocationType);
    }
    if (message.power !== 0) {
      obj.power = Math.round(message.power);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAllocationCreate>, I>>(base?: I): MsgAllocationCreate {
    return MsgAllocationCreate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAllocationCreate>, I>>(object: I): MsgAllocationCreate {
    const message = createBaseMsgAllocationCreate();
    message.creator = object.creator ?? "";
    message.controller = object.controller ?? "";
    message.sourceObjectId = object.sourceObjectId ?? "";
    message.allocationType = object.allocationType ?? 0;
    message.power = object.power ?? 0;
    return message;
  },
};

function createBaseMsgAllocationCreateResponse(): MsgAllocationCreateResponse {
  return { allocationId: "" };
}

export const MsgAllocationCreateResponse = {
  encode(message: MsgAllocationCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocationId !== "") {
      writer.uint32(10).string(message.allocationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAllocationCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocationCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAllocationCreateResponse {
    return { allocationId: isSet(object.allocationId) ? String(object.allocationId) : "" };
  },

  toJSON(message: MsgAllocationCreateResponse): unknown {
    const obj: any = {};
    if (message.allocationId !== "") {
      obj.allocationId = message.allocationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAllocationCreateResponse>, I>>(base?: I): MsgAllocationCreateResponse {
    return MsgAllocationCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAllocationCreateResponse>, I>>(object: I): MsgAllocationCreateResponse {
    const message = createBaseMsgAllocationCreateResponse();
    message.allocationId = object.allocationId ?? "";
    return message;
  },
};

function createBaseMsgGuildCreate(): MsgGuildCreate {
  return { creator: "", endpoint: "", entrySubstationId: "" };
}

export const MsgGuildCreate = {
  encode(message: MsgGuildCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.endpoint !== "") {
      writer.uint32(18).string(message.endpoint);
    }
    if (message.entrySubstationId !== "") {
      writer.uint32(26).string(message.entrySubstationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgGuildCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      entrySubstationId: isSet(object.entrySubstationId) ? String(object.entrySubstationId) : "",
    };
  },

  toJSON(message: MsgGuildCreate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.entrySubstationId !== "") {
      obj.entrySubstationId = message.entrySubstationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildCreate>, I>>(base?: I): MsgGuildCreate {
    return MsgGuildCreate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildCreate>, I>>(object: I): MsgGuildCreate {
    const message = createBaseMsgGuildCreate();
    message.creator = object.creator ?? "";
    message.endpoint = object.endpoint ?? "";
    message.entrySubstationId = object.entrySubstationId ?? "";
    return message;
  },
};

function createBaseMsgGuildCreateResponse(): MsgGuildCreateResponse {
  return { guildId: "" };
}

export const MsgGuildCreateResponse = {
  encode(message: MsgGuildCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== "") {
      writer.uint32(10).string(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.guildId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildCreateResponse {
    return { guildId: isSet(object.guildId) ? String(object.guildId) : "" };
  },

  toJSON(message: MsgGuildCreateResponse): unknown {
    const obj: any = {};
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildCreateResponse>, I>>(base?: I): MsgGuildCreateResponse {
    return MsgGuildCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildCreateResponse>, I>>(object: I): MsgGuildCreateResponse {
    const message = createBaseMsgGuildCreateResponse();
    message.guildId = object.guildId ?? "";
    return message;
  },
};

function createBaseMsgGuildUpdateOwnerId(): MsgGuildUpdateOwnerId {
  return { creator: "", guildId: "", owner: "" };
}

export const MsgGuildUpdateOwnerId = {
  encode(message: MsgGuildUpdateOwnerId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateOwnerId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateOwnerId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildUpdateOwnerId {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgGuildUpdateOwnerId): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateOwnerId>, I>>(base?: I): MsgGuildUpdateOwnerId {
    return MsgGuildUpdateOwnerId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateOwnerId>, I>>(object: I): MsgGuildUpdateOwnerId {
    const message = createBaseMsgGuildUpdateOwnerId();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgGuildUpdateEntrySubstationId(): MsgGuildUpdateEntrySubstationId {
  return { creator: "", guildId: "", entrySubstationId: "" };
}

export const MsgGuildUpdateEntrySubstationId = {
  encode(message: MsgGuildUpdateEntrySubstationId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.entrySubstationId !== "") {
      writer.uint32(26).string(message.entrySubstationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateEntrySubstationId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateEntrySubstationId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgGuildUpdateEntrySubstationId {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      entrySubstationId: isSet(object.entrySubstationId) ? String(object.entrySubstationId) : "",
    };
  },

  toJSON(message: MsgGuildUpdateEntrySubstationId): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.entrySubstationId !== "") {
      obj.entrySubstationId = message.entrySubstationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateEntrySubstationId>, I>>(base?: I): MsgGuildUpdateEntrySubstationId {
    return MsgGuildUpdateEntrySubstationId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateEntrySubstationId>, I>>(
    object: I,
  ): MsgGuildUpdateEntrySubstationId {
    const message = createBaseMsgGuildUpdateEntrySubstationId();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.entrySubstationId = object.entrySubstationId ?? "";
    return message;
  },
};

function createBaseMsgGuildUpdateEndpoint(): MsgGuildUpdateEndpoint {
  return { creator: "", guildId: "", endpoint: "" };
}

export const MsgGuildUpdateEndpoint = {
  encode(message: MsgGuildUpdateEndpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateEndpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endpoint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildUpdateEndpoint {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
    };
  },

  toJSON(message: MsgGuildUpdateEndpoint): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateEndpoint>, I>>(base?: I): MsgGuildUpdateEndpoint {
    return MsgGuildUpdateEndpoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateEndpoint>, I>>(object: I): MsgGuildUpdateEndpoint {
    const message = createBaseMsgGuildUpdateEndpoint();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  },
};

function createBaseMsgGuildUpdateJoinInfusionMinimum(): MsgGuildUpdateJoinInfusionMinimum {
  return { creator: "", guildId: "", joinInfusionMinimum: 0 };
}

export const MsgGuildUpdateJoinInfusionMinimum = {
  encode(message: MsgGuildUpdateJoinInfusionMinimum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.joinInfusionMinimum !== 0) {
      writer.uint32(24).uint64(message.joinInfusionMinimum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateJoinInfusionMinimum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateJoinInfusionMinimum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.joinInfusionMinimum = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildUpdateJoinInfusionMinimum {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      joinInfusionMinimum: isSet(object.joinInfusionMinimum) ? Number(object.joinInfusionMinimum) : 0,
    };
  },

  toJSON(message: MsgGuildUpdateJoinInfusionMinimum): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.joinInfusionMinimum !== 0) {
      obj.joinInfusionMinimum = Math.round(message.joinInfusionMinimum);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimum>, I>>(
    base?: I,
  ): MsgGuildUpdateJoinInfusionMinimum {
    return MsgGuildUpdateJoinInfusionMinimum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimum>, I>>(
    object: I,
  ): MsgGuildUpdateJoinInfusionMinimum {
    const message = createBaseMsgGuildUpdateJoinInfusionMinimum();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.joinInfusionMinimum = object.joinInfusionMinimum ?? 0;
    return message;
  },
};

function createBaseMsgGuildUpdateJoinInfusionMinimumBypassByRequest(): MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
  return { creator: "", guildId: "", guildJoinBypassLevel: 0 };
}

export const MsgGuildUpdateJoinInfusionMinimumBypassByRequest = {
  encode(
    message: MsgGuildUpdateJoinInfusionMinimumBypassByRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.guildJoinBypassLevel !== 0) {
      writer.uint32(24).int32(message.guildJoinBypassLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateJoinInfusionMinimumBypassByRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.guildJoinBypassLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      guildJoinBypassLevel: isSet(object.guildJoinBypassLevel)
        ? guildJoinBypassLevelFromJSON(object.guildJoinBypassLevel)
        : 0,
    };
  },

  toJSON(message: MsgGuildUpdateJoinInfusionMinimumBypassByRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.guildJoinBypassLevel !== 0) {
      obj.guildJoinBypassLevel = guildJoinBypassLevelToJSON(message.guildJoinBypassLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimumBypassByRequest>, I>>(
    base?: I,
  ): MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
    return MsgGuildUpdateJoinInfusionMinimumBypassByRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimumBypassByRequest>, I>>(
    object: I,
  ): MsgGuildUpdateJoinInfusionMinimumBypassByRequest {
    const message = createBaseMsgGuildUpdateJoinInfusionMinimumBypassByRequest();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.guildJoinBypassLevel = object.guildJoinBypassLevel ?? 0;
    return message;
  },
};

function createBaseMsgGuildUpdateJoinInfusionMinimumBypassByInvite(): MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
  return { creator: "", guildId: "", guildJoinBypassLevel: 0 };
}

export const MsgGuildUpdateJoinInfusionMinimumBypassByInvite = {
  encode(
    message: MsgGuildUpdateJoinInfusionMinimumBypassByInvite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.guildJoinBypassLevel !== 0) {
      writer.uint32(24).int32(message.guildJoinBypassLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateJoinInfusionMinimumBypassByInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.guildJoinBypassLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      guildJoinBypassLevel: isSet(object.guildJoinBypassLevel)
        ? guildJoinBypassLevelFromJSON(object.guildJoinBypassLevel)
        : 0,
    };
  },

  toJSON(message: MsgGuildUpdateJoinInfusionMinimumBypassByInvite): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.guildJoinBypassLevel !== 0) {
      obj.guildJoinBypassLevel = guildJoinBypassLevelToJSON(message.guildJoinBypassLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimumBypassByInvite>, I>>(
    base?: I,
  ): MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
    return MsgGuildUpdateJoinInfusionMinimumBypassByInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateJoinInfusionMinimumBypassByInvite>, I>>(
    object: I,
  ): MsgGuildUpdateJoinInfusionMinimumBypassByInvite {
    const message = createBaseMsgGuildUpdateJoinInfusionMinimumBypassByInvite();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.guildJoinBypassLevel = object.guildJoinBypassLevel ?? 0;
    return message;
  },
};

function createBaseMsgGuildUpdateResponse(): MsgGuildUpdateResponse {
  return {};
}

export const MsgGuildUpdateResponse = {
  encode(_: MsgGuildUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgGuildUpdateResponse {
    return {};
  },

  toJSON(_: MsgGuildUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildUpdateResponse>, I>>(base?: I): MsgGuildUpdateResponse {
    return MsgGuildUpdateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildUpdateResponse>, I>>(_: I): MsgGuildUpdateResponse {
    const message = createBaseMsgGuildUpdateResponse();
    return message;
  },
};

function createBaseMsgGuildMembershipInvite(): MsgGuildMembershipInvite {
  return { creator: "", guildId: "", playerId: "", substationId: "" };
}

export const MsgGuildMembershipInvite = {
  encode(message: MsgGuildMembershipInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgGuildMembershipInvite {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipInvite): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipInvite>, I>>(base?: I): MsgGuildMembershipInvite {
    return MsgGuildMembershipInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipInvite>, I>>(object: I): MsgGuildMembershipInvite {
    const message = createBaseMsgGuildMembershipInvite();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.substationId = object.substationId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipInviteApprove(): MsgGuildMembershipInviteApprove {
  return { creator: "", guildId: "", playerId: "", substationId: "" };
}

export const MsgGuildMembershipInviteApprove = {
  encode(message: MsgGuildMembershipInviteApprove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipInviteApprove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipInviteApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgGuildMembershipInviteApprove {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipInviteApprove): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipInviteApprove>, I>>(base?: I): MsgGuildMembershipInviteApprove {
    return MsgGuildMembershipInviteApprove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipInviteApprove>, I>>(
    object: I,
  ): MsgGuildMembershipInviteApprove {
    const message = createBaseMsgGuildMembershipInviteApprove();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.substationId = object.substationId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipInviteDeny(): MsgGuildMembershipInviteDeny {
  return { creator: "", guildId: "", playerId: "" };
}

export const MsgGuildMembershipInviteDeny = {
  encode(message: MsgGuildMembershipInviteDeny, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipInviteDeny {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipInviteDeny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipInviteDeny {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipInviteDeny): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipInviteDeny>, I>>(base?: I): MsgGuildMembershipInviteDeny {
    return MsgGuildMembershipInviteDeny.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipInviteDeny>, I>>(object: I): MsgGuildMembershipInviteDeny {
    const message = createBaseMsgGuildMembershipInviteDeny();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipInviteRevoke(): MsgGuildMembershipInviteRevoke {
  return { creator: "", guildId: "", playerId: "" };
}

export const MsgGuildMembershipInviteRevoke = {
  encode(message: MsgGuildMembershipInviteRevoke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipInviteRevoke {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipInviteRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipInviteRevoke {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipInviteRevoke): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipInviteRevoke>, I>>(base?: I): MsgGuildMembershipInviteRevoke {
    return MsgGuildMembershipInviteRevoke.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipInviteRevoke>, I>>(
    object: I,
  ): MsgGuildMembershipInviteRevoke {
    const message = createBaseMsgGuildMembershipInviteRevoke();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipJoin(): MsgGuildMembershipJoin {
  return { creator: "", guildId: "", playerId: "", substationId: "", infusionId: [] };
}

export const MsgGuildMembershipJoin = {
  encode(message: MsgGuildMembershipJoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    for (const v of message.infusionId) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipJoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
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

          message.infusionId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipJoin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      infusionId: Array.isArray(object?.infusionId) ? object.infusionId.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgGuildMembershipJoin): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.infusionId?.length) {
      obj.infusionId = message.infusionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipJoin>, I>>(base?: I): MsgGuildMembershipJoin {
    return MsgGuildMembershipJoin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipJoin>, I>>(object: I): MsgGuildMembershipJoin {
    const message = createBaseMsgGuildMembershipJoin();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.substationId = object.substationId ?? "";
    message.infusionId = object.infusionId?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgGuildMembershipJoinProxy(): MsgGuildMembershipJoinProxy {
  return {
    creator: "",
    address: "",
    substationId: "",
    proofPubKey: new Uint8Array(0),
    proofSignature: new Uint8Array(0),
  };
}

export const MsgGuildMembershipJoinProxy = {
  encode(message: MsgGuildMembershipJoinProxy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.substationId !== "") {
      writer.uint32(26).string(message.substationId);
    }
    if (message.proofPubKey.length !== 0) {
      writer.uint32(34).bytes(message.proofPubKey);
    }
    if (message.proofSignature.length !== 0) {
      writer.uint32(42).bytes(message.proofSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipJoinProxy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipJoinProxy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.substationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proofPubKey = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proofSignature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipJoinProxy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      proofPubKey: isSet(object.proofPubKey) ? bytesFromBase64(object.proofPubKey) : new Uint8Array(0),
      proofSignature: isSet(object.proofSignature) ? bytesFromBase64(object.proofSignature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgGuildMembershipJoinProxy): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.proofPubKey.length !== 0) {
      obj.proofPubKey = base64FromBytes(message.proofPubKey);
    }
    if (message.proofSignature.length !== 0) {
      obj.proofSignature = base64FromBytes(message.proofSignature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipJoinProxy>, I>>(base?: I): MsgGuildMembershipJoinProxy {
    return MsgGuildMembershipJoinProxy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipJoinProxy>, I>>(object: I): MsgGuildMembershipJoinProxy {
    const message = createBaseMsgGuildMembershipJoinProxy();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.substationId = object.substationId ?? "";
    message.proofPubKey = object.proofPubKey ?? new Uint8Array(0);
    message.proofSignature = object.proofSignature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgGuildMembershipKick(): MsgGuildMembershipKick {
  return { creator: "", guildId: "", playerId: "" };
}

export const MsgGuildMembershipKick = {
  encode(message: MsgGuildMembershipKick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipKick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipKick {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipKick): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipKick>, I>>(base?: I): MsgGuildMembershipKick {
    return MsgGuildMembershipKick.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipKick>, I>>(object: I): MsgGuildMembershipKick {
    const message = createBaseMsgGuildMembershipKick();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipRequest(): MsgGuildMembershipRequest {
  return { creator: "", guildId: "", playerId: "", substationId: "" };
}

export const MsgGuildMembershipRequest = {
  encode(message: MsgGuildMembershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgGuildMembershipRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipRequest): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipRequest>, I>>(base?: I): MsgGuildMembershipRequest {
    return MsgGuildMembershipRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipRequest>, I>>(object: I): MsgGuildMembershipRequest {
    const message = createBaseMsgGuildMembershipRequest();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.substationId = object.substationId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipRequestApprove(): MsgGuildMembershipRequestApprove {
  return { creator: "", guildId: "", playerId: "", substationId: "" };
}

export const MsgGuildMembershipRequestApprove = {
  encode(message: MsgGuildMembershipRequestApprove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.substationId !== "") {
      writer.uint32(34).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipRequestApprove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipRequestApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): MsgGuildMembershipRequestApprove {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipRequestApprove): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipRequestApprove>, I>>(
    base?: I,
  ): MsgGuildMembershipRequestApprove {
    return MsgGuildMembershipRequestApprove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipRequestApprove>, I>>(
    object: I,
  ): MsgGuildMembershipRequestApprove {
    const message = createBaseMsgGuildMembershipRequestApprove();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    message.substationId = object.substationId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipRequestDeny(): MsgGuildMembershipRequestDeny {
  return { creator: "", guildId: "", playerId: "" };
}

export const MsgGuildMembershipRequestDeny = {
  encode(message: MsgGuildMembershipRequestDeny, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipRequestDeny {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipRequestDeny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipRequestDeny {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipRequestDeny): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipRequestDeny>, I>>(base?: I): MsgGuildMembershipRequestDeny {
    return MsgGuildMembershipRequestDeny.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipRequestDeny>, I>>(
    object: I,
  ): MsgGuildMembershipRequestDeny {
    const message = createBaseMsgGuildMembershipRequestDeny();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipRequestRevoke(): MsgGuildMembershipRequestRevoke {
  return { creator: "", guildId: "", playerId: "" };
}

export const MsgGuildMembershipRequestRevoke = {
  encode(message: MsgGuildMembershipRequestRevoke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== "") {
      writer.uint32(18).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipRequestRevoke {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipRequestRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.guildId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGuildMembershipRequestRevoke {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgGuildMembershipRequestRevoke): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipRequestRevoke>, I>>(base?: I): MsgGuildMembershipRequestRevoke {
    return MsgGuildMembershipRequestRevoke.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipRequestRevoke>, I>>(
    object: I,
  ): MsgGuildMembershipRequestRevoke {
    const message = createBaseMsgGuildMembershipRequestRevoke();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgGuildMembershipResponse(): MsgGuildMembershipResponse {
  return { guildMembershipApplication: undefined };
}

export const MsgGuildMembershipResponse = {
  encode(message: MsgGuildMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildMembershipApplication !== undefined) {
      GuildMembershipApplication.encode(message.guildMembershipApplication, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGuildMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGuildMembershipResponse();
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

  fromJSON(object: any): MsgGuildMembershipResponse {
    return {
      guildMembershipApplication: isSet(object.guildMembershipApplication)
        ? GuildMembershipApplication.fromJSON(object.guildMembershipApplication)
        : undefined,
    };
  },

  toJSON(message: MsgGuildMembershipResponse): unknown {
    const obj: any = {};
    if (message.guildMembershipApplication !== undefined) {
      obj.guildMembershipApplication = GuildMembershipApplication.toJSON(message.guildMembershipApplication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGuildMembershipResponse>, I>>(base?: I): MsgGuildMembershipResponse {
    return MsgGuildMembershipResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGuildMembershipResponse>, I>>(object: I): MsgGuildMembershipResponse {
    const message = createBaseMsgGuildMembershipResponse();
    message.guildMembershipApplication =
      (object.guildMembershipApplication !== undefined && object.guildMembershipApplication !== null)
        ? GuildMembershipApplication.fromPartial(object.guildMembershipApplication)
        : undefined;
    return message;
  },
};

function createBaseMsgPermissionGrantOnObject(): MsgPermissionGrantOnObject {
  return { creator: "", objectId: "", playerId: "", permissions: 0 };
}

export const MsgPermissionGrantOnObject = {
  encode(message: MsgPermissionGrantOnObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.permissions !== 0) {
      writer.uint32(32).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPermissionGrantOnObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPermissionGrantOnObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.permissions = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPermissionGrantOnObject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: MsgPermissionGrantOnObject): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.objectId !== "") {
      obj.objectId = message.objectId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPermissionGrantOnObject>, I>>(base?: I): MsgPermissionGrantOnObject {
    return MsgPermissionGrantOnObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPermissionGrantOnObject>, I>>(object: I): MsgPermissionGrantOnObject {
    const message = createBaseMsgPermissionGrantOnObject();
    message.creator = object.creator ?? "";
    message.objectId = object.objectId ?? "";
    message.playerId = object.playerId ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseMsgPermissionGrantOnAddress(): MsgPermissionGrantOnAddress {
  return { creator: "", address: "", permissions: 0 };
}

export const MsgPermissionGrantOnAddress = {
  encode(message: MsgPermissionGrantOnAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPermissionGrantOnAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPermissionGrantOnAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.permissions = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPermissionGrantOnAddress {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: MsgPermissionGrantOnAddress): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPermissionGrantOnAddress>, I>>(base?: I): MsgPermissionGrantOnAddress {
    return MsgPermissionGrantOnAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPermissionGrantOnAddress>, I>>(object: I): MsgPermissionGrantOnAddress {
    const message = createBaseMsgPermissionGrantOnAddress();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseMsgPermissionRevokeOnObject(): MsgPermissionRevokeOnObject {
  return { creator: "", objectId: "", playerId: "", permissions: 0 };
}

export const MsgPermissionRevokeOnObject = {
  encode(message: MsgPermissionRevokeOnObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.objectId !== "") {
      writer.uint32(18).string(message.objectId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    if (message.permissions !== 0) {
      writer.uint32(32).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPermissionRevokeOnObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPermissionRevokeOnObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.objectId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.permissions = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPermissionRevokeOnObject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: MsgPermissionRevokeOnObject): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.objectId !== "") {
      obj.objectId = message.objectId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPermissionRevokeOnObject>, I>>(base?: I): MsgPermissionRevokeOnObject {
    return MsgPermissionRevokeOnObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPermissionRevokeOnObject>, I>>(object: I): MsgPermissionRevokeOnObject {
    const message = createBaseMsgPermissionRevokeOnObject();
    message.creator = object.creator ?? "";
    message.objectId = object.objectId ?? "";
    message.playerId = object.playerId ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseMsgPermissionRevokeOnAddress(): MsgPermissionRevokeOnAddress {
  return { creator: "", address: "", permissions: 0 };
}

export const MsgPermissionRevokeOnAddress = {
  encode(message: MsgPermissionRevokeOnAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPermissionRevokeOnAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPermissionRevokeOnAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.permissions = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPermissionRevokeOnAddress {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: MsgPermissionRevokeOnAddress): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPermissionRevokeOnAddress>, I>>(base?: I): MsgPermissionRevokeOnAddress {
    return MsgPermissionRevokeOnAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPermissionRevokeOnAddress>, I>>(object: I): MsgPermissionRevokeOnAddress {
    const message = createBaseMsgPermissionRevokeOnAddress();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseMsgPermissionResponse(): MsgPermissionResponse {
  return {};
}

export const MsgPermissionResponse = {
  encode(_: MsgPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgPermissionResponse {
    return {};
  },

  toJSON(_: MsgPermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPermissionResponse>, I>>(base?: I): MsgPermissionResponse {
    return MsgPermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPermissionResponse>, I>>(_: I): MsgPermissionResponse {
    const message = createBaseMsgPermissionResponse();
    return message;
  },
};

function createBaseMsgPlanetExplore(): MsgPlanetExplore {
  return { creator: "" };
}

export const MsgPlanetExplore = {
  encode(message: MsgPlanetExplore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlanetExplore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlanetExplore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPlanetExplore {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgPlanetExplore): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlanetExplore>, I>>(base?: I): MsgPlanetExplore {
    return MsgPlanetExplore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlanetExplore>, I>>(object: I): MsgPlanetExplore {
    const message = createBaseMsgPlanetExplore();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgPlanetExploreResponse(): MsgPlanetExploreResponse {
  return { planet: undefined };
}

export const MsgPlanetExploreResponse = {
  encode(message: MsgPlanetExploreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.planet !== undefined) {
      Planet.encode(message.planet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlanetExploreResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlanetExploreResponse();
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

  fromJSON(object: any): MsgPlanetExploreResponse {
    return { planet: isSet(object.planet) ? Planet.fromJSON(object.planet) : undefined };
  },

  toJSON(message: MsgPlanetExploreResponse): unknown {
    const obj: any = {};
    if (message.planet !== undefined) {
      obj.planet = Planet.toJSON(message.planet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlanetExploreResponse>, I>>(base?: I): MsgPlanetExploreResponse {
    return MsgPlanetExploreResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlanetExploreResponse>, I>>(object: I): MsgPlanetExploreResponse {
    const message = createBaseMsgPlanetExploreResponse();
    message.planet = (object.planet !== undefined && object.planet !== null)
      ? Planet.fromPartial(object.planet)
      : undefined;
    return message;
  },
};

function createBaseMsgPlayerUpdatePrimaryAddress(): MsgPlayerUpdatePrimaryAddress {
  return { creator: "", primaryAddress: "" };
}

export const MsgPlayerUpdatePrimaryAddress = {
  encode(message: MsgPlayerUpdatePrimaryAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.primaryAddress !== "") {
      writer.uint32(18).string(message.primaryAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayerUpdatePrimaryAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayerUpdatePrimaryAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.primaryAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPlayerUpdatePrimaryAddress {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      primaryAddress: isSet(object.primaryAddress) ? String(object.primaryAddress) : "",
    };
  },

  toJSON(message: MsgPlayerUpdatePrimaryAddress): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.primaryAddress !== "") {
      obj.primaryAddress = message.primaryAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlayerUpdatePrimaryAddress>, I>>(base?: I): MsgPlayerUpdatePrimaryAddress {
    return MsgPlayerUpdatePrimaryAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlayerUpdatePrimaryAddress>, I>>(
    object: I,
  ): MsgPlayerUpdatePrimaryAddress {
    const message = createBaseMsgPlayerUpdatePrimaryAddress();
    message.creator = object.creator ?? "";
    message.primaryAddress = object.primaryAddress ?? "";
    return message;
  },
};

function createBaseMsgPlayerUpdatePrimaryAddressResponse(): MsgPlayerUpdatePrimaryAddressResponse {
  return {};
}

export const MsgPlayerUpdatePrimaryAddressResponse = {
  encode(_: MsgPlayerUpdatePrimaryAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayerUpdatePrimaryAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayerUpdatePrimaryAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgPlayerUpdatePrimaryAddressResponse {
    return {};
  },

  toJSON(_: MsgPlayerUpdatePrimaryAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlayerUpdatePrimaryAddressResponse>, I>>(
    base?: I,
  ): MsgPlayerUpdatePrimaryAddressResponse {
    return MsgPlayerUpdatePrimaryAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPlayerUpdatePrimaryAddressResponse>, I>>(
    _: I,
  ): MsgPlayerUpdatePrimaryAddressResponse {
    const message = createBaseMsgPlayerUpdatePrimaryAddressResponse();
    return message;
  },
};

function createBaseMsgStructActivate(): MsgStructActivate {
  return { creator: "", structId: "" };
}

export const MsgStructActivate = {
  encode(message: MsgStructActivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructActivate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructActivate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
    };
  },

  toJSON(message: MsgStructActivate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructActivate>, I>>(base?: I): MsgStructActivate {
    return MsgStructActivate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructActivate>, I>>(object: I): MsgStructActivate {
    const message = createBaseMsgStructActivate();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    return message;
  },
};

function createBaseMsgStructActivateResponse(): MsgStructActivateResponse {
  return { struct: undefined };
}

export const MsgStructActivateResponse = {
  encode(message: MsgStructActivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructActivateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructActivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructActivateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructActivateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructActivateResponse>, I>>(base?: I): MsgStructActivateResponse {
    return MsgStructActivateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructActivateResponse>, I>>(object: I): MsgStructActivateResponse {
    const message = createBaseMsgStructActivateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructBuildInitiate(): MsgStructBuildInitiate {
  return { creator: "", structType: "", planetId: "", slot: 0 };
}

export const MsgStructBuildInitiate = {
  encode(message: MsgStructBuildInitiate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structType !== "") {
      writer.uint32(18).string(message.structType);
    }
    if (message.planetId !== "") {
      writer.uint32(26).string(message.planetId);
    }
    if (message.slot !== 0) {
      writer.uint32(32).uint64(message.slot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructBuildInitiate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructBuildInitiate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.planetId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.slot = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructBuildInitiate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structType: isSet(object.structType) ? String(object.structType) : "",
      planetId: isSet(object.planetId) ? String(object.planetId) : "",
      slot: isSet(object.slot) ? Number(object.slot) : 0,
    };
  },

  toJSON(message: MsgStructBuildInitiate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structType !== "") {
      obj.structType = message.structType;
    }
    if (message.planetId !== "") {
      obj.planetId = message.planetId;
    }
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructBuildInitiate>, I>>(base?: I): MsgStructBuildInitiate {
    return MsgStructBuildInitiate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructBuildInitiate>, I>>(object: I): MsgStructBuildInitiate {
    const message = createBaseMsgStructBuildInitiate();
    message.creator = object.creator ?? "";
    message.structType = object.structType ?? "";
    message.planetId = object.planetId ?? "";
    message.slot = object.slot ?? 0;
    return message;
  },
};

function createBaseMsgStructBuildInitiateResponse(): MsgStructBuildInitiateResponse {
  return { struct: undefined };
}

export const MsgStructBuildInitiateResponse = {
  encode(message: MsgStructBuildInitiateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructBuildInitiateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructBuildInitiateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructBuildInitiateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructBuildInitiateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructBuildInitiateResponse>, I>>(base?: I): MsgStructBuildInitiateResponse {
    return MsgStructBuildInitiateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructBuildInitiateResponse>, I>>(
    object: I,
  ): MsgStructBuildInitiateResponse {
    const message = createBaseMsgStructBuildInitiateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructBuildComplete(): MsgStructBuildComplete {
  return { creator: "", structId: "", proof: "", nonce: "" };
}

export const MsgStructBuildComplete = {
  encode(message: MsgStructBuildComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructBuildComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructBuildComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructBuildComplete {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: MsgStructBuildComplete): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    if (message.proof !== "") {
      obj.proof = message.proof;
    }
    if (message.nonce !== "") {
      obj.nonce = message.nonce;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructBuildComplete>, I>>(base?: I): MsgStructBuildComplete {
    return MsgStructBuildComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructBuildComplete>, I>>(object: I): MsgStructBuildComplete {
    const message = createBaseMsgStructBuildComplete();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    message.proof = object.proof ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseMsgStructBuildCompleteResponse(): MsgStructBuildCompleteResponse {
  return { struct: undefined };
}

export const MsgStructBuildCompleteResponse = {
  encode(message: MsgStructBuildCompleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructBuildCompleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructBuildCompleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructBuildCompleteResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructBuildCompleteResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructBuildCompleteResponse>, I>>(base?: I): MsgStructBuildCompleteResponse {
    return MsgStructBuildCompleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructBuildCompleteResponse>, I>>(
    object: I,
  ): MsgStructBuildCompleteResponse {
    const message = createBaseMsgStructBuildCompleteResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructInfuse(): MsgStructInfuse {
  return { creator: "", structId: "", infuseAmount: "" };
}

export const MsgStructInfuse = {
  encode(message: MsgStructInfuse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    if (message.infuseAmount !== "") {
      writer.uint32(26).string(message.infuseAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructInfuse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructInfuse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.infuseAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructInfuse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
      infuseAmount: isSet(object.infuseAmount) ? String(object.infuseAmount) : "",
    };
  },

  toJSON(message: MsgStructInfuse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    if (message.infuseAmount !== "") {
      obj.infuseAmount = message.infuseAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructInfuse>, I>>(base?: I): MsgStructInfuse {
    return MsgStructInfuse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructInfuse>, I>>(object: I): MsgStructInfuse {
    const message = createBaseMsgStructInfuse();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    message.infuseAmount = object.infuseAmount ?? "";
    return message;
  },
};

function createBaseMsgStructInfuseResponse(): MsgStructInfuseResponse {
  return {};
}

export const MsgStructInfuseResponse = {
  encode(_: MsgStructInfuseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructInfuseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructInfuseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgStructInfuseResponse {
    return {};
  },

  toJSON(_: MsgStructInfuseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructInfuseResponse>, I>>(base?: I): MsgStructInfuseResponse {
    return MsgStructInfuseResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructInfuseResponse>, I>>(_: I): MsgStructInfuseResponse {
    const message = createBaseMsgStructInfuseResponse();
    return message;
  },
};

function createBaseMsgStructMineActivate(): MsgStructMineActivate {
  return { creator: "", structId: "" };
}

export const MsgStructMineActivate = {
  encode(message: MsgStructMineActivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMineActivate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMineActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMineActivate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
    };
  },

  toJSON(message: MsgStructMineActivate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMineActivate>, I>>(base?: I): MsgStructMineActivate {
    return MsgStructMineActivate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMineActivate>, I>>(object: I): MsgStructMineActivate {
    const message = createBaseMsgStructMineActivate();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    return message;
  },
};

function createBaseMsgStructMineActivateResponse(): MsgStructMineActivateResponse {
  return { struct: undefined };
}

export const MsgStructMineActivateResponse = {
  encode(message: MsgStructMineActivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMineActivateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMineActivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMineActivateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructMineActivateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMineActivateResponse>, I>>(base?: I): MsgStructMineActivateResponse {
    return MsgStructMineActivateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMineActivateResponse>, I>>(
    object: I,
  ): MsgStructMineActivateResponse {
    const message = createBaseMsgStructMineActivateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructMineDeactivate(): MsgStructMineDeactivate {
  return { creator: "", structId: "" };
}

export const MsgStructMineDeactivate = {
  encode(message: MsgStructMineDeactivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMineDeactivate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMineDeactivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMineDeactivate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
    };
  },

  toJSON(message: MsgStructMineDeactivate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMineDeactivate>, I>>(base?: I): MsgStructMineDeactivate {
    return MsgStructMineDeactivate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMineDeactivate>, I>>(object: I): MsgStructMineDeactivate {
    const message = createBaseMsgStructMineDeactivate();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    return message;
  },
};

function createBaseMsgStructMineDeactivateResponse(): MsgStructMineDeactivateResponse {
  return { struct: undefined };
}

export const MsgStructMineDeactivateResponse = {
  encode(message: MsgStructMineDeactivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMineDeactivateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMineDeactivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMineDeactivateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructMineDeactivateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMineDeactivateResponse>, I>>(base?: I): MsgStructMineDeactivateResponse {
    return MsgStructMineDeactivateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMineDeactivateResponse>, I>>(
    object: I,
  ): MsgStructMineDeactivateResponse {
    const message = createBaseMsgStructMineDeactivateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructMine(): MsgStructMine {
  return { creator: "", structId: "", proof: "", nonce: "" };
}

export const MsgStructMine = {
  encode(message: MsgStructMine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMine {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: MsgStructMine): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    if (message.proof !== "") {
      obj.proof = message.proof;
    }
    if (message.nonce !== "") {
      obj.nonce = message.nonce;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMine>, I>>(base?: I): MsgStructMine {
    return MsgStructMine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMine>, I>>(object: I): MsgStructMine {
    const message = createBaseMsgStructMine();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    message.proof = object.proof ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseMsgStructMineResponse(): MsgStructMineResponse {
  return { struct: undefined };
}

export const MsgStructMineResponse = {
  encode(message: MsgStructMineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructMineResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructMineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructMineResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructMineResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructMineResponse>, I>>(base?: I): MsgStructMineResponse {
    return MsgStructMineResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructMineResponse>, I>>(object: I): MsgStructMineResponse {
    const message = createBaseMsgStructMineResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructRefineActivate(): MsgStructRefineActivate {
  return { creator: "", structId: "" };
}

export const MsgStructRefineActivate = {
  encode(message: MsgStructRefineActivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefineActivate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefineActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefineActivate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
    };
  },

  toJSON(message: MsgStructRefineActivate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefineActivate>, I>>(base?: I): MsgStructRefineActivate {
    return MsgStructRefineActivate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefineActivate>, I>>(object: I): MsgStructRefineActivate {
    const message = createBaseMsgStructRefineActivate();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    return message;
  },
};

function createBaseMsgStructRefineActivateResponse(): MsgStructRefineActivateResponse {
  return { struct: undefined };
}

export const MsgStructRefineActivateResponse = {
  encode(message: MsgStructRefineActivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefineActivateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefineActivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefineActivateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructRefineActivateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefineActivateResponse>, I>>(base?: I): MsgStructRefineActivateResponse {
    return MsgStructRefineActivateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefineActivateResponse>, I>>(
    object: I,
  ): MsgStructRefineActivateResponse {
    const message = createBaseMsgStructRefineActivateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructRefineDeactivate(): MsgStructRefineDeactivate {
  return { creator: "", structId: "" };
}

export const MsgStructRefineDeactivate = {
  encode(message: MsgStructRefineDeactivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefineDeactivate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefineDeactivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefineDeactivate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
    };
  },

  toJSON(message: MsgStructRefineDeactivate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefineDeactivate>, I>>(base?: I): MsgStructRefineDeactivate {
    return MsgStructRefineDeactivate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefineDeactivate>, I>>(object: I): MsgStructRefineDeactivate {
    const message = createBaseMsgStructRefineDeactivate();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    return message;
  },
};

function createBaseMsgStructRefineDeactivateResponse(): MsgStructRefineDeactivateResponse {
  return { struct: undefined };
}

export const MsgStructRefineDeactivateResponse = {
  encode(message: MsgStructRefineDeactivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefineDeactivateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefineDeactivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefineDeactivateResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructRefineDeactivateResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefineDeactivateResponse>, I>>(
    base?: I,
  ): MsgStructRefineDeactivateResponse {
    return MsgStructRefineDeactivateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefineDeactivateResponse>, I>>(
    object: I,
  ): MsgStructRefineDeactivateResponse {
    const message = createBaseMsgStructRefineDeactivateResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgStructRefine(): MsgStructRefine {
  return { creator: "", structId: "", proof: "", nonce: "" };
}

export const MsgStructRefine = {
  encode(message: MsgStructRefine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefine {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: MsgStructRefine): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    if (message.proof !== "") {
      obj.proof = message.proof;
    }
    if (message.nonce !== "") {
      obj.nonce = message.nonce;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefine>, I>>(base?: I): MsgStructRefine {
    return MsgStructRefine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefine>, I>>(object: I): MsgStructRefine {
    const message = createBaseMsgStructRefine();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    message.proof = object.proof ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseMsgStructRefineResponse(): MsgStructRefineResponse {
  return { struct: undefined };
}

export const MsgStructRefineResponse = {
  encode(message: MsgStructRefineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(message.struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStructRefineResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStructRefineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStructRefineResponse {
    return { struct: isSet(object.struct) ? Struct.fromJSON(object.struct) : undefined };
  },

  toJSON(message: MsgStructRefineResponse): unknown {
    const obj: any = {};
    if (message.struct !== undefined) {
      obj.struct = Struct.toJSON(message.struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStructRefineResponse>, I>>(base?: I): MsgStructRefineResponse {
    return MsgStructRefineResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStructRefineResponse>, I>>(object: I): MsgStructRefineResponse {
    const message = createBaseMsgStructRefineResponse();
    message.struct = (object.struct !== undefined && object.struct !== null)
      ? Struct.fromPartial(object.struct)
      : undefined;
    return message;
  },
};

function createBaseMsgSubstationCreate(): MsgSubstationCreate {
  return { creator: "", owner: "", allocationId: "" };
}

export const MsgSubstationCreate = {
  encode(message: MsgSubstationCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.allocationId !== "") {
      writer.uint32(26).string(message.allocationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.allocationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      allocationId: isSet(object.allocationId) ? String(object.allocationId) : "",
    };
  },

  toJSON(message: MsgSubstationCreate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.allocationId !== "") {
      obj.allocationId = message.allocationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationCreate>, I>>(base?: I): MsgSubstationCreate {
    return MsgSubstationCreate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationCreate>, I>>(object: I): MsgSubstationCreate {
    const message = createBaseMsgSubstationCreate();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.allocationId = object.allocationId ?? "";
    return message;
  },
};

function createBaseMsgSubstationCreateResponse(): MsgSubstationCreateResponse {
  return { substationId: "" };
}

export const MsgSubstationCreateResponse = {
  encode(message: MsgSubstationCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.substationId !== "") {
      writer.uint32(10).string(message.substationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): MsgSubstationCreateResponse {
    return { substationId: isSet(object.substationId) ? String(object.substationId) : "" };
  },

  toJSON(message: MsgSubstationCreateResponse): unknown {
    const obj: any = {};
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationCreateResponse>, I>>(base?: I): MsgSubstationCreateResponse {
    return MsgSubstationCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationCreateResponse>, I>>(object: I): MsgSubstationCreateResponse {
    const message = createBaseMsgSubstationCreateResponse();
    message.substationId = object.substationId ?? "";
    return message;
  },
};

function createBaseMsgSubstationDelete(): MsgSubstationDelete {
  return { creator: "", substationId: "", migrationSubstationId: "" };
}

export const MsgSubstationDelete = {
  encode(message: MsgSubstationDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.substationId !== "") {
      writer.uint32(18).string(message.substationId);
    }
    if (message.migrationSubstationId !== "") {
      writer.uint32(26).string(message.migrationSubstationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationDelete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.substationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.migrationSubstationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationDelete {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      migrationSubstationId: isSet(object.migrationSubstationId) ? String(object.migrationSubstationId) : "",
    };
  },

  toJSON(message: MsgSubstationDelete): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.migrationSubstationId !== "") {
      obj.migrationSubstationId = message.migrationSubstationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationDelete>, I>>(base?: I): MsgSubstationDelete {
    return MsgSubstationDelete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationDelete>, I>>(object: I): MsgSubstationDelete {
    const message = createBaseMsgSubstationDelete();
    message.creator = object.creator ?? "";
    message.substationId = object.substationId ?? "";
    message.migrationSubstationId = object.migrationSubstationId ?? "";
    return message;
  },
};

function createBaseMsgSubstationDeleteResponse(): MsgSubstationDeleteResponse {
  return {};
}

export const MsgSubstationDeleteResponse = {
  encode(_: MsgSubstationDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationDeleteResponse {
    return {};
  },

  toJSON(_: MsgSubstationDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationDeleteResponse>, I>>(base?: I): MsgSubstationDeleteResponse {
    return MsgSubstationDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationDeleteResponse>, I>>(_: I): MsgSubstationDeleteResponse {
    const message = createBaseMsgSubstationDeleteResponse();
    return message;
  },
};

function createBaseMsgSubstationAllocationConnect(): MsgSubstationAllocationConnect {
  return { creator: "", allocationId: "", destinationId: "" };
}

export const MsgSubstationAllocationConnect = {
  encode(message: MsgSubstationAllocationConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.allocationId !== "") {
      writer.uint32(18).string(message.allocationId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationAllocationConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationAllocationConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationAllocationConnect {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      allocationId: isSet(object.allocationId) ? String(object.allocationId) : "",
      destinationId: isSet(object.destinationId) ? String(object.destinationId) : "",
    };
  },

  toJSON(message: MsgSubstationAllocationConnect): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.allocationId !== "") {
      obj.allocationId = message.allocationId;
    }
    if (message.destinationId !== "") {
      obj.destinationId = message.destinationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationAllocationConnect>, I>>(base?: I): MsgSubstationAllocationConnect {
    return MsgSubstationAllocationConnect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationAllocationConnect>, I>>(
    object: I,
  ): MsgSubstationAllocationConnect {
    const message = createBaseMsgSubstationAllocationConnect();
    message.creator = object.creator ?? "";
    message.allocationId = object.allocationId ?? "";
    message.destinationId = object.destinationId ?? "";
    return message;
  },
};

function createBaseMsgSubstationAllocationConnectResponse(): MsgSubstationAllocationConnectResponse {
  return {};
}

export const MsgSubstationAllocationConnectResponse = {
  encode(_: MsgSubstationAllocationConnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationAllocationConnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationAllocationConnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationAllocationConnectResponse {
    return {};
  },

  toJSON(_: MsgSubstationAllocationConnectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationAllocationConnectResponse>, I>>(
    base?: I,
  ): MsgSubstationAllocationConnectResponse {
    return MsgSubstationAllocationConnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationAllocationConnectResponse>, I>>(
    _: I,
  ): MsgSubstationAllocationConnectResponse {
    const message = createBaseMsgSubstationAllocationConnectResponse();
    return message;
  },
};

function createBaseMsgSubstationAllocationDisconnect(): MsgSubstationAllocationDisconnect {
  return { creator: "", allocationId: "" };
}

export const MsgSubstationAllocationDisconnect = {
  encode(message: MsgSubstationAllocationDisconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.allocationId !== "") {
      writer.uint32(18).string(message.allocationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationAllocationDisconnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationAllocationDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationAllocationDisconnect {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      allocationId: isSet(object.allocationId) ? String(object.allocationId) : "",
    };
  },

  toJSON(message: MsgSubstationAllocationDisconnect): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.allocationId !== "") {
      obj.allocationId = message.allocationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationAllocationDisconnect>, I>>(
    base?: I,
  ): MsgSubstationAllocationDisconnect {
    return MsgSubstationAllocationDisconnect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationAllocationDisconnect>, I>>(
    object: I,
  ): MsgSubstationAllocationDisconnect {
    const message = createBaseMsgSubstationAllocationDisconnect();
    message.creator = object.creator ?? "";
    message.allocationId = object.allocationId ?? "";
    return message;
  },
};

function createBaseMsgSubstationAllocationDisconnectResponse(): MsgSubstationAllocationDisconnectResponse {
  return {};
}

export const MsgSubstationAllocationDisconnectResponse = {
  encode(_: MsgSubstationAllocationDisconnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationAllocationDisconnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationAllocationDisconnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationAllocationDisconnectResponse {
    return {};
  },

  toJSON(_: MsgSubstationAllocationDisconnectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationAllocationDisconnectResponse>, I>>(
    base?: I,
  ): MsgSubstationAllocationDisconnectResponse {
    return MsgSubstationAllocationDisconnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationAllocationDisconnectResponse>, I>>(
    _: I,
  ): MsgSubstationAllocationDisconnectResponse {
    const message = createBaseMsgSubstationAllocationDisconnectResponse();
    return message;
  },
};

function createBaseMsgSubstationPlayerConnect(): MsgSubstationPlayerConnect {
  return { creator: "", substationId: "", playerId: "" };
}

export const MsgSubstationPlayerConnect = {
  encode(message: MsgSubstationPlayerConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.substationId !== "") {
      writer.uint32(18).string(message.substationId);
    }
    if (message.playerId !== "") {
      writer.uint32(26).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.substationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationPlayerConnect {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgSubstationPlayerConnect): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerConnect>, I>>(base?: I): MsgSubstationPlayerConnect {
    return MsgSubstationPlayerConnect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerConnect>, I>>(object: I): MsgSubstationPlayerConnect {
    const message = createBaseMsgSubstationPlayerConnect();
    message.creator = object.creator ?? "";
    message.substationId = object.substationId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgSubstationPlayerConnectResponse(): MsgSubstationPlayerConnectResponse {
  return {};
}

export const MsgSubstationPlayerConnectResponse = {
  encode(_: MsgSubstationPlayerConnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerConnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerConnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationPlayerConnectResponse {
    return {};
  },

  toJSON(_: MsgSubstationPlayerConnectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerConnectResponse>, I>>(
    base?: I,
  ): MsgSubstationPlayerConnectResponse {
    return MsgSubstationPlayerConnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerConnectResponse>, I>>(
    _: I,
  ): MsgSubstationPlayerConnectResponse {
    const message = createBaseMsgSubstationPlayerConnectResponse();
    return message;
  },
};

function createBaseMsgSubstationPlayerDisconnect(): MsgSubstationPlayerDisconnect {
  return { creator: "", playerId: "" };
}

export const MsgSubstationPlayerDisconnect = {
  encode(message: MsgSubstationPlayerDisconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.playerId !== "") {
      writer.uint32(18).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerDisconnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationPlayerDisconnect {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: MsgSubstationPlayerDisconnect): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerDisconnect>, I>>(base?: I): MsgSubstationPlayerDisconnect {
    return MsgSubstationPlayerDisconnect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerDisconnect>, I>>(
    object: I,
  ): MsgSubstationPlayerDisconnect {
    const message = createBaseMsgSubstationPlayerDisconnect();
    message.creator = object.creator ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseMsgSubstationPlayerDisconnectResponse(): MsgSubstationPlayerDisconnectResponse {
  return {};
}

export const MsgSubstationPlayerDisconnectResponse = {
  encode(_: MsgSubstationPlayerDisconnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerDisconnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerDisconnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationPlayerDisconnectResponse {
    return {};
  },

  toJSON(_: MsgSubstationPlayerDisconnectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerDisconnectResponse>, I>>(
    base?: I,
  ): MsgSubstationPlayerDisconnectResponse {
    return MsgSubstationPlayerDisconnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerDisconnectResponse>, I>>(
    _: I,
  ): MsgSubstationPlayerDisconnectResponse {
    const message = createBaseMsgSubstationPlayerDisconnectResponse();
    return message;
  },
};

function createBaseMsgSubstationPlayerMigrate(): MsgSubstationPlayerMigrate {
  return { creator: "", substationId: "", playerId: [] };
}

export const MsgSubstationPlayerMigrate = {
  encode(message: MsgSubstationPlayerMigrate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.substationId !== "") {
      writer.uint32(18).string(message.substationId);
    }
    for (const v of message.playerId) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerMigrate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerMigrate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.substationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubstationPlayerMigrate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      substationId: isSet(object.substationId) ? String(object.substationId) : "",
      playerId: Array.isArray(object?.playerId) ? object.playerId.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgSubstationPlayerMigrate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.substationId !== "") {
      obj.substationId = message.substationId;
    }
    if (message.playerId?.length) {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerMigrate>, I>>(base?: I): MsgSubstationPlayerMigrate {
    return MsgSubstationPlayerMigrate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerMigrate>, I>>(object: I): MsgSubstationPlayerMigrate {
    const message = createBaseMsgSubstationPlayerMigrate();
    message.creator = object.creator ?? "";
    message.substationId = object.substationId ?? "";
    message.playerId = object.playerId?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSubstationPlayerMigrateResponse(): MsgSubstationPlayerMigrateResponse {
  return {};
}

export const MsgSubstationPlayerMigrateResponse = {
  encode(_: MsgSubstationPlayerMigrateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubstationPlayerMigrateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubstationPlayerMigrateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubstationPlayerMigrateResponse {
    return {};
  },

  toJSON(_: MsgSubstationPlayerMigrateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubstationPlayerMigrateResponse>, I>>(
    base?: I,
  ): MsgSubstationPlayerMigrateResponse {
    return MsgSubstationPlayerMigrateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubstationPlayerMigrateResponse>, I>>(
    _: I,
  ): MsgSubstationPlayerMigrateResponse {
    const message = createBaseMsgSubstationPlayerMigrateResponse();
    return message;
  },
};

function createBaseMsgSabotage(): MsgSabotage {
  return { creator: "", structId: "", proof: "", nonce: "" };
}

export const MsgSabotage = {
  encode(message: MsgSabotage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structId !== "") {
      writer.uint32(18).string(message.structId);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSabotage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSabotage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.structId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSabotage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      structId: isSet(object.structId) ? String(object.structId) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: MsgSabotage): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.structId !== "") {
      obj.structId = message.structId;
    }
    if (message.proof !== "") {
      obj.proof = message.proof;
    }
    if (message.nonce !== "") {
      obj.nonce = message.nonce;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSabotage>, I>>(base?: I): MsgSabotage {
    return MsgSabotage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSabotage>, I>>(object: I): MsgSabotage {
    const message = createBaseMsgSabotage();
    message.creator = object.creator ?? "";
    message.structId = object.structId ?? "";
    message.proof = object.proof ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseMsgSabotageResponse(): MsgSabotageResponse {
  return {};
}

export const MsgSabotageResponse = {
  encode(_: MsgSabotageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSabotageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSabotageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSabotageResponse {
    return {};
  },

  toJSON(_: MsgSabotageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSabotageResponse>, I>>(base?: I): MsgSabotageResponse {
    return MsgSabotageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSabotageResponse>, I>>(_: I): MsgSabotageResponse {
    const message = createBaseMsgSabotageResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  AddressRegister(request: MsgAddressRegister): Promise<MsgAddressRegisterResponse>;
  AddressApproveRegister(request: MsgAddressApproveRegister): Promise<MsgAddressRegisterResponse>;
  AddressRevoke(request: MsgAddressRevoke): Promise<MsgAddressRevokeResponse>;
  AllocationCreate(request: MsgAllocationCreate): Promise<MsgAllocationCreateResponse>;
  GuildCreate(request: MsgGuildCreate): Promise<MsgGuildCreateResponse>;
  GuildUpdateOwnerId(request: MsgGuildUpdateOwnerId): Promise<MsgGuildUpdateResponse>;
  GuildUpdateEntrySubstationId(request: MsgGuildUpdateEntrySubstationId): Promise<MsgGuildUpdateResponse>;
  GuildUpdateEndpoint(request: MsgGuildUpdateEndpoint): Promise<MsgGuildUpdateResponse>;
  GuildUpdateJoinInfusionMinimum(request: MsgGuildUpdateJoinInfusionMinimum): Promise<MsgGuildUpdateResponse>;
  GuildUpdateJoinInfusionMinimumBypassByInvite(
    request: MsgGuildUpdateJoinInfusionMinimumBypassByInvite,
  ): Promise<MsgGuildUpdateResponse>;
  GuildUpdateJoinInfusionMinimumBypassByRequest(
    request: MsgGuildUpdateJoinInfusionMinimumBypassByRequest,
  ): Promise<MsgGuildUpdateResponse>;
  GuildMembershipInvite(request: MsgGuildMembershipInvite): Promise<MsgGuildMembershipResponse>;
  GuildMembershipInviteApprove(request: MsgGuildMembershipInviteApprove): Promise<MsgGuildMembershipResponse>;
  GuildMembershipInviteDeny(request: MsgGuildMembershipInviteDeny): Promise<MsgGuildMembershipResponse>;
  GuildMembershipInviteRevoke(request: MsgGuildMembershipInviteRevoke): Promise<MsgGuildMembershipResponse>;
  GuildMembershipJoin(request: MsgGuildMembershipJoin): Promise<MsgGuildMembershipResponse>;
  GuildMembershipJoinProxy(request: MsgGuildMembershipJoinProxy): Promise<MsgGuildMembershipResponse>;
  GuildMembershipKick(request: MsgGuildMembershipKick): Promise<MsgGuildMembershipResponse>;
  GuildMembershipRequest(request: MsgGuildMembershipRequest): Promise<MsgGuildMembershipResponse>;
  GuildMembershipRequestApprove(request: MsgGuildMembershipRequestApprove): Promise<MsgGuildMembershipResponse>;
  GuildMembershipRequestDeny(request: MsgGuildMembershipRequestDeny): Promise<MsgGuildMembershipResponse>;
  GuildMembershipRequestRevoke(request: MsgGuildMembershipRequestRevoke): Promise<MsgGuildMembershipResponse>;
  PermissionGrantOnAddress(request: MsgPermissionGrantOnAddress): Promise<MsgPermissionResponse>;
  PermissionGrantOnObject(request: MsgPermissionGrantOnObject): Promise<MsgPermissionResponse>;
  PermissionRevokeOnAddress(request: MsgPermissionRevokeOnAddress): Promise<MsgPermissionResponse>;
  PermissionRevokeOnObject(request: MsgPermissionRevokeOnObject): Promise<MsgPermissionResponse>;
  PlanetExplore(request: MsgPlanetExplore): Promise<MsgPlanetExploreResponse>;
  PlayerUpdatePrimaryAddress(request: MsgPlayerUpdatePrimaryAddress): Promise<MsgPlayerUpdatePrimaryAddressResponse>;
  StructActivate(request: MsgStructActivate): Promise<MsgStructActivateResponse>;
  StructBuildInitiate(request: MsgStructBuildInitiate): Promise<MsgStructBuildInitiateResponse>;
  StructBuildComplete(request: MsgStructBuildComplete): Promise<MsgStructBuildCompleteResponse>;
  StructMineActivate(request: MsgStructMineActivate): Promise<MsgStructMineActivateResponse>;
  StructMineDeactivate(request: MsgStructMineDeactivate): Promise<MsgStructMineDeactivateResponse>;
  StructMine(request: MsgStructMine): Promise<MsgStructMineResponse>;
  StructRefineActivate(request: MsgStructRefineActivate): Promise<MsgStructRefineActivateResponse>;
  StructRefineDeactivate(request: MsgStructRefineDeactivate): Promise<MsgStructRefineDeactivateResponse>;
  StructRefine(request: MsgStructRefine): Promise<MsgStructRefineResponse>;
  StructInfuse(request: MsgStructInfuse): Promise<MsgStructInfuseResponse>;
  SubstationCreate(request: MsgSubstationCreate): Promise<MsgSubstationCreateResponse>;
  SubstationDelete(request: MsgSubstationDelete): Promise<MsgSubstationDeleteResponse>;
  SubstationAllocationConnect(request: MsgSubstationAllocationConnect): Promise<MsgSubstationAllocationConnectResponse>;
  SubstationAllocationDisconnect(
    request: MsgSubstationAllocationDisconnect,
  ): Promise<MsgSubstationAllocationDisconnectResponse>;
  SubstationPlayerConnect(request: MsgSubstationPlayerConnect): Promise<MsgSubstationPlayerConnectResponse>;
  SubstationPlayerDisconnect(request: MsgSubstationPlayerDisconnect): Promise<MsgSubstationPlayerDisconnectResponse>;
  SubstationPlayerMigrate(request: MsgSubstationPlayerMigrate): Promise<MsgSubstationPlayerMigrateResponse>;
  /** To Remove after battle mechanics added */
  Sabotage(request: MsgSabotage): Promise<MsgSabotageResponse>;
}

export const MsgServiceName = "structs.structs.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.AddressRegister = this.AddressRegister.bind(this);
    this.AddressApproveRegister = this.AddressApproveRegister.bind(this);
    this.AddressRevoke = this.AddressRevoke.bind(this);
    this.AllocationCreate = this.AllocationCreate.bind(this);
    this.GuildCreate = this.GuildCreate.bind(this);
    this.GuildUpdateOwnerId = this.GuildUpdateOwnerId.bind(this);
    this.GuildUpdateEntrySubstationId = this.GuildUpdateEntrySubstationId.bind(this);
    this.GuildUpdateEndpoint = this.GuildUpdateEndpoint.bind(this);
    this.GuildUpdateJoinInfusionMinimum = this.GuildUpdateJoinInfusionMinimum.bind(this);
    this.GuildUpdateJoinInfusionMinimumBypassByInvite = this.GuildUpdateJoinInfusionMinimumBypassByInvite.bind(this);
    this.GuildUpdateJoinInfusionMinimumBypassByRequest = this.GuildUpdateJoinInfusionMinimumBypassByRequest.bind(this);
    this.GuildMembershipInvite = this.GuildMembershipInvite.bind(this);
    this.GuildMembershipInviteApprove = this.GuildMembershipInviteApprove.bind(this);
    this.GuildMembershipInviteDeny = this.GuildMembershipInviteDeny.bind(this);
    this.GuildMembershipInviteRevoke = this.GuildMembershipInviteRevoke.bind(this);
    this.GuildMembershipJoin = this.GuildMembershipJoin.bind(this);
    this.GuildMembershipJoinProxy = this.GuildMembershipJoinProxy.bind(this);
    this.GuildMembershipKick = this.GuildMembershipKick.bind(this);
    this.GuildMembershipRequest = this.GuildMembershipRequest.bind(this);
    this.GuildMembershipRequestApprove = this.GuildMembershipRequestApprove.bind(this);
    this.GuildMembershipRequestDeny = this.GuildMembershipRequestDeny.bind(this);
    this.GuildMembershipRequestRevoke = this.GuildMembershipRequestRevoke.bind(this);
    this.PermissionGrantOnAddress = this.PermissionGrantOnAddress.bind(this);
    this.PermissionGrantOnObject = this.PermissionGrantOnObject.bind(this);
    this.PermissionRevokeOnAddress = this.PermissionRevokeOnAddress.bind(this);
    this.PermissionRevokeOnObject = this.PermissionRevokeOnObject.bind(this);
    this.PlanetExplore = this.PlanetExplore.bind(this);
    this.PlayerUpdatePrimaryAddress = this.PlayerUpdatePrimaryAddress.bind(this);
    this.StructActivate = this.StructActivate.bind(this);
    this.StructBuildInitiate = this.StructBuildInitiate.bind(this);
    this.StructBuildComplete = this.StructBuildComplete.bind(this);
    this.StructMineActivate = this.StructMineActivate.bind(this);
    this.StructMineDeactivate = this.StructMineDeactivate.bind(this);
    this.StructMine = this.StructMine.bind(this);
    this.StructRefineActivate = this.StructRefineActivate.bind(this);
    this.StructRefineDeactivate = this.StructRefineDeactivate.bind(this);
    this.StructRefine = this.StructRefine.bind(this);
    this.StructInfuse = this.StructInfuse.bind(this);
    this.SubstationCreate = this.SubstationCreate.bind(this);
    this.SubstationDelete = this.SubstationDelete.bind(this);
    this.SubstationAllocationConnect = this.SubstationAllocationConnect.bind(this);
    this.SubstationAllocationDisconnect = this.SubstationAllocationDisconnect.bind(this);
    this.SubstationPlayerConnect = this.SubstationPlayerConnect.bind(this);
    this.SubstationPlayerDisconnect = this.SubstationPlayerDisconnect.bind(this);
    this.SubstationPlayerMigrate = this.SubstationPlayerMigrate.bind(this);
    this.Sabotage = this.Sabotage.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  AddressRegister(request: MsgAddressRegister): Promise<MsgAddressRegisterResponse> {
    const data = MsgAddressRegister.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressRegister", data);
    return promise.then((data) => MsgAddressRegisterResponse.decode(_m0.Reader.create(data)));
  }

  AddressApproveRegister(request: MsgAddressApproveRegister): Promise<MsgAddressRegisterResponse> {
    const data = MsgAddressApproveRegister.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressApproveRegister", data);
    return promise.then((data) => MsgAddressRegisterResponse.decode(_m0.Reader.create(data)));
  }

  AddressRevoke(request: MsgAddressRevoke): Promise<MsgAddressRevokeResponse> {
    const data = MsgAddressRevoke.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressRevoke", data);
    return promise.then((data) => MsgAddressRevokeResponse.decode(_m0.Reader.create(data)));
  }

  AllocationCreate(request: MsgAllocationCreate): Promise<MsgAllocationCreateResponse> {
    const data = MsgAllocationCreate.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocationCreate", data);
    return promise.then((data) => MsgAllocationCreateResponse.decode(_m0.Reader.create(data)));
  }

  GuildCreate(request: MsgGuildCreate): Promise<MsgGuildCreateResponse> {
    const data = MsgGuildCreate.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildCreate", data);
    return promise.then((data) => MsgGuildCreateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateOwnerId(request: MsgGuildUpdateOwnerId): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateOwnerId.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateOwnerId", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateEntrySubstationId(request: MsgGuildUpdateEntrySubstationId): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateEntrySubstationId.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateEntrySubstationId", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateEndpoint(request: MsgGuildUpdateEndpoint): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateEndpoint.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateEndpoint", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateJoinInfusionMinimum(request: MsgGuildUpdateJoinInfusionMinimum): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateJoinInfusionMinimum.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateJoinInfusionMinimum", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateJoinInfusionMinimumBypassByInvite(
    request: MsgGuildUpdateJoinInfusionMinimumBypassByInvite,
  ): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateJoinInfusionMinimumBypassByInvite.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateJoinInfusionMinimumBypassByInvite", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildUpdateJoinInfusionMinimumBypassByRequest(
    request: MsgGuildUpdateJoinInfusionMinimumBypassByRequest,
  ): Promise<MsgGuildUpdateResponse> {
    const data = MsgGuildUpdateJoinInfusionMinimumBypassByRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildUpdateJoinInfusionMinimumBypassByRequest", data);
    return promise.then((data) => MsgGuildUpdateResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipInvite(request: MsgGuildMembershipInvite): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipInvite.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipInvite", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipInviteApprove(request: MsgGuildMembershipInviteApprove): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipInviteApprove.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipInviteApprove", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipInviteDeny(request: MsgGuildMembershipInviteDeny): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipInviteDeny.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipInviteDeny", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipInviteRevoke(request: MsgGuildMembershipInviteRevoke): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipInviteRevoke.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipInviteRevoke", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipJoin(request: MsgGuildMembershipJoin): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipJoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipJoin", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipJoinProxy(request: MsgGuildMembershipJoinProxy): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipJoinProxy.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipJoinProxy", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipKick(request: MsgGuildMembershipKick): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipKick.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipKick", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipRequest(request: MsgGuildMembershipRequest): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipRequest", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipRequestApprove(request: MsgGuildMembershipRequestApprove): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipRequestApprove.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipRequestApprove", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipRequestDeny(request: MsgGuildMembershipRequestDeny): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipRequestDeny.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipRequestDeny", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipRequestRevoke(request: MsgGuildMembershipRequestRevoke): Promise<MsgGuildMembershipResponse> {
    const data = MsgGuildMembershipRequestRevoke.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipRequestRevoke", data);
    return promise.then((data) => MsgGuildMembershipResponse.decode(_m0.Reader.create(data)));
  }

  PermissionGrantOnAddress(request: MsgPermissionGrantOnAddress): Promise<MsgPermissionResponse> {
    const data = MsgPermissionGrantOnAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionGrantOnAddress", data);
    return promise.then((data) => MsgPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionGrantOnObject(request: MsgPermissionGrantOnObject): Promise<MsgPermissionResponse> {
    const data = MsgPermissionGrantOnObject.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionGrantOnObject", data);
    return promise.then((data) => MsgPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionRevokeOnAddress(request: MsgPermissionRevokeOnAddress): Promise<MsgPermissionResponse> {
    const data = MsgPermissionRevokeOnAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionRevokeOnAddress", data);
    return promise.then((data) => MsgPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionRevokeOnObject(request: MsgPermissionRevokeOnObject): Promise<MsgPermissionResponse> {
    const data = MsgPermissionRevokeOnObject.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionRevokeOnObject", data);
    return promise.then((data) => MsgPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PlanetExplore(request: MsgPlanetExplore): Promise<MsgPlanetExploreResponse> {
    const data = MsgPlanetExplore.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlanetExplore", data);
    return promise.then((data) => MsgPlanetExploreResponse.decode(_m0.Reader.create(data)));
  }

  PlayerUpdatePrimaryAddress(request: MsgPlayerUpdatePrimaryAddress): Promise<MsgPlayerUpdatePrimaryAddressResponse> {
    const data = MsgPlayerUpdatePrimaryAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlayerUpdatePrimaryAddress", data);
    return promise.then((data) => MsgPlayerUpdatePrimaryAddressResponse.decode(_m0.Reader.create(data)));
  }

  StructActivate(request: MsgStructActivate): Promise<MsgStructActivateResponse> {
    const data = MsgStructActivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructActivate", data);
    return promise.then((data) => MsgStructActivateResponse.decode(_m0.Reader.create(data)));
  }

  StructBuildInitiate(request: MsgStructBuildInitiate): Promise<MsgStructBuildInitiateResponse> {
    const data = MsgStructBuildInitiate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructBuildInitiate", data);
    return promise.then((data) => MsgStructBuildInitiateResponse.decode(_m0.Reader.create(data)));
  }

  StructBuildComplete(request: MsgStructBuildComplete): Promise<MsgStructBuildCompleteResponse> {
    const data = MsgStructBuildComplete.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructBuildComplete", data);
    return promise.then((data) => MsgStructBuildCompleteResponse.decode(_m0.Reader.create(data)));
  }

  StructMineActivate(request: MsgStructMineActivate): Promise<MsgStructMineActivateResponse> {
    const data = MsgStructMineActivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructMineActivate", data);
    return promise.then((data) => MsgStructMineActivateResponse.decode(_m0.Reader.create(data)));
  }

  StructMineDeactivate(request: MsgStructMineDeactivate): Promise<MsgStructMineDeactivateResponse> {
    const data = MsgStructMineDeactivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructMineDeactivate", data);
    return promise.then((data) => MsgStructMineDeactivateResponse.decode(_m0.Reader.create(data)));
  }

  StructMine(request: MsgStructMine): Promise<MsgStructMineResponse> {
    const data = MsgStructMine.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructMine", data);
    return promise.then((data) => MsgStructMineResponse.decode(_m0.Reader.create(data)));
  }

  StructRefineActivate(request: MsgStructRefineActivate): Promise<MsgStructRefineActivateResponse> {
    const data = MsgStructRefineActivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructRefineActivate", data);
    return promise.then((data) => MsgStructRefineActivateResponse.decode(_m0.Reader.create(data)));
  }

  StructRefineDeactivate(request: MsgStructRefineDeactivate): Promise<MsgStructRefineDeactivateResponse> {
    const data = MsgStructRefineDeactivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructRefineDeactivate", data);
    return promise.then((data) => MsgStructRefineDeactivateResponse.decode(_m0.Reader.create(data)));
  }

  StructRefine(request: MsgStructRefine): Promise<MsgStructRefineResponse> {
    const data = MsgStructRefine.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructRefine", data);
    return promise.then((data) => MsgStructRefineResponse.decode(_m0.Reader.create(data)));
  }

  StructInfuse(request: MsgStructInfuse): Promise<MsgStructInfuseResponse> {
    const data = MsgStructInfuse.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructInfuse", data);
    return promise.then((data) => MsgStructInfuseResponse.decode(_m0.Reader.create(data)));
  }

  SubstationCreate(request: MsgSubstationCreate): Promise<MsgSubstationCreateResponse> {
    const data = MsgSubstationCreate.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationCreate", data);
    return promise.then((data) => MsgSubstationCreateResponse.decode(_m0.Reader.create(data)));
  }

  SubstationDelete(request: MsgSubstationDelete): Promise<MsgSubstationDeleteResponse> {
    const data = MsgSubstationDelete.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationDelete", data);
    return promise.then((data) => MsgSubstationDeleteResponse.decode(_m0.Reader.create(data)));
  }

  SubstationAllocationConnect(
    request: MsgSubstationAllocationConnect,
  ): Promise<MsgSubstationAllocationConnectResponse> {
    const data = MsgSubstationAllocationConnect.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationAllocationConnect", data);
    return promise.then((data) => MsgSubstationAllocationConnectResponse.decode(_m0.Reader.create(data)));
  }

  SubstationAllocationDisconnect(
    request: MsgSubstationAllocationDisconnect,
  ): Promise<MsgSubstationAllocationDisconnectResponse> {
    const data = MsgSubstationAllocationDisconnect.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationAllocationDisconnect", data);
    return promise.then((data) => MsgSubstationAllocationDisconnectResponse.decode(_m0.Reader.create(data)));
  }

  SubstationPlayerConnect(request: MsgSubstationPlayerConnect): Promise<MsgSubstationPlayerConnectResponse> {
    const data = MsgSubstationPlayerConnect.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationPlayerConnect", data);
    return promise.then((data) => MsgSubstationPlayerConnectResponse.decode(_m0.Reader.create(data)));
  }

  SubstationPlayerDisconnect(request: MsgSubstationPlayerDisconnect): Promise<MsgSubstationPlayerDisconnectResponse> {
    const data = MsgSubstationPlayerDisconnect.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationPlayerDisconnect", data);
    return promise.then((data) => MsgSubstationPlayerDisconnectResponse.decode(_m0.Reader.create(data)));
  }

  SubstationPlayerMigrate(request: MsgSubstationPlayerMigrate): Promise<MsgSubstationPlayerMigrateResponse> {
    const data = MsgSubstationPlayerMigrate.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationPlayerMigrate", data);
    return promise.then((data) => MsgSubstationPlayerMigrateResponse.decode(_m0.Reader.create(data)));
  }

  Sabotage(request: MsgSabotage): Promise<MsgSabotageResponse> {
    const data = MsgSabotage.encode(request).finish();
    const promise = this.rpc.request(this.service, "Sabotage", data);
    return promise.then((data) => MsgSabotageResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
