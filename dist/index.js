"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WCLClient = void 0;
const graphql_request_1 = require("graphql-request");
const getCharacter_1 = require("./queries/getCharacter");
var WCLClient;
(function (WCLClient) {
    class Wotlk {
        constructor(token) {
            this.wotlkClient = WCLClient.Wotlk.createClient(WCLClient.Wotlk.WOTLK_ENDPOINT, token);
        }
        static createClient(url, token) {
            return new graphql_request_1.GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            });
        }
        getCharacterFightData(name, serverSlug, serverRegion, zoneID) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.wotlkClient.request((0, getCharacter_1.getFightData)(name, serverSlug, serverRegion, zoneID));
            });
        }
    }
    Wotlk.WOTLK_ENDPOINT = "https://classic.warcraftlogs.com/api/v2/client";
    WCLClient.Wotlk = Wotlk;
    class Retail {
        constructor(token) {
            this.retailClient = WCLClient.Retail.createClient(WCLClient.Retail.RETAIL_ENDPOINT, token);
        }
        static createClient(url, token) {
            return new graphql_request_1.GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            });
        }
    }
    Retail.RETAIL_ENDPOINT = "https://www.warcraftlogs.com/api/v2/client";
    WCLClient.Retail = Retail;
})(WCLClient || (WCLClient = {}));
exports.WCLClient = WCLClient;
//# sourceMappingURL=index.js.map