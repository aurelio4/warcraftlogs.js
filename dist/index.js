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
exports.WCLClient = exports.WCLQuery = void 0;
const graphql_request_1 = require("graphql-request");
class WCLClient {
    constructor(token) {
        this.wotlkClient = WCLClient.createClient(WCLClient.WOTLK_ENDPOINT, token);
        this.retailClient = WCLClient.createClient(WCLClient.RETAIL_ENDPOINT, token);
    }
    static createClient(url, token) {
        return new graphql_request_1.GraphQLClient(url, {
            headers: { authorization: `Bearer ${token}` },
        });
    }
    wotlkRequest(wclQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.wotlkClient.request(wclQuery);
                return data;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.WCLClient = WCLClient;
WCLClient.WOTLK_ENDPOINT = "https://classic.warcraftlogs.com/api/v2/client";
WCLClient.RETAIL_ENDPOINT = "https://www.warcraftlogs.com/api/v2/client";
exports.WCLQuery = require("./queries");
//# sourceMappingURL=index.js.map