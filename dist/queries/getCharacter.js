"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFightData = exports.getCharacterByName = exports.getCharacterById = void 0;
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
// zoneID 1015 = naxx, should be passed through from frontend
const getFightData = (name, serverSlug, serverRegion, zoneID) => (0, graphql_request_1.gql) `
{
	characterData {
		character(
			name: "${name}",
			serverSlug: "${serverSlug}",
			serverRegion: "${serverRegion}"
		) {
			name
			faction{name}
			classID
			zoneRankings(zoneID: ${zoneID})
		}
	}
}
`;
exports.getFightData = getFightData;
//# sourceMappingURL=getCharacter.js.map