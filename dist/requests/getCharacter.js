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
exports.getCharacterByName = exports.getCharacterById = void 0;
const client_1 = require("../api/client");
const queries_1 = require("../queries");
const getCharacterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield client_1.client.request((0, queries_1.getCharacterByIdQuery)(id));
        return data;
    }
    catch (err) {
        return err.response.errors;
    }
});
exports.getCharacterById = getCharacterById;
const getCharacterByName = (name, serverSlug, serverRegion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield client_1.client.request((0, queries_1.getCharacterByNameQuery)(name, serverSlug, serverRegion));
        return data;
    }
    catch (err) {
        return err.response.errors;
    }
});
exports.getCharacterByName = getCharacterByName;
//# sourceMappingURL=getCharacter.js.map