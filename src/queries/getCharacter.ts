import { gql } from "graphql-request"

const getCharacterById = (userId: number) => gql`
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
`

const getCharacterByName = (name: String, serverSlug: String, serverRegion: String) => gql`
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
`

// zoneID 1015 = naxx, should be passed through from frontend
const getFightData = (name: String, serverSlug: string, serverRegion: String, zoneID: Number) => gql`
{
	characterData {
		character(
			name: "${name}",
			serverSlug: "${serverSlug}",
			serverRegion: "${serverRegion}"
		) {
			name
			faction
			classID
			zoneRankings(zoneID: ${zoneID})
		}
	}
}
`

export { getCharacterById, getCharacterByName, getFightData }