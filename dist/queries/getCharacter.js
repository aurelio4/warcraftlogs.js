"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterByIdQuery = void 0;
const graphql_request_1 = require("graphql-request");
const getCharacterByIdQuery = (userId) => (0, graphql_request_1.gql) `
	{
		characterData {
			character(id: ${userId}) {
				name
				server {
					slug
				}
				server {
					region {
						name
					}
				}
			}
		}
	}
`;
exports.getCharacterByIdQuery = getCharacterByIdQuery;
//# sourceMappingURL=getCharacter.js.map