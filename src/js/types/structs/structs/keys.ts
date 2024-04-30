/* eslint-disable */

export const protobufPackage = "structs.structs";

export enum objectType {
  guild = 0,
  player = 1,
  planet = 2,
  reactor = 3,
  substation = 4,
  struct = 5,
  allocation = 6,
  infusion = 7,
  address = 8,
  UNRECOGNIZED = -1,
}

export function objectTypeFromJSON(object: any): objectType {
  switch (object) {
    case 0:
    case "guild":
      return objectType.guild;
    case 1:
    case "player":
      return objectType.player;
    case 2:
    case "planet":
      return objectType.planet;
    case 3:
    case "reactor":
      return objectType.reactor;
    case 4:
    case "substation":
      return objectType.substation;
    case 5:
    case "struct":
      return objectType.struct;
    case 6:
    case "allocation":
      return objectType.allocation;
    case 7:
    case "infusion":
      return objectType.infusion;
    case 8:
    case "address":
      return objectType.address;
    case -1:
    case "UNRECOGNIZED":
    default:
      return objectType.UNRECOGNIZED;
  }
}

export function objectTypeToJSON(object: objectType): string {
  switch (object) {
    case objectType.guild:
      return "guild";
    case objectType.player:
      return "player";
    case objectType.planet:
      return "planet";
    case objectType.reactor:
      return "reactor";
    case objectType.substation:
      return "substation";
    case objectType.struct:
      return "struct";
    case objectType.allocation:
      return "allocation";
    case objectType.infusion:
      return "infusion";
    case objectType.address:
      return "address";
    case objectType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gridAttributeType {
  ore = 0,
  fuel = 1,
  capacity = 2,
  load = 3,
  structsLoad = 4,
  power = 5,
  connectionCapacity = 6,
  connectionCount = 7,
  allocationPointerStart = 8,
  allocationPointerEnd = 9,
  UNRECOGNIZED = -1,
}

export function gridAttributeTypeFromJSON(object: any): gridAttributeType {
  switch (object) {
    case 0:
    case "ore":
      return gridAttributeType.ore;
    case 1:
    case "fuel":
      return gridAttributeType.fuel;
    case 2:
    case "capacity":
      return gridAttributeType.capacity;
    case 3:
    case "load":
      return gridAttributeType.load;
    case 4:
    case "structsLoad":
      return gridAttributeType.structsLoad;
    case 5:
    case "power":
      return gridAttributeType.power;
    case 6:
    case "connectionCapacity":
      return gridAttributeType.connectionCapacity;
    case 7:
    case "connectionCount":
      return gridAttributeType.connectionCount;
    case 8:
    case "allocationPointerStart":
      return gridAttributeType.allocationPointerStart;
    case 9:
    case "allocationPointerEnd":
      return gridAttributeType.allocationPointerEnd;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gridAttributeType.UNRECOGNIZED;
  }
}

export function gridAttributeTypeToJSON(object: gridAttributeType): string {
  switch (object) {
    case gridAttributeType.ore:
      return "ore";
    case gridAttributeType.fuel:
      return "fuel";
    case gridAttributeType.capacity:
      return "capacity";
    case gridAttributeType.load:
      return "load";
    case gridAttributeType.structsLoad:
      return "structsLoad";
    case gridAttributeType.power:
      return "power";
    case gridAttributeType.connectionCapacity:
      return "connectionCapacity";
    case gridAttributeType.connectionCount:
      return "connectionCount";
    case gridAttributeType.allocationPointerStart:
      return "allocationPointerStart";
    case gridAttributeType.allocationPointerEnd:
      return "allocationPointerEnd";
    case gridAttributeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum allocationType {
  static = 0,
  dynamic = 1,
  automated = 2,
  UNRECOGNIZED = -1,
}

export function allocationTypeFromJSON(object: any): allocationType {
  switch (object) {
    case 0:
    case "static":
      return allocationType.static;
    case 1:
    case "dynamic":
      return allocationType.dynamic;
    case 2:
    case "automated":
      return allocationType.automated;
    case -1:
    case "UNRECOGNIZED":
    default:
      return allocationType.UNRECOGNIZED;
  }
}

export function allocationTypeToJSON(object: allocationType): string {
  switch (object) {
    case allocationType.static:
      return "static";
    case allocationType.dynamic:
      return "dynamic";
    case allocationType.automated:
      return "automated";
    case allocationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum guildJoinBypassLevel {
  /** closed - Feature off */
  closed = 0,
  /** permissioned - Only those with permissions can do it */
  permissioned = 1,
  /** member - All members of the guild can contribute */
  member = 2,
  UNRECOGNIZED = -1,
}

export function guildJoinBypassLevelFromJSON(object: any): guildJoinBypassLevel {
  switch (object) {
    case 0:
    case "closed":
      return guildJoinBypassLevel.closed;
    case 1:
    case "permissioned":
      return guildJoinBypassLevel.permissioned;
    case 2:
    case "member":
      return guildJoinBypassLevel.member;
    case -1:
    case "UNRECOGNIZED":
    default:
      return guildJoinBypassLevel.UNRECOGNIZED;
  }
}

export function guildJoinBypassLevelToJSON(object: guildJoinBypassLevel): string {
  switch (object) {
    case guildJoinBypassLevel.closed:
      return "closed";
    case guildJoinBypassLevel.permissioned:
      return "permissioned";
    case guildJoinBypassLevel.member:
      return "member";
    case guildJoinBypassLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum guildJoinType {
  invite = 0,
  request = 1,
  direct = 2,
  proxy = 3,
  UNRECOGNIZED = -1,
}

export function guildJoinTypeFromJSON(object: any): guildJoinType {
  switch (object) {
    case 0:
    case "invite":
      return guildJoinType.invite;
    case 1:
    case "request":
      return guildJoinType.request;
    case 2:
    case "direct":
      return guildJoinType.direct;
    case 3:
    case "proxy":
      return guildJoinType.proxy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return guildJoinType.UNRECOGNIZED;
  }
}

export function guildJoinTypeToJSON(object: guildJoinType): string {
  switch (object) {
    case guildJoinType.invite:
      return "invite";
    case guildJoinType.request:
      return "request";
    case guildJoinType.direct:
      return "direct";
    case guildJoinType.proxy:
      return "proxy";
    case guildJoinType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum registrationStatus {
  proposed = 0,
  approved = 1,
  denied = 2,
  revoked = 3,
  UNRECOGNIZED = -1,
}

export function registrationStatusFromJSON(object: any): registrationStatus {
  switch (object) {
    case 0:
    case "proposed":
      return registrationStatus.proposed;
    case 1:
    case "approved":
      return registrationStatus.approved;
    case 2:
    case "denied":
      return registrationStatus.denied;
    case 3:
    case "revoked":
      return registrationStatus.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return registrationStatus.UNRECOGNIZED;
  }
}

export function registrationStatusToJSON(object: registrationStatus): string {
  switch (object) {
    case registrationStatus.proposed:
      return "proposed";
    case registrationStatus.approved:
      return "approved";
    case registrationStatus.denied:
      return "denied";
    case registrationStatus.revoked:
      return "revoked";
    case registrationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ambit {
  water = 0,
  land = 1,
  air = 2,
  space = 3,
  UNRECOGNIZED = -1,
}

export function ambitFromJSON(object: any): ambit {
  switch (object) {
    case 0:
    case "water":
      return ambit.water;
    case 1:
    case "land":
      return ambit.land;
    case 2:
    case "air":
      return ambit.air;
    case 3:
    case "space":
      return ambit.space;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ambit.UNRECOGNIZED;
  }
}

export function ambitToJSON(object: ambit): string {
  switch (object) {
    case ambit.water:
      return "water";
    case ambit.land:
      return "land";
    case ambit.air:
      return "air";
    case ambit.space:
      return "space";
    case ambit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum structCategory {
  planetary = 0,
  fleet = 1,
  UNRECOGNIZED = -1,
}

export function structCategoryFromJSON(object: any): structCategory {
  switch (object) {
    case 0:
    case "planetary":
      return structCategory.planetary;
    case 1:
    case "fleet":
      return structCategory.fleet;
    case -1:
    case "UNRECOGNIZED":
    default:
      return structCategory.UNRECOGNIZED;
  }
}

export function structCategoryToJSON(object: structCategory): string {
  switch (object) {
    case structCategory.planetary:
      return "planetary";
    case structCategory.fleet:
      return "fleet";
    case structCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum structStatus {
  building = 0,
  active = 1,
  inactive = 2,
  destroyed = 3,
  UNRECOGNIZED = -1,
}

export function structStatusFromJSON(object: any): structStatus {
  switch (object) {
    case 0:
    case "building":
      return structStatus.building;
    case 1:
    case "active":
      return structStatus.active;
    case 2:
    case "inactive":
      return structStatus.inactive;
    case 3:
    case "destroyed":
      return structStatus.destroyed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return structStatus.UNRECOGNIZED;
  }
}

export function structStatusToJSON(object: structStatus): string {
  switch (object) {
    case structStatus.building:
      return "building";
    case structStatus.active:
      return "active";
    case structStatus.inactive:
      return "inactive";
    case structStatus.destroyed:
      return "destroyed";
    case structStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum structType {
  miningRig = 0,
  refinery = 1,
  smallGenerator = 2,
  UNRECOGNIZED = -1,
}

export function structTypeFromJSON(object: any): structType {
  switch (object) {
    case 0:
    case "miningRig":
      return structType.miningRig;
    case 1:
    case "refinery":
      return structType.refinery;
    case 2:
    case "smallGenerator":
      return structType.smallGenerator;
    case -1:
    case "UNRECOGNIZED":
    default:
      return structType.UNRECOGNIZED;
  }
}

export function structTypeToJSON(object: structType): string {
  switch (object) {
    case structType.miningRig:
      return "miningRig";
    case structType.refinery:
      return "refinery";
    case structType.smallGenerator:
      return "smallGenerator";
    case structType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
