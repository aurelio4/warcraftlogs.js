import { gql } from "graphql-request"

const getCharacterById = (userId: number) => gql`
	query getCharacterID(
		$characterId: Number! = ${userId}
	) {
		characterData {
			character(id: $characterId) {
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
	query getCharacterFight (
		$characterName: String! = "${name}",
		$characterServerSlug: String! = "${serverSlug}",
		$characterServerRegion: String! = "${serverRegion}",
		$raidZoneID: Number! = ${zoneID}
	){
		characterData {
			character(
				name: $characterName,
				serverSlug: $characterServerSlug,
				serverRegion: $characterServerRegion
			) {
				name
				faction{name}
				classID
				zoneRankings(zoneID: $raidZoneID)
			}
		}
	}
`

export { getCharacterById, getCharacterByName, getFightData }