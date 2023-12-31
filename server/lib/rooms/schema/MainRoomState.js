"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoomState = exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
class Player extends schema_1.Schema {
    constructor(rewardLimit, rewardFloor, rewardLast, rewardCoinAmount, rewardTimerStamp) {
        super();
        this.adminStatus = false;
        this.noWeb3 = false;
        this.flatKeys = [];
        this.statActionList = [];
        this.currentFlat = "";
        this.roomTour = false;
        this.lotteryTickets = 0;
        this.dailyRewardLimit = 0;
        this.dailyRewardFloor = "";
        this.dailyRewardCoins = 0;
        this.dailyRewardLast = new Date();
        this.dailyRewardHint = [];
        this.inworldConnection = undefined;
        this.inworldClient = undefined;
        this.dailyRewardLimit = rewardLimit;
        this.dailyRewardFloor = rewardFloor;
        this.dailyRewardLast = rewardLast;
        this.dailyRewardCoins = rewardCoinAmount;
        this.rewardTimerStamp = rewardTimerStamp;
    }
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "address", void 0);
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "email", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "connected", void 0);
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "pendingSessionId", void 0);
__decorate([
    (0, schema_1.type)('number')
], Player.prototype, "pendingSessionTimestamp", void 0);
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "activeSessionId", void 0);
__decorate([
    (0, schema_1.type)('number')
], Player.prototype, "level", void 0);
__decorate([
    (0, schema_1.type)('number')
], Player.prototype, "xp", void 0);
__decorate([
    (0, schema_1.type)('number')
], Player.prototype, "currency", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], Player.prototype, "banned", void 0);
__decorate([
    (0, schema_1.type)('string')
], Player.prototype, "furnitureJson", void 0);
class MainRoomState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.users = new schema_1.MapSchema();
    }
}
exports.MainRoomState = MainRoomState;
__decorate([
    (0, schema_1.type)("number")
], MainRoomState.prototype, "countdown", void 0);
__decorate([
    (0, schema_1.type)({ map: Player })
], MainRoomState.prototype, "users", void 0);
