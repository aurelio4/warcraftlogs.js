import { gql } from "graphql-request"

const getCharacterByIdQuery = (userId: number) => gql`
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

const getCharacterByNameQuery = (name: String, serverSlug: String, serverRegion: String) => gql`
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

export { getCharacterByIdQuery, getCharacterByNameQuery }