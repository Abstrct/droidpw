/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AddressAssociation } from "./address";
import { Allocation } from "./allocation";
import { GridRecord } from "./grid";
import { Guild, GuildMembershipApplication } from "./guild";
import { Infusion } from "./infusion";
import { Params } from "./params";
import { PermissionRecord } from "./permission";
import { Planet } from "./planet";
import { Player } from "./player";
import { Reactor } from "./reactor";
import { Struct } from "./struct";
import { Substation } from "./substation";

export const protobufPackage = "structs.structs";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryBlockHeight {
}

export interface QueryBlockHeightResponse {
  blockHeight: number;
}

export interface QueryGetAddressRequest {
  address: string;
}

export interface QueryAllAddressByPlayerRequest {
  playerId: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllAddressRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAddressResponse {
  address: string;
  playerId: string;
  permissions: number;
}

export interface QueryAllAddressResponse {
  address: QueryAddressResponse[];
  pagination: PageResponse | undefined;
}

export interface QueryAllAddressAssociationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAddressAssociationResponse {
  addressAssociation: AddressAssociation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAllocationRequest {
  id: string;
}

export interface QueryGetAllocationResponse {
  Allocation: Allocation | undefined;
}

export interface QueryAllAllocationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAllocationResponse {
  Allocation: Allocation[];
  pagination: PageResponse | undefined;
  status: number[];
}

export interface QueryGetGridRequest {
  attributeId: string;
}

export interface QueryAllGridRequest {
  pagination: PageRequest | undefined;
}

/** Generic Responses for Permissions */
export interface QueryGetGridResponse {
  gridRecord: GridRecord | undefined;
}

export interface QueryAllGridResponse {
  gridRecords: GridRecord[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGuildRequest {
  id: string;
}

export interface QueryGetGuildResponse {
  Guild: Guild | undefined;
}

export interface QueryAllGuildRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGuildResponse {
  Guild: Guild[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGuildMembershipApplicationRequest {
  guildId: string;
  playerId: string;
}

export interface QueryGetGuildMembershipApplicationResponse {
  GuildMembershipApplication: GuildMembershipApplication | undefined;
}

export interface QueryAllGuildMembershipApplicationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGuildMembershipApplicationResponse {
  GuildMembershipApplication: GuildMembershipApplication[];
  pagination: PageResponse | undefined;
}

export interface QueryGetInfusionRequest {
  destinationId: string;
  address: string;
}

export interface QueryGetInfusionResponse {
  Infusion: Infusion | undefined;
}

export interface QueryAllInfusionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInfusionResponse {
  Infusion: Infusion[];
  pagination: PageResponse | undefined;
  status: number[];
}

export interface QueryGetPermissionRequest {
  permissionId: string;
}

export interface QueryAllPermissionByObjectRequest {
  objectId: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllPermissionByPlayerRequest {
  playerId: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllPermissionRequest {
  pagination: PageRequest | undefined;
}

/** Generic Responses for Permissions */
export interface QueryGetPermissionResponse {
  permissionRecord: PermissionRecord | undefined;
}

export interface QueryAllPermissionResponse {
  permissionRecords: PermissionRecord[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPlanetRequest {
  id: string;
}

export interface QueryGetPlanetResponse {
  Planet: Planet | undefined;
}

export interface QueryAllPlanetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPlanetByPlayerRequest {
  playerId: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllPlanetResponse {
  Planet: Planet[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPlayerRequest {
  id: string;
}

export interface QueryGetPlayerResponse {
  Player: Player | undefined;
}

export interface QueryAllPlayerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPlayerResponse {
  Player: Player[];
  pagination: PageResponse | undefined;
}

export interface QueryGetReactorRequest {
  id: string;
}

export interface QueryGetReactorResponse {
  Reactor: Reactor | undefined;
}

export interface QueryAllReactorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllReactorResponse {
  Reactor: Reactor[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStructRequest {
  id: string;
}

export interface QueryGetStructResponse {
  Struct: Struct | undefined;
}

export interface QueryAllStructRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStructResponse {
  Struct: Struct[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSubstationRequest {
  id: string;
}

export interface QueryGetSubstationResponse {
  Substation: Substation | undefined;
}

export interface QueryAllSubstationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSubstationResponse {
  Substation: Substation[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryBlockHeight(): QueryBlockHeight {
  return {};
}

export const QueryBlockHeight = {
  encode(_: QueryBlockHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockHeight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockHeight();
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

  fromJSON(_: any): QueryBlockHeight {
    return {};
  },

  toJSON(_: QueryBlockHeight): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBlockHeight>, I>>(base?: I): QueryBlockHeight {
    return QueryBlockHeight.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlockHeight>, I>>(_: I): QueryBlockHeight {
    const message = createBaseQueryBlockHeight();
    return message;
  },
};

function createBaseQueryBlockHeightResponse(): QueryBlockHeightResponse {
  return { blockHeight: 0 };
}

export const QueryBlockHeightResponse = {
  encode(message: QueryBlockHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBlockHeightResponse {
    return { blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0 };
  },

  toJSON(message: QueryBlockHeightResponse): unknown {
    const obj: any = {};
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBlockHeightResponse>, I>>(base?: I): QueryBlockHeightResponse {
    return QueryBlockHeightResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlockHeightResponse>, I>>(object: I): QueryBlockHeightResponse {
    const message = createBaseQueryBlockHeightResponse();
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseQueryGetAddressRequest(): QueryGetAddressRequest {
  return { address: "" };
}

export const QueryGetAddressRequest = {
  encode(message: QueryGetAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetAddressRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetAddressRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAddressRequest>, I>>(base?: I): QueryGetAddressRequest {
    return QueryGetAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAddressRequest>, I>>(object: I): QueryGetAddressRequest {
    const message = createBaseQueryGetAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAllAddressByPlayerRequest(): QueryAllAddressByPlayerRequest {
  return { playerId: "", pagination: undefined };
}

export const QueryAllAddressByPlayerRequest = {
  encode(message: QueryAllAddressByPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressByPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressByPlayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressByPlayerRequest {
    return {
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAddressByPlayerRequest): unknown {
    const obj: any = {};
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAddressByPlayerRequest>, I>>(base?: I): QueryAllAddressByPlayerRequest {
    return QueryAllAddressByPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressByPlayerRequest>, I>>(
    object: I,
  ): QueryAllAddressByPlayerRequest {
    const message = createBaseQueryAllAddressByPlayerRequest();
    message.playerId = object.playerId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAddressRequest(): QueryAllAddressRequest {
  return { pagination: undefined };
}

export const QueryAllAddressRequest = {
  encode(message: QueryAllAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAddressRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAddressRequest>, I>>(base?: I): QueryAllAddressRequest {
    return QueryAllAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressRequest>, I>>(object: I): QueryAllAddressRequest {
    const message = createBaseQueryAllAddressRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAddressResponse(): QueryAddressResponse {
  return { address: "", playerId: "", permissions: 0 };
}

export const QueryAddressResponse = {
  encode(message: QueryAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.playerId !== "") {
      writer.uint32(18).string(message.playerId);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint64(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressResponse();
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
          if (tag !== 18) {
            break;
          }

          message.playerId = reader.string();
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

  fromJSON(object: any): QueryAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: QueryAddressResponse): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.permissions !== 0) {
      obj.permissions = Math.round(message.permissions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAddressResponse>, I>>(base?: I): QueryAddressResponse {
    return QueryAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAddressResponse>, I>>(object: I): QueryAddressResponse {
    const message = createBaseQueryAddressResponse();
    message.address = object.address ?? "";
    message.playerId = object.playerId ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseQueryAllAddressResponse(): QueryAllAddressResponse {
  return { address: [], pagination: undefined };
}

export const QueryAllAddressResponse = {
  encode(message: QueryAllAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.address) {
      QueryAddressResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address.push(QueryAddressResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressResponse {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => QueryAddressResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAddressResponse): unknown {
    const obj: any = {};
    if (message.address?.length) {
      obj.address = message.address.map((e) => QueryAddressResponse.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAddressResponse>, I>>(base?: I): QueryAllAddressResponse {
    return QueryAllAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressResponse>, I>>(object: I): QueryAllAddressResponse {
    const message = createBaseQueryAllAddressResponse();
    message.address = object.address?.map((e) => QueryAddressResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAddressAssociationRequest(): QueryAllAddressAssociationRequest {
  return { pagination: undefined };
}

export const QueryAllAddressAssociationRequest = {
  encode(message: QueryAllAddressAssociationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressAssociationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressAssociationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressAssociationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAddressAssociationRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAddressAssociationRequest>, I>>(
    base?: I,
  ): QueryAllAddressAssociationRequest {
    return QueryAllAddressAssociationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressAssociationRequest>, I>>(
    object: I,
  ): QueryAllAddressAssociationRequest {
    const message = createBaseQueryAllAddressAssociationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAddressAssociationResponse(): QueryAllAddressAssociationResponse {
  return { addressAssociation: [], pagination: undefined };
}

export const QueryAllAddressAssociationResponse = {
  encode(message: QueryAllAddressAssociationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addressAssociation) {
      AddressAssociation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressAssociationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressAssociationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressAssociation.push(AddressAssociation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressAssociationResponse {
    return {
      addressAssociation: Array.isArray(object?.addressAssociation)
        ? object.addressAssociation.map((e: any) => AddressAssociation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAddressAssociationResponse): unknown {
    const obj: any = {};
    if (message.addressAssociation?.length) {
      obj.addressAssociation = message.addressAssociation.map((e) => AddressAssociation.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAddressAssociationResponse>, I>>(
    base?: I,
  ): QueryAllAddressAssociationResponse {
    return QueryAllAddressAssociationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAddressAssociationResponse>, I>>(
    object: I,
  ): QueryAllAddressAssociationResponse {
    const message = createBaseQueryAllAddressAssociationResponse();
    message.addressAssociation = object.addressAssociation?.map((e) => AddressAssociation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllocationRequest(): QueryGetAllocationRequest {
  return { id: "" };
}

export const QueryGetAllocationRequest = {
  encode(message: QueryGetAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllocationRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetAllocationRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllocationRequest>, I>>(base?: I): QueryGetAllocationRequest {
    return QueryGetAllocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllocationRequest>, I>>(object: I): QueryGetAllocationRequest {
    const message = createBaseQueryGetAllocationRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetAllocationResponse(): QueryGetAllocationResponse {
  return { Allocation: undefined };
}

export const QueryGetAllocationResponse = {
  encode(message: QueryGetAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Allocation !== undefined) {
      Allocation.encode(message.Allocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Allocation = Allocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllocationResponse {
    return { Allocation: isSet(object.Allocation) ? Allocation.fromJSON(object.Allocation) : undefined };
  },

  toJSON(message: QueryGetAllocationResponse): unknown {
    const obj: any = {};
    if (message.Allocation !== undefined) {
      obj.Allocation = Allocation.toJSON(message.Allocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllocationResponse>, I>>(base?: I): QueryGetAllocationResponse {
    return QueryGetAllocationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllocationResponse>, I>>(object: I): QueryGetAllocationResponse {
    const message = createBaseQueryGetAllocationResponse();
    message.Allocation = (object.Allocation !== undefined && object.Allocation !== null)
      ? Allocation.fromPartial(object.Allocation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAllocationRequest(): QueryAllAllocationRequest {
  return { pagination: undefined };
}

export const QueryAllAllocationRequest = {
  encode(message: QueryAllAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAllocationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAllocationRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAllocationRequest>, I>>(base?: I): QueryAllAllocationRequest {
    return QueryAllAllocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAllocationRequest>, I>>(object: I): QueryAllAllocationRequest {
    const message = createBaseQueryAllAllocationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAllocationResponse(): QueryAllAllocationResponse {
  return { Allocation: [], pagination: undefined, status: [] };
}

export const QueryAllAllocationResponse = {
  encode(message: QueryAllAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Allocation) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.status) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Allocation.push(Allocation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag === 24) {
            message.status.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAllocationResponse {
    return {
      Allocation: Array.isArray(object?.Allocation) ? object.Allocation.map((e: any) => Allocation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: QueryAllAllocationResponse): unknown {
    const obj: any = {};
    if (message.Allocation?.length) {
      obj.Allocation = message.Allocation.map((e) => Allocation.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.status?.length) {
      obj.status = message.status.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAllocationResponse>, I>>(base?: I): QueryAllAllocationResponse {
    return QueryAllAllocationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAllocationResponse>, I>>(object: I): QueryAllAllocationResponse {
    const message = createBaseQueryAllAllocationResponse();
    message.Allocation = object.Allocation?.map((e) => Allocation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.status = object.status?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryGetGridRequest(): QueryGetGridRequest {
  return { attributeId: "" };
}

export const QueryGetGridRequest = {
  encode(message: QueryGetGridRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeId !== "") {
      writer.uint32(10).string(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGridRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGridRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetGridRequest {
    return { attributeId: isSet(object.attributeId) ? String(object.attributeId) : "" };
  },

  toJSON(message: QueryGetGridRequest): unknown {
    const obj: any = {};
    if (message.attributeId !== "") {
      obj.attributeId = message.attributeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGridRequest>, I>>(base?: I): QueryGetGridRequest {
    return QueryGetGridRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGridRequest>, I>>(object: I): QueryGetGridRequest {
    const message = createBaseQueryGetGridRequest();
    message.attributeId = object.attributeId ?? "";
    return message;
  },
};

function createBaseQueryAllGridRequest(): QueryAllGridRequest {
  return { pagination: undefined };
}

export const QueryAllGridRequest = {
  encode(message: QueryAllGridRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGridRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGridRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGridRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGridRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGridRequest>, I>>(base?: I): QueryAllGridRequest {
    return QueryAllGridRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGridRequest>, I>>(object: I): QueryAllGridRequest {
    const message = createBaseQueryAllGridRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetGridResponse(): QueryGetGridResponse {
  return { gridRecord: undefined };
}

export const QueryGetGridResponse = {
  encode(message: QueryGetGridResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gridRecord !== undefined) {
      GridRecord.encode(message.gridRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGridResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGridResponse();
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

  fromJSON(object: any): QueryGetGridResponse {
    return { gridRecord: isSet(object.gridRecord) ? GridRecord.fromJSON(object.gridRecord) : undefined };
  },

  toJSON(message: QueryGetGridResponse): unknown {
    const obj: any = {};
    if (message.gridRecord !== undefined) {
      obj.gridRecord = GridRecord.toJSON(message.gridRecord);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGridResponse>, I>>(base?: I): QueryGetGridResponse {
    return QueryGetGridResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGridResponse>, I>>(object: I): QueryGetGridResponse {
    const message = createBaseQueryGetGridResponse();
    message.gridRecord = (object.gridRecord !== undefined && object.gridRecord !== null)
      ? GridRecord.fromPartial(object.gridRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGridResponse(): QueryAllGridResponse {
  return { gridRecords: [], pagination: undefined };
}

export const QueryAllGridResponse = {
  encode(message: QueryAllGridResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gridRecords) {
      GridRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGridResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGridResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gridRecords.push(GridRecord.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGridResponse {
    return {
      gridRecords: Array.isArray(object?.gridRecords) ? object.gridRecords.map((e: any) => GridRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGridResponse): unknown {
    const obj: any = {};
    if (message.gridRecords?.length) {
      obj.gridRecords = message.gridRecords.map((e) => GridRecord.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGridResponse>, I>>(base?: I): QueryAllGridResponse {
    return QueryAllGridResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGridResponse>, I>>(object: I): QueryAllGridResponse {
    const message = createBaseQueryAllGridResponse();
    message.gridRecords = object.gridRecords?.map((e) => GridRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetGuildRequest(): QueryGetGuildRequest {
  return { id: "" };
}

export const QueryGetGuildRequest = {
  encode(message: QueryGetGuildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuildRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuildRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetGuildRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGuildRequest>, I>>(base?: I): QueryGetGuildRequest {
    return QueryGetGuildRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGuildRequest>, I>>(object: I): QueryGetGuildRequest {
    const message = createBaseQueryGetGuildRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetGuildResponse(): QueryGetGuildResponse {
  return { Guild: undefined };
}

export const QueryGetGuildResponse = {
  encode(message: QueryGetGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Guild !== undefined) {
      Guild.encode(message.Guild, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Guild = Guild.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuildResponse {
    return { Guild: isSet(object.Guild) ? Guild.fromJSON(object.Guild) : undefined };
  },

  toJSON(message: QueryGetGuildResponse): unknown {
    const obj: any = {};
    if (message.Guild !== undefined) {
      obj.Guild = Guild.toJSON(message.Guild);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGuildResponse>, I>>(base?: I): QueryGetGuildResponse {
    return QueryGetGuildResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGuildResponse>, I>>(object: I): QueryGetGuildResponse {
    const message = createBaseQueryGetGuildResponse();
    message.Guild = (object.Guild !== undefined && object.Guild !== null) ? Guild.fromPartial(object.Guild) : undefined;
    return message;
  },
};

function createBaseQueryAllGuildRequest(): QueryAllGuildRequest {
  return { pagination: undefined };
}

export const QueryAllGuildRequest = {
  encode(message: QueryAllGuildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuildRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuildRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGuildRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGuildRequest>, I>>(base?: I): QueryAllGuildRequest {
    return QueryAllGuildRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGuildRequest>, I>>(object: I): QueryAllGuildRequest {
    const message = createBaseQueryAllGuildRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGuildResponse(): QueryAllGuildResponse {
  return { Guild: [], pagination: undefined };
}

export const QueryAllGuildResponse = {
  encode(message: QueryAllGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Guild) {
      Guild.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Guild.push(Guild.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuildResponse {
    return {
      Guild: Array.isArray(object?.Guild) ? object.Guild.map((e: any) => Guild.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGuildResponse): unknown {
    const obj: any = {};
    if (message.Guild?.length) {
      obj.Guild = message.Guild.map((e) => Guild.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGuildResponse>, I>>(base?: I): QueryAllGuildResponse {
    return QueryAllGuildResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGuildResponse>, I>>(object: I): QueryAllGuildResponse {
    const message = createBaseQueryAllGuildResponse();
    message.Guild = object.Guild?.map((e) => Guild.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetGuildMembershipApplicationRequest(): QueryGetGuildMembershipApplicationRequest {
  return { guildId: "", playerId: "" };
}

export const QueryGetGuildMembershipApplicationRequest = {
  encode(message: QueryGetGuildMembershipApplicationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== "") {
      writer.uint32(10).string(message.guildId);
    }
    if (message.playerId !== "") {
      writer.uint32(18).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuildMembershipApplicationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildMembershipApplicationRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuildMembershipApplicationRequest {
    return {
      guildId: isSet(object.guildId) ? String(object.guildId) : "",
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
    };
  },

  toJSON(message: QueryGetGuildMembershipApplicationRequest): unknown {
    const obj: any = {};
    if (message.guildId !== "") {
      obj.guildId = message.guildId;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGuildMembershipApplicationRequest>, I>>(
    base?: I,
  ): QueryGetGuildMembershipApplicationRequest {
    return QueryGetGuildMembershipApplicationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGuildMembershipApplicationRequest>, I>>(
    object: I,
  ): QueryGetGuildMembershipApplicationRequest {
    const message = createBaseQueryGetGuildMembershipApplicationRequest();
    message.guildId = object.guildId ?? "";
    message.playerId = object.playerId ?? "";
    return message;
  },
};

function createBaseQueryGetGuildMembershipApplicationResponse(): QueryGetGuildMembershipApplicationResponse {
  return { GuildMembershipApplication: undefined };
}

export const QueryGetGuildMembershipApplicationResponse = {
  encode(message: QueryGetGuildMembershipApplicationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.GuildMembershipApplication !== undefined) {
      GuildMembershipApplication.encode(message.GuildMembershipApplication, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuildMembershipApplicationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildMembershipApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.GuildMembershipApplication = GuildMembershipApplication.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuildMembershipApplicationResponse {
    return {
      GuildMembershipApplication: isSet(object.GuildMembershipApplication)
        ? GuildMembershipApplication.fromJSON(object.GuildMembershipApplication)
        : undefined,
    };
  },

  toJSON(message: QueryGetGuildMembershipApplicationResponse): unknown {
    const obj: any = {};
    if (message.GuildMembershipApplication !== undefined) {
      obj.GuildMembershipApplication = GuildMembershipApplication.toJSON(message.GuildMembershipApplication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetGuildMembershipApplicationResponse>, I>>(
    base?: I,
  ): QueryGetGuildMembershipApplicationResponse {
    return QueryGetGuildMembershipApplicationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetGuildMembershipApplicationResponse>, I>>(
    object: I,
  ): QueryGetGuildMembershipApplicationResponse {
    const message = createBaseQueryGetGuildMembershipApplicationResponse();
    message.GuildMembershipApplication =
      (object.GuildMembershipApplication !== undefined && object.GuildMembershipApplication !== null)
        ? GuildMembershipApplication.fromPartial(object.GuildMembershipApplication)
        : undefined;
    return message;
  },
};

function createBaseQueryAllGuildMembershipApplicationRequest(): QueryAllGuildMembershipApplicationRequest {
  return { pagination: undefined };
}

export const QueryAllGuildMembershipApplicationRequest = {
  encode(message: QueryAllGuildMembershipApplicationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuildMembershipApplicationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildMembershipApplicationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuildMembershipApplicationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGuildMembershipApplicationRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGuildMembershipApplicationRequest>, I>>(
    base?: I,
  ): QueryAllGuildMembershipApplicationRequest {
    return QueryAllGuildMembershipApplicationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGuildMembershipApplicationRequest>, I>>(
    object: I,
  ): QueryAllGuildMembershipApplicationRequest {
    const message = createBaseQueryAllGuildMembershipApplicationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGuildMembershipApplicationResponse(): QueryAllGuildMembershipApplicationResponse {
  return { GuildMembershipApplication: [], pagination: undefined };
}

export const QueryAllGuildMembershipApplicationResponse = {
  encode(message: QueryAllGuildMembershipApplicationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.GuildMembershipApplication) {
      GuildMembershipApplication.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuildMembershipApplicationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildMembershipApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.GuildMembershipApplication.push(GuildMembershipApplication.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuildMembershipApplicationResponse {
    return {
      GuildMembershipApplication: Array.isArray(object?.GuildMembershipApplication)
        ? object.GuildMembershipApplication.map((e: any) => GuildMembershipApplication.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGuildMembershipApplicationResponse): unknown {
    const obj: any = {};
    if (message.GuildMembershipApplication?.length) {
      obj.GuildMembershipApplication = message.GuildMembershipApplication.map((e) =>
        GuildMembershipApplication.toJSON(e)
      );
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGuildMembershipApplicationResponse>, I>>(
    base?: I,
  ): QueryAllGuildMembershipApplicationResponse {
    return QueryAllGuildMembershipApplicationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllGuildMembershipApplicationResponse>, I>>(
    object: I,
  ): QueryAllGuildMembershipApplicationResponse {
    const message = createBaseQueryAllGuildMembershipApplicationResponse();
    message.GuildMembershipApplication =
      object.GuildMembershipApplication?.map((e) => GuildMembershipApplication.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetInfusionRequest(): QueryGetInfusionRequest {
  return { destinationId: "", address: "" };
}

export const QueryGetInfusionRequest = {
  encode(message: QueryGetInfusionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destinationId !== "") {
      writer.uint32(10).string(message.destinationId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInfusionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInfusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destinationId = reader.string();
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

  fromJSON(object: any): QueryGetInfusionRequest {
    return {
      destinationId: isSet(object.destinationId) ? String(object.destinationId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryGetInfusionRequest): unknown {
    const obj: any = {};
    if (message.destinationId !== "") {
      obj.destinationId = message.destinationId;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetInfusionRequest>, I>>(base?: I): QueryGetInfusionRequest {
    return QueryGetInfusionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetInfusionRequest>, I>>(object: I): QueryGetInfusionRequest {
    const message = createBaseQueryGetInfusionRequest();
    message.destinationId = object.destinationId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetInfusionResponse(): QueryGetInfusionResponse {
  return { Infusion: undefined };
}

export const QueryGetInfusionResponse = {
  encode(message: QueryGetInfusionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Infusion !== undefined) {
      Infusion.encode(message.Infusion, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInfusionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInfusionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Infusion = Infusion.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetInfusionResponse {
    return { Infusion: isSet(object.Infusion) ? Infusion.fromJSON(object.Infusion) : undefined };
  },

  toJSON(message: QueryGetInfusionResponse): unknown {
    const obj: any = {};
    if (message.Infusion !== undefined) {
      obj.Infusion = Infusion.toJSON(message.Infusion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetInfusionResponse>, I>>(base?: I): QueryGetInfusionResponse {
    return QueryGetInfusionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetInfusionResponse>, I>>(object: I): QueryGetInfusionResponse {
    const message = createBaseQueryGetInfusionResponse();
    message.Infusion = (object.Infusion !== undefined && object.Infusion !== null)
      ? Infusion.fromPartial(object.Infusion)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInfusionRequest(): QueryAllInfusionRequest {
  return { pagination: undefined };
}

export const QueryAllInfusionRequest = {
  encode(message: QueryAllInfusionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInfusionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInfusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllInfusionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInfusionRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllInfusionRequest>, I>>(base?: I): QueryAllInfusionRequest {
    return QueryAllInfusionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllInfusionRequest>, I>>(object: I): QueryAllInfusionRequest {
    const message = createBaseQueryAllInfusionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInfusionResponse(): QueryAllInfusionResponse {
  return { Infusion: [], pagination: undefined, status: [] };
}

export const QueryAllInfusionResponse = {
  encode(message: QueryAllInfusionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Infusion) {
      Infusion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.status) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInfusionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInfusionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Infusion.push(Infusion.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag === 24) {
            message.status.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllInfusionResponse {
    return {
      Infusion: Array.isArray(object?.Infusion) ? object.Infusion.map((e: any) => Infusion.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: QueryAllInfusionResponse): unknown {
    const obj: any = {};
    if (message.Infusion?.length) {
      obj.Infusion = message.Infusion.map((e) => Infusion.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.status?.length) {
      obj.status = message.status.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllInfusionResponse>, I>>(base?: I): QueryAllInfusionResponse {
    return QueryAllInfusionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllInfusionResponse>, I>>(object: I): QueryAllInfusionResponse {
    const message = createBaseQueryAllInfusionResponse();
    message.Infusion = object.Infusion?.map((e) => Infusion.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.status = object.status?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryGetPermissionRequest(): QueryGetPermissionRequest {
  return { permissionId: "" };
}

export const QueryGetPermissionRequest = {
  encode(message: QueryGetPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permissionId !== "") {
      writer.uint32(10).string(message.permissionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPermissionRequest {
    return { permissionId: isSet(object.permissionId) ? String(object.permissionId) : "" };
  },

  toJSON(message: QueryGetPermissionRequest): unknown {
    const obj: any = {};
    if (message.permissionId !== "") {
      obj.permissionId = message.permissionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPermissionRequest>, I>>(base?: I): QueryGetPermissionRequest {
    return QueryGetPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPermissionRequest>, I>>(object: I): QueryGetPermissionRequest {
    const message = createBaseQueryGetPermissionRequest();
    message.permissionId = object.permissionId ?? "";
    return message;
  },
};

function createBaseQueryAllPermissionByObjectRequest(): QueryAllPermissionByObjectRequest {
  return { objectId: "", pagination: undefined };
}

export const QueryAllPermissionByObjectRequest = {
  encode(message: QueryAllPermissionByObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.objectId !== "") {
      writer.uint32(10).string(message.objectId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPermissionByObjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPermissionByObjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.objectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionByObjectRequest {
    return {
      objectId: isSet(object.objectId) ? String(object.objectId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPermissionByObjectRequest): unknown {
    const obj: any = {};
    if (message.objectId !== "") {
      obj.objectId = message.objectId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPermissionByObjectRequest>, I>>(
    base?: I,
  ): QueryAllPermissionByObjectRequest {
    return QueryAllPermissionByObjectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPermissionByObjectRequest>, I>>(
    object: I,
  ): QueryAllPermissionByObjectRequest {
    const message = createBaseQueryAllPermissionByObjectRequest();
    message.objectId = object.objectId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPermissionByPlayerRequest(): QueryAllPermissionByPlayerRequest {
  return { playerId: "", pagination: undefined };
}

export const QueryAllPermissionByPlayerRequest = {
  encode(message: QueryAllPermissionByPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPermissionByPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPermissionByPlayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionByPlayerRequest {
    return {
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPermissionByPlayerRequest): unknown {
    const obj: any = {};
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPermissionByPlayerRequest>, I>>(
    base?: I,
  ): QueryAllPermissionByPlayerRequest {
    return QueryAllPermissionByPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPermissionByPlayerRequest>, I>>(
    object: I,
  ): QueryAllPermissionByPlayerRequest {
    const message = createBaseQueryAllPermissionByPlayerRequest();
    message.playerId = object.playerId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPermissionRequest(): QueryAllPermissionRequest {
  return { pagination: undefined };
}

export const QueryAllPermissionRequest = {
  encode(message: QueryAllPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPermissionRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPermissionRequest>, I>>(base?: I): QueryAllPermissionRequest {
    return QueryAllPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPermissionRequest>, I>>(object: I): QueryAllPermissionRequest {
    const message = createBaseQueryAllPermissionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPermissionResponse(): QueryGetPermissionResponse {
  return { permissionRecord: undefined };
}

export const QueryGetPermissionResponse = {
  encode(message: QueryGetPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permissionRecord !== undefined) {
      PermissionRecord.encode(message.permissionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPermissionResponse();
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

  fromJSON(object: any): QueryGetPermissionResponse {
    return {
      permissionRecord: isSet(object.permissionRecord) ? PermissionRecord.fromJSON(object.permissionRecord) : undefined,
    };
  },

  toJSON(message: QueryGetPermissionResponse): unknown {
    const obj: any = {};
    if (message.permissionRecord !== undefined) {
      obj.permissionRecord = PermissionRecord.toJSON(message.permissionRecord);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPermissionResponse>, I>>(base?: I): QueryGetPermissionResponse {
    return QueryGetPermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPermissionResponse>, I>>(object: I): QueryGetPermissionResponse {
    const message = createBaseQueryGetPermissionResponse();
    message.permissionRecord = (object.permissionRecord !== undefined && object.permissionRecord !== null)
      ? PermissionRecord.fromPartial(object.permissionRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPermissionResponse(): QueryAllPermissionResponse {
  return { permissionRecords: [], pagination: undefined };
}

export const QueryAllPermissionResponse = {
  encode(message: QueryAllPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissionRecords) {
      PermissionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissionRecords.push(PermissionRecord.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPermissionResponse {
    return {
      permissionRecords: Array.isArray(object?.permissionRecords)
        ? object.permissionRecords.map((e: any) => PermissionRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPermissionResponse): unknown {
    const obj: any = {};
    if (message.permissionRecords?.length) {
      obj.permissionRecords = message.permissionRecords.map((e) => PermissionRecord.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPermissionResponse>, I>>(base?: I): QueryAllPermissionResponse {
    return QueryAllPermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPermissionResponse>, I>>(object: I): QueryAllPermissionResponse {
    const message = createBaseQueryAllPermissionResponse();
    message.permissionRecords = object.permissionRecords?.map((e) => PermissionRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPlanetRequest(): QueryGetPlanetRequest {
  return { id: "" };
}

export const QueryGetPlanetRequest = {
  encode(message: QueryGetPlanetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPlanetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPlanetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlanetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetPlanetRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPlanetRequest>, I>>(base?: I): QueryGetPlanetRequest {
    return QueryGetPlanetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPlanetRequest>, I>>(object: I): QueryGetPlanetRequest {
    const message = createBaseQueryGetPlanetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetPlanetResponse(): QueryGetPlanetResponse {
  return { Planet: undefined };
}

export const QueryGetPlanetResponse = {
  encode(message: QueryGetPlanetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Planet !== undefined) {
      Planet.encode(message.Planet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPlanetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPlanetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Planet = Planet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlanetResponse {
    return { Planet: isSet(object.Planet) ? Planet.fromJSON(object.Planet) : undefined };
  },

  toJSON(message: QueryGetPlanetResponse): unknown {
    const obj: any = {};
    if (message.Planet !== undefined) {
      obj.Planet = Planet.toJSON(message.Planet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPlanetResponse>, I>>(base?: I): QueryGetPlanetResponse {
    return QueryGetPlanetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPlanetResponse>, I>>(object: I): QueryGetPlanetResponse {
    const message = createBaseQueryGetPlanetResponse();
    message.Planet = (object.Planet !== undefined && object.Planet !== null)
      ? Planet.fromPartial(object.Planet)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPlanetRequest(): QueryAllPlanetRequest {
  return { pagination: undefined };
}

export const QueryAllPlanetRequest = {
  encode(message: QueryAllPlanetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPlanetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPlanetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlanetRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPlanetRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPlanetRequest>, I>>(base?: I): QueryAllPlanetRequest {
    return QueryAllPlanetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPlanetRequest>, I>>(object: I): QueryAllPlanetRequest {
    const message = createBaseQueryAllPlanetRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPlanetByPlayerRequest(): QueryAllPlanetByPlayerRequest {
  return { playerId: "", pagination: undefined };
}

export const QueryAllPlanetByPlayerRequest = {
  encode(message: QueryAllPlanetByPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPlanetByPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPlanetByPlayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlanetByPlayerRequest {
    return {
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPlanetByPlayerRequest): unknown {
    const obj: any = {};
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPlanetByPlayerRequest>, I>>(base?: I): QueryAllPlanetByPlayerRequest {
    return QueryAllPlanetByPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPlanetByPlayerRequest>, I>>(
    object: I,
  ): QueryAllPlanetByPlayerRequest {
    const message = createBaseQueryAllPlanetByPlayerRequest();
    message.playerId = object.playerId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPlanetResponse(): QueryAllPlanetResponse {
  return { Planet: [], pagination: undefined };
}

export const QueryAllPlanetResponse = {
  encode(message: QueryAllPlanetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Planet) {
      Planet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPlanetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPlanetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Planet.push(Planet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlanetResponse {
    return {
      Planet: Array.isArray(object?.Planet) ? object.Planet.map((e: any) => Planet.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPlanetResponse): unknown {
    const obj: any = {};
    if (message.Planet?.length) {
      obj.Planet = message.Planet.map((e) => Planet.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPlanetResponse>, I>>(base?: I): QueryAllPlanetResponse {
    return QueryAllPlanetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPlanetResponse>, I>>(object: I): QueryAllPlanetResponse {
    const message = createBaseQueryAllPlanetResponse();
    message.Planet = object.Planet?.map((e) => Planet.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPlayerRequest(): QueryGetPlayerRequest {
  return { id: "" };
}

export const QueryGetPlayerRequest = {
  encode(message: QueryGetPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPlayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetPlayerRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPlayerRequest>, I>>(base?: I): QueryGetPlayerRequest {
    return QueryGetPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPlayerRequest>, I>>(object: I): QueryGetPlayerRequest {
    const message = createBaseQueryGetPlayerRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetPlayerResponse(): QueryGetPlayerResponse {
  return { Player: undefined };
}

export const QueryGetPlayerResponse = {
  encode(message: QueryGetPlayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Player !== undefined) {
      Player.encode(message.Player, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPlayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPlayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Player = Player.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerResponse {
    return { Player: isSet(object.Player) ? Player.fromJSON(object.Player) : undefined };
  },

  toJSON(message: QueryGetPlayerResponse): unknown {
    const obj: any = {};
    if (message.Player !== undefined) {
      obj.Player = Player.toJSON(message.Player);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPlayerResponse>, I>>(base?: I): QueryGetPlayerResponse {
    return QueryGetPlayerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPlayerResponse>, I>>(object: I): QueryGetPlayerResponse {
    const message = createBaseQueryGetPlayerResponse();
    message.Player = (object.Player !== undefined && object.Player !== null)
      ? Player.fromPartial(object.Player)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPlayerRequest(): QueryAllPlayerRequest {
  return { pagination: undefined };
}

export const QueryAllPlayerRequest = {
  encode(message: QueryAllPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPlayerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPlayerRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPlayerRequest>, I>>(base?: I): QueryAllPlayerRequest {
    return QueryAllPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPlayerRequest>, I>>(object: I): QueryAllPlayerRequest {
    const message = createBaseQueryAllPlayerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPlayerResponse(): QueryAllPlayerResponse {
  return { Player: [], pagination: undefined };
}

export const QueryAllPlayerResponse = {
  encode(message: QueryAllPlayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Player) {
      Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPlayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPlayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Player.push(Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerResponse {
    return {
      Player: Array.isArray(object?.Player) ? object.Player.map((e: any) => Player.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPlayerResponse): unknown {
    const obj: any = {};
    if (message.Player?.length) {
      obj.Player = message.Player.map((e) => Player.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPlayerResponse>, I>>(base?: I): QueryAllPlayerResponse {
    return QueryAllPlayerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPlayerResponse>, I>>(object: I): QueryAllPlayerResponse {
    const message = createBaseQueryAllPlayerResponse();
    message.Player = object.Player?.map((e) => Player.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetReactorRequest(): QueryGetReactorRequest {
  return { id: "" };
}

export const QueryGetReactorRequest = {
  encode(message: QueryGetReactorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReactorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReactorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReactorRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetReactorRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReactorRequest>, I>>(base?: I): QueryGetReactorRequest {
    return QueryGetReactorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReactorRequest>, I>>(object: I): QueryGetReactorRequest {
    const message = createBaseQueryGetReactorRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetReactorResponse(): QueryGetReactorResponse {
  return { Reactor: undefined };
}

export const QueryGetReactorResponse = {
  encode(message: QueryGetReactorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Reactor !== undefined) {
      Reactor.encode(message.Reactor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReactorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReactorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Reactor = Reactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReactorResponse {
    return { Reactor: isSet(object.Reactor) ? Reactor.fromJSON(object.Reactor) : undefined };
  },

  toJSON(message: QueryGetReactorResponse): unknown {
    const obj: any = {};
    if (message.Reactor !== undefined) {
      obj.Reactor = Reactor.toJSON(message.Reactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReactorResponse>, I>>(base?: I): QueryGetReactorResponse {
    return QueryGetReactorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReactorResponse>, I>>(object: I): QueryGetReactorResponse {
    const message = createBaseQueryGetReactorResponse();
    message.Reactor = (object.Reactor !== undefined && object.Reactor !== null)
      ? Reactor.fromPartial(object.Reactor)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReactorRequest(): QueryAllReactorRequest {
  return { pagination: undefined };
}

export const QueryAllReactorRequest = {
  encode(message: QueryAllReactorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReactorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReactorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllReactorRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllReactorRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllReactorRequest>, I>>(base?: I): QueryAllReactorRequest {
    return QueryAllReactorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllReactorRequest>, I>>(object: I): QueryAllReactorRequest {
    const message = createBaseQueryAllReactorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReactorResponse(): QueryAllReactorResponse {
  return { Reactor: [], pagination: undefined };
}

export const QueryAllReactorResponse = {
  encode(message: QueryAllReactorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Reactor) {
      Reactor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReactorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReactorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Reactor.push(Reactor.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllReactorResponse {
    return {
      Reactor: Array.isArray(object?.Reactor) ? object.Reactor.map((e: any) => Reactor.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllReactorResponse): unknown {
    const obj: any = {};
    if (message.Reactor?.length) {
      obj.Reactor = message.Reactor.map((e) => Reactor.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllReactorResponse>, I>>(base?: I): QueryAllReactorResponse {
    return QueryAllReactorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllReactorResponse>, I>>(object: I): QueryAllReactorResponse {
    const message = createBaseQueryAllReactorResponse();
    message.Reactor = object.Reactor?.map((e) => Reactor.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStructRequest(): QueryGetStructRequest {
  return { id: "" };
}

export const QueryGetStructRequest = {
  encode(message: QueryGetStructRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStructRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStructRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetStructRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetStructRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetStructRequest>, I>>(base?: I): QueryGetStructRequest {
    return QueryGetStructRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStructRequest>, I>>(object: I): QueryGetStructRequest {
    const message = createBaseQueryGetStructRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetStructResponse(): QueryGetStructResponse {
  return { Struct: undefined };
}

export const QueryGetStructResponse = {
  encode(message: QueryGetStructResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Struct !== undefined) {
      Struct.encode(message.Struct, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStructResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStructResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Struct = Struct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetStructResponse {
    return { Struct: isSet(object.Struct) ? Struct.fromJSON(object.Struct) : undefined };
  },

  toJSON(message: QueryGetStructResponse): unknown {
    const obj: any = {};
    if (message.Struct !== undefined) {
      obj.Struct = Struct.toJSON(message.Struct);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetStructResponse>, I>>(base?: I): QueryGetStructResponse {
    return QueryGetStructResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStructResponse>, I>>(object: I): QueryGetStructResponse {
    const message = createBaseQueryGetStructResponse();
    message.Struct = (object.Struct !== undefined && object.Struct !== null)
      ? Struct.fromPartial(object.Struct)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStructRequest(): QueryAllStructRequest {
  return { pagination: undefined };
}

export const QueryAllStructRequest = {
  encode(message: QueryAllStructRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStructRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStructRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllStructRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStructRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStructRequest>, I>>(base?: I): QueryAllStructRequest {
    return QueryAllStructRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStructRequest>, I>>(object: I): QueryAllStructRequest {
    const message = createBaseQueryAllStructRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStructResponse(): QueryAllStructResponse {
  return { Struct: [], pagination: undefined };
}

export const QueryAllStructResponse = {
  encode(message: QueryAllStructResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Struct) {
      Struct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStructResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStructResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Struct.push(Struct.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllStructResponse {
    return {
      Struct: Array.isArray(object?.Struct) ? object.Struct.map((e: any) => Struct.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStructResponse): unknown {
    const obj: any = {};
    if (message.Struct?.length) {
      obj.Struct = message.Struct.map((e) => Struct.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllStructResponse>, I>>(base?: I): QueryAllStructResponse {
    return QueryAllStructResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStructResponse>, I>>(object: I): QueryAllStructResponse {
    const message = createBaseQueryAllStructResponse();
    message.Struct = object.Struct?.map((e) => Struct.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSubstationRequest(): QueryGetSubstationRequest {
  return { id: "" };
}

export const QueryGetSubstationRequest = {
  encode(message: QueryGetSubstationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSubstationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubstationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSubstationRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetSubstationRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSubstationRequest>, I>>(base?: I): QueryGetSubstationRequest {
    return QueryGetSubstationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSubstationRequest>, I>>(object: I): QueryGetSubstationRequest {
    const message = createBaseQueryGetSubstationRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetSubstationResponse(): QueryGetSubstationResponse {
  return { Substation: undefined };
}

export const QueryGetSubstationResponse = {
  encode(message: QueryGetSubstationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Substation !== undefined) {
      Substation.encode(message.Substation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSubstationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubstationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Substation = Substation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSubstationResponse {
    return { Substation: isSet(object.Substation) ? Substation.fromJSON(object.Substation) : undefined };
  },

  toJSON(message: QueryGetSubstationResponse): unknown {
    const obj: any = {};
    if (message.Substation !== undefined) {
      obj.Substation = Substation.toJSON(message.Substation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSubstationResponse>, I>>(base?: I): QueryGetSubstationResponse {
    return QueryGetSubstationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSubstationResponse>, I>>(object: I): QueryGetSubstationResponse {
    const message = createBaseQueryGetSubstationResponse();
    message.Substation = (object.Substation !== undefined && object.Substation !== null)
      ? Substation.fromPartial(object.Substation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSubstationRequest(): QueryAllSubstationRequest {
  return { pagination: undefined };
}

export const QueryAllSubstationRequest = {
  encode(message: QueryAllSubstationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSubstationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSubstationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllSubstationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllSubstationRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllSubstationRequest>, I>>(base?: I): QueryAllSubstationRequest {
    return QueryAllSubstationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllSubstationRequest>, I>>(object: I): QueryAllSubstationRequest {
    const message = createBaseQueryAllSubstationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSubstationResponse(): QueryAllSubstationResponse {
  return { Substation: [], pagination: undefined };
}

export const QueryAllSubstationResponse = {
  encode(message: QueryAllSubstationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Substation) {
      Substation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSubstationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSubstationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Substation.push(Substation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllSubstationResponse {
    return {
      Substation: Array.isArray(object?.Substation) ? object.Substation.map((e: any) => Substation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllSubstationResponse): unknown {
    const obj: any = {};
    if (message.Substation?.length) {
      obj.Substation = message.Substation.map((e) => Substation.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllSubstationResponse>, I>>(base?: I): QueryAllSubstationResponse {
    return QueryAllSubstationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllSubstationResponse>, I>>(object: I): QueryAllSubstationResponse {
    const message = createBaseQueryAllSubstationResponse();
    message.Substation = object.Substation?.map((e) => Substation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  GetBlockHeight(request: QueryBlockHeight): Promise<QueryBlockHeightResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries for Addresses. */
  Address(request: QueryGetAddressRequest): Promise<QueryAddressResponse>;
  AddressAll(request: QueryAllAddressRequest): Promise<QueryAllAddressResponse>;
  AddressAllByPlayer(request: QueryAllAddressByPlayerRequest): Promise<QueryAllAddressResponse>;
  AddressAssociationAll(request: QueryAllAddressAssociationRequest): Promise<QueryAllAddressAssociationResponse>;
  /** Queries a list of Allocation items. */
  Allocation(request: QueryGetAllocationRequest): Promise<QueryGetAllocationResponse>;
  AllocationAll(request: QueryAllAllocationRequest): Promise<QueryAllAllocationResponse>;
  /** Queries a specific Grid details */
  Grid(request: QueryGetGridRequest): Promise<QueryGetGridResponse>;
  /** Queries a list of all Grid details */
  GridAll(request: QueryAllGridRequest): Promise<QueryAllGridResponse>;
  /** Queries a list of Guild items. */
  Guild(request: QueryGetGuildRequest): Promise<QueryGetGuildResponse>;
  GuildAll(request: QueryAllGuildRequest): Promise<QueryAllGuildResponse>;
  GuildMembershipApplication(
    request: QueryGetGuildMembershipApplicationRequest,
  ): Promise<QueryGetGuildMembershipApplicationResponse>;
  GuildMembershipApplicationAll(
    request: QueryAllGuildMembershipApplicationRequest,
  ): Promise<QueryAllGuildMembershipApplicationResponse>;
  /** Queries a list of Infusions. */
  Infusion(request: QueryGetInfusionRequest): Promise<QueryGetInfusionResponse>;
  InfusionAll(request: QueryAllInfusionRequest): Promise<QueryAllInfusionResponse>;
  /** Queries a specific Permission */
  Permission(request: QueryGetPermissionRequest): Promise<QueryGetPermissionResponse>;
  /** Queries a list of Permissions based on Object */
  PermissionByObject(request: QueryAllPermissionByObjectRequest): Promise<QueryAllPermissionResponse>;
  /** Queries a list of Permissions based on the Player with the permissions */
  PermissionByPlayer(request: QueryAllPermissionByPlayerRequest): Promise<QueryAllPermissionResponse>;
  /** Queries a list of all Permissions */
  PermissionAll(request: QueryAllPermissionRequest): Promise<QueryAllPermissionResponse>;
  /** Queries a list of Player items. */
  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
  /** Queries a list of Planet items. */
  Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse>;
  PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse>;
  PlanetAllByPlayer(request: QueryAllPlanetByPlayerRequest): Promise<QueryAllPlanetResponse>;
  /** Queries a list of Reactor items. */
  Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse>;
  ReactorAll(request: QueryAllReactorRequest): Promise<QueryAllReactorResponse>;
  /** Queries a list of Structs items. */
  Struct(request: QueryGetStructRequest): Promise<QueryGetStructResponse>;
  StructAll(request: QueryAllStructRequest): Promise<QueryAllStructResponse>;
  /** Queries a list of Substation items. */
  Substation(request: QueryGetSubstationRequest): Promise<QueryGetSubstationResponse>;
  SubstationAll(request: QueryAllSubstationRequest): Promise<QueryAllSubstationResponse>;
}

export const QueryServiceName = "structs.structs.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.GetBlockHeight = this.GetBlockHeight.bind(this);
    this.Params = this.Params.bind(this);
    this.Address = this.Address.bind(this);
    this.AddressAll = this.AddressAll.bind(this);
    this.AddressAllByPlayer = this.AddressAllByPlayer.bind(this);
    this.AddressAssociationAll = this.AddressAssociationAll.bind(this);
    this.Allocation = this.Allocation.bind(this);
    this.AllocationAll = this.AllocationAll.bind(this);
    this.Grid = this.Grid.bind(this);
    this.GridAll = this.GridAll.bind(this);
    this.Guild = this.Guild.bind(this);
    this.GuildAll = this.GuildAll.bind(this);
    this.GuildMembershipApplication = this.GuildMembershipApplication.bind(this);
    this.GuildMembershipApplicationAll = this.GuildMembershipApplicationAll.bind(this);
    this.Infusion = this.Infusion.bind(this);
    this.InfusionAll = this.InfusionAll.bind(this);
    this.Permission = this.Permission.bind(this);
    this.PermissionByObject = this.PermissionByObject.bind(this);
    this.PermissionByPlayer = this.PermissionByPlayer.bind(this);
    this.PermissionAll = this.PermissionAll.bind(this);
    this.Player = this.Player.bind(this);
    this.PlayerAll = this.PlayerAll.bind(this);
    this.Planet = this.Planet.bind(this);
    this.PlanetAll = this.PlanetAll.bind(this);
    this.PlanetAllByPlayer = this.PlanetAllByPlayer.bind(this);
    this.Reactor = this.Reactor.bind(this);
    this.ReactorAll = this.ReactorAll.bind(this);
    this.Struct = this.Struct.bind(this);
    this.StructAll = this.StructAll.bind(this);
    this.Substation = this.Substation.bind(this);
    this.SubstationAll = this.SubstationAll.bind(this);
  }
  GetBlockHeight(request: QueryBlockHeight): Promise<QueryBlockHeightResponse> {
    const data = QueryBlockHeight.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBlockHeight", data);
    return promise.then((data) => QueryBlockHeightResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Address(request: QueryGetAddressRequest): Promise<QueryAddressResponse> {
    const data = QueryGetAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Address", data);
    return promise.then((data) => QueryAddressResponse.decode(_m0.Reader.create(data)));
  }

  AddressAll(request: QueryAllAddressRequest): Promise<QueryAllAddressResponse> {
    const data = QueryAllAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressAll", data);
    return promise.then((data) => QueryAllAddressResponse.decode(_m0.Reader.create(data)));
  }

  AddressAllByPlayer(request: QueryAllAddressByPlayerRequest): Promise<QueryAllAddressResponse> {
    const data = QueryAllAddressByPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressAllByPlayer", data);
    return promise.then((data) => QueryAllAddressResponse.decode(_m0.Reader.create(data)));
  }

  AddressAssociationAll(request: QueryAllAddressAssociationRequest): Promise<QueryAllAddressAssociationResponse> {
    const data = QueryAllAddressAssociationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressAssociationAll", data);
    return promise.then((data) => QueryAllAddressAssociationResponse.decode(_m0.Reader.create(data)));
  }

  Allocation(request: QueryGetAllocationRequest): Promise<QueryGetAllocationResponse> {
    const data = QueryGetAllocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Allocation", data);
    return promise.then((data) => QueryGetAllocationResponse.decode(_m0.Reader.create(data)));
  }

  AllocationAll(request: QueryAllAllocationRequest): Promise<QueryAllAllocationResponse> {
    const data = QueryAllAllocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocationAll", data);
    return promise.then((data) => QueryAllAllocationResponse.decode(_m0.Reader.create(data)));
  }

  Grid(request: QueryGetGridRequest): Promise<QueryGetGridResponse> {
    const data = QueryGetGridRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Grid", data);
    return promise.then((data) => QueryGetGridResponse.decode(_m0.Reader.create(data)));
  }

  GridAll(request: QueryAllGridRequest): Promise<QueryAllGridResponse> {
    const data = QueryAllGridRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GridAll", data);
    return promise.then((data) => QueryAllGridResponse.decode(_m0.Reader.create(data)));
  }

  Guild(request: QueryGetGuildRequest): Promise<QueryGetGuildResponse> {
    const data = QueryGetGuildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Guild", data);
    return promise.then((data) => QueryGetGuildResponse.decode(_m0.Reader.create(data)));
  }

  GuildAll(request: QueryAllGuildRequest): Promise<QueryAllGuildResponse> {
    const data = QueryAllGuildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildAll", data);
    return promise.then((data) => QueryAllGuildResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipApplication(
    request: QueryGetGuildMembershipApplicationRequest,
  ): Promise<QueryGetGuildMembershipApplicationResponse> {
    const data = QueryGetGuildMembershipApplicationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipApplication", data);
    return promise.then((data) => QueryGetGuildMembershipApplicationResponse.decode(_m0.Reader.create(data)));
  }

  GuildMembershipApplicationAll(
    request: QueryAllGuildMembershipApplicationRequest,
  ): Promise<QueryAllGuildMembershipApplicationResponse> {
    const data = QueryAllGuildMembershipApplicationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GuildMembershipApplicationAll", data);
    return promise.then((data) => QueryAllGuildMembershipApplicationResponse.decode(_m0.Reader.create(data)));
  }

  Infusion(request: QueryGetInfusionRequest): Promise<QueryGetInfusionResponse> {
    const data = QueryGetInfusionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Infusion", data);
    return promise.then((data) => QueryGetInfusionResponse.decode(_m0.Reader.create(data)));
  }

  InfusionAll(request: QueryAllInfusionRequest): Promise<QueryAllInfusionResponse> {
    const data = QueryAllInfusionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InfusionAll", data);
    return promise.then((data) => QueryAllInfusionResponse.decode(_m0.Reader.create(data)));
  }

  Permission(request: QueryGetPermissionRequest): Promise<QueryGetPermissionResponse> {
    const data = QueryGetPermissionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Permission", data);
    return promise.then((data) => QueryGetPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionByObject(request: QueryAllPermissionByObjectRequest): Promise<QueryAllPermissionResponse> {
    const data = QueryAllPermissionByObjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionByObject", data);
    return promise.then((data) => QueryAllPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionByPlayer(request: QueryAllPermissionByPlayerRequest): Promise<QueryAllPermissionResponse> {
    const data = QueryAllPermissionByPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionByPlayer", data);
    return promise.then((data) => QueryAllPermissionResponse.decode(_m0.Reader.create(data)));
  }

  PermissionAll(request: QueryAllPermissionRequest): Promise<QueryAllPermissionResponse> {
    const data = QueryAllPermissionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PermissionAll", data);
    return promise.then((data) => QueryAllPermissionResponse.decode(_m0.Reader.create(data)));
  }

  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse> {
    const data = QueryGetPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Player", data);
    return promise.then((data) => QueryGetPlayerResponse.decode(_m0.Reader.create(data)));
  }

  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse> {
    const data = QueryAllPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlayerAll", data);
    return promise.then((data) => QueryAllPlayerResponse.decode(_m0.Reader.create(data)));
  }

  Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse> {
    const data = QueryGetPlanetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Planet", data);
    return promise.then((data) => QueryGetPlanetResponse.decode(_m0.Reader.create(data)));
  }

  PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse> {
    const data = QueryAllPlanetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlanetAll", data);
    return promise.then((data) => QueryAllPlanetResponse.decode(_m0.Reader.create(data)));
  }

  PlanetAllByPlayer(request: QueryAllPlanetByPlayerRequest): Promise<QueryAllPlanetResponse> {
    const data = QueryAllPlanetByPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlanetAllByPlayer", data);
    return promise.then((data) => QueryAllPlanetResponse.decode(_m0.Reader.create(data)));
  }

  Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse> {
    const data = QueryGetReactorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Reactor", data);
    return promise.then((data) => QueryGetReactorResponse.decode(_m0.Reader.create(data)));
  }

  ReactorAll(request: QueryAllReactorRequest): Promise<QueryAllReactorResponse> {
    const data = QueryAllReactorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReactorAll", data);
    return promise.then((data) => QueryAllReactorResponse.decode(_m0.Reader.create(data)));
  }

  Struct(request: QueryGetStructRequest): Promise<QueryGetStructResponse> {
    const data = QueryGetStructRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Struct", data);
    return promise.then((data) => QueryGetStructResponse.decode(_m0.Reader.create(data)));
  }

  StructAll(request: QueryAllStructRequest): Promise<QueryAllStructResponse> {
    const data = QueryAllStructRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StructAll", data);
    return promise.then((data) => QueryAllStructResponse.decode(_m0.Reader.create(data)));
  }

  Substation(request: QueryGetSubstationRequest): Promise<QueryGetSubstationResponse> {
    const data = QueryGetSubstationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Substation", data);
    return promise.then((data) => QueryGetSubstationResponse.decode(_m0.Reader.create(data)));
  }

  SubstationAll(request: QueryAllSubstationRequest): Promise<QueryAllSubstationResponse> {
    const data = QueryAllSubstationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubstationAll", data);
    return promise.then((data) => QueryAllSubstationResponse.decode(_m0.Reader.create(data)));
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
