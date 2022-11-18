"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterByNameQuery = exports.getCharacterByIdQuery = void 0;
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
const getCharacterByNameQuery = (name, serverSlug, serverRegion) => (0, graphql_request_1.gql) `
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
exports.getCharacterByNameQuery = getCharacterByNameQuery;
//# sourceMappingURL=getCharacter.js.map