"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterByName = exports.getCharacterById = void 0;
const graphql_request_1 = require("graphql-request");
const getCharacterById = (userId) => (0, graphql_request_1.gql) `
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
exports.getCharacterById = getCharacterById;
const getCharacterByName = (name, serverSlug, serverRegion) => (0, graphql_request_1.gql) `
	query getCharacter(
		$characterName: String! = "${name}",
		$characterServerSlug: String! = "${serverSlug}",
		$characterRegion: String! = "${serverRegion}",
	) {
		characterData {
			character(
				name: $characterName,
				serverSlug: $characterServerSlug, 
				serverRegion: $characterRegion
			) {
				name
				server{name}
				server{region{name}}
			}
		}
	}
`;
exports.getCharacterByName = getCharacterByName;
//# sourceMappingURL=getCharacter.js.map